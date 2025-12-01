'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <div className="container">
          <h1 className="heading-1 contact-header-title">
            Get In Touch
          </h1>
          <p className="body-large contact-header-subtitle">
            Have a question, feedback? We&apos;d love to hear from you. Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form Card */}
      <div className="contact-form-section">
        <div className="container">
          <div className="contact-card">
            {/* Left Side - Contact Information */}
            <div className="contact-info-panel">
              <h2 className="heading-3 contact-info-title">
                Contact Information
              </h2>
              <p className="body-regular contact-info-subtitle">
                We&apos;re here to help you get the most out of Kaarya. Reach out to us!
              </p>

              <div className="contact-info-list">
                {/* Location */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">
                      Bisai Technologies, LLC
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">
                      +977 9815126740
                    </p>
                    <p className="contact-info-sublabel">
                      WhatsApp
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">
                      contact@kaarya.app
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="contact-decoration"></div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-panel">
              <div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="body-small form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Trapealy"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="body-small form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@gmail.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="body-small form-label">
                    Your Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter your subject"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="body-small form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="form-textarea"
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="button" onClick={handleSubmit} className="btn-primary form-submit-btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Ways to Connect */}
      <div className="contact-methods-section">
        <div className="container">
          <h2 className="heading-2 contact-methods-title">
            More Ways to Connect
          </h2>

          <div className="contact-methods-grid">
            {/* Email Support */}
            <div className="contact-method-card">
              <div className="contact-method-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="contact-method-content">
                <h3 className="heading-4 contact-method-title">Email Support</h3>
                <p className="body-small contact-method-description">
                  Get help from our support team
                </p>
                <p className="body-regular contact-method-value">
                  contact@kaarya.app
                </p>
                <p className="body-small contact-method-availability">
                  24/7 response within 4 hours
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-method-card">
              <div className="contact-method-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="contact-method-content">
                <h3 className="heading-4 contact-method-title">WhatsApp</h3>
                <p className="body-small contact-method-description">
                  Live Chat with our team
                </p>
                <p className="body-regular contact-method-value">
                  Available WhatsApp support
                </p>
                <p className="body-small contact-method-availability">
                  Mon-Fri, 9AM-6PM PST
                </p>
              </div>
            </div>

            {/* Phone Support */}
            <div className="contact-method-card">
              <div className="contact-method-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <div className="contact-method-content">
                <h3 className="heading-4 contact-method-title">Phone Support</h3>
                <p className="body-small contact-method-description">
                  Call us for urgent issues
                </p>
                <p className="body-regular contact-method-value">
                  (636) 209-4879
                </p>
                <p className="body-small contact-method-availability">
                  Mon-Fri, 9AM-6PM PST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}