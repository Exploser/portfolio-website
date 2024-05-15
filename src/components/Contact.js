import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recaptchaVerified, setRecaptchaVerified] = useState(false);
    const recaptchaRef = useRef(null);

    const onFormUpdate = (category, value) => {
        setFormDetails(prev => ({ ...prev, [category]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recaptchaVerified) {
            setStatus({ success: false, message: 'Please complete the ReCAPTCHA to submit the form.' });
            return;
        };

        setIsSubmitting(true);
        setButtonText('Sending...');

        const recaptchaToken = recaptchaRef.current.getValue();

        try {
            let response = await fetch("https://exploser.info/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...formDetails, recaptchaToken}),
            });

            let result = await response.json();

            setIsSubmitting(false);
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            setRecaptchaVerified(false);
            recaptchaRef.current.reset();

            if (response.ok) {
                setStatus({ success: true, message: 'Message sent successfully' });
            } else {
                setStatus({ success: false, message: result.message || 'Something went wrong, please try again later.' });
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setIsSubmitting(false);
            setButtonText("Send");
            setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
        }
    };

    const handleRecaptcha = (value) => {
        setRecaptchaVerified(!!value);
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="contact-side-1">
                            <img src={contactImg} alt="Contact Me" />
                            <p>Hey thanks for visiting my website, I don't use any social media apps on the daily. So, the best way to reach me would be through emails. Just fill the form and hit send!!!</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    </Col>
                                    <Col sm={12} className="px-1">
                                        <textarea rows="4" value={formDetails.message} placeholder="message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    </Col>
                                </Row>
                            <ReCAPTCHA ref={recaptchaRef} sitekey='6Lcv5dkpAAAAAOomniJd_ADIv7GQKkI4U9UlML3A' onChange={handleRecaptcha} />
                            <button type="submit" disabled={isSubmitting}><span>{buttonText}</span></button>
                            {status.message && <span className={`message ${status.success ? "success status-txt" : "danger status-txt"}`}>{status.message}</span>}
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
