import React, { useState } from 'react';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.message.trim()) next.message = 'Please enter a message';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Simulate submit; in real app, POST to backend or service like Formspree
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section style={{ padding: '4rem 5%', maxWidth: 900 }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Contact Roaming Tours and Travel</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Have questions or want a custom itinerary? Send us a message and our team will get back to you.
      </p>
      {submitted && (
        <div style={{ background: '#e7f5ff', border: '1px solid #a5d8ff', padding: '0.75rem 1rem', borderRadius: 6, marginBottom: '1rem' }}>
          Thank you! Your message has been sent. We’ll reply shortly.
        </div>
      )}
      <form onSubmit={onSubmit} noValidate>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your full name" style={{ width: '100%', padding: '0.6rem', borderRadius: 6, border: '1px solid #ccc' }} />
            {errors.name && <small style={{ color: 'crimson' }}>{errors.name}</small>}
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" style={{ width: '100%', padding: '0.6rem', borderRadius: 6, border: '1px solid #ccc' }} />
            {errors.email && <small style={{ color: 'crimson' }}>{errors.email}</small>}
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={onChange} rows={6} placeholder="Tell us about your trip, dates, preferences..." style={{ width: '100%', padding: '0.6rem', borderRadius: 6, border: '1px solid #ccc' }} />
          {errors.message && <small style={{ color: 'crimson' }}>{errors.message}</small>}
        </div>
        <button type="submit" style={{ marginTop: '1rem', background: '#007BFF', color: '#fff', padding: '0.7rem 1.2rem', border: 'none', borderRadius: 6 }}>
          Send Message
        </button>
      </form>
      <div style={{ marginTop: '2rem', color: '#555' }}>
        <p><strong>Email:</strong> hello@roamingtours.example</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Office:</strong> 123 Explorer Ave, Suite 10, Travel City</p>
      </div>
    </section>
  );
};

export default Contact;