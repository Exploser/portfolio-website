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
    if (req.method === 'POST') {
        const { firstName, lastName, email, message, phone } = req.body;
        const name = firstName + lastName;
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
