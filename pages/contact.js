// pages/contact.js
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you, {formData.name}! Your message has been received.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Your Name: </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Your Message: </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
