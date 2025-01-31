import './Contact.css'
import React, { useState } from 'react';
import Layout from '../../molecules/Layout/Layout';
import Title from '../../atoms/Title/Title';

interface FormData {
    name: string;
    email: string;
    message: string;
  }

const ContactPage: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setSubmitted(true);
    };
    

    return (
        <Layout>
             <div className="contact-form-container">
                <Title size={1} centerText={true}>Contact Us</Title>
                {submitted ? (
                <div>
                    <p className="success-message">Thank you for contacting me! I'll get back to you soon.</p>
                    <p>{formData.name}</p>
                    <p>{formData.email}</p>
                </div>
                ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here"
                        required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
                )}
            </div>
        </Layout>
    );
};

export default ContactPage;