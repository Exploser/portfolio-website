const nodemailer = require("nodemailer");
require('dotenv').config();

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://exploser.info');  // Adjust this to match your frontend domain in production
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle pre-flight requests for CORS
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { firstName, lastName, email, message, phone } = req.body;
        const name = `${firstName} ${lastName}`; // Added a space between first and last name
        const mail = {
            from: name,
            to: process.env.EMAIL_USER,
            subject: "Contact Form Submission - Portfolio",
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
        };

        try {
            await contactEmail.sendMail(mail);
            res.status(200).json({ status: "Message Sent" });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};
