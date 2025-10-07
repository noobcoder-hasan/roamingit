import React, { useState } from 'react';
import './ContactSection.css';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Helper function to send data to backend for Google Sheets integration
  const sendToGoogleSheets = async (data) => {
    try {
      const response = await fetch('http://localhost:5001/api/sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save to Google Sheets');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Google Sheets backend error:', error);
      // Don't throw error - Google Sheets is optional
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: '', message: '' });

  // Send email through EmailJS
  emailjs
    .send(
      'service_lm87q9q',
      'template_cjbvs49',
      formData,
      'bw_WjLTQzqRr3Clsv'
    )
    .then(
      async () => {
        // After email is successfully sent, store in Google Sheet via backend
        await sendToGoogleSheets(formData);

        setStatus({
          type: 'success',
          message: "Message sent successfully! We'll be in touch.",
        });
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      },
      (error) => {
        console.error(error?.text || error);
        setStatus({
          type: 'error',
          message: 'Oops! Something went wrong. Try again later.',
        });
        setLoading(false);
      }
    );
};



  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-container">
        <div className="contact-intro">
          <h2 id="contact-title">Contact Us</h2>
          <p>We’re here to help. Send a message and we’ll respond promptly.</p>
        </div>

        <div className="contact-main">
          <div className="contact-info">
            <div className="info-card">
              <h3>Email</h3>
              <p>zami.roamingbd@gmail.com</p>
            </div>
            <div className="info-card">
              <h3>Phone</h3>
              <p>+8801711223344</p>
            </div>
            <div className="info-card">
              <h3>Office</h3>
              <p>Road-2 Uttara Rajlokkhi, Dhaka</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3>Send us a message</h3>

            {status.message && (
              <div className={`status-message ${status.type}`} aria-live="polite">
                {status.message}
              </div>
            )}

            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
              aria-required="true"
            />

            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              aria-required="true"
            />

            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              disabled={loading}
              aria-required="true"
            />

            <button
              type="submit"
              className={`btn submit-btn${loading ? ' loading' : ''}`}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
