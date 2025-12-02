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
    alert('Message sent successfully!');
  };

  return (
    <>
      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: white;
          padding: 2rem 2rem 3rem 2rem;
        }

        .contact-outer-wrapper {
          max-width: 1380px;
          margin: 0 auto;
          background: linear-gradient(to bottom, #d4f4e7 0%, #d4f4e7 420px, white 420px, white 100%);
          border-radius: 0;
          box-shadow: none;
          overflow: visible;
          padding: 3rem 4rem 5rem 4rem;
          position: relative;
          min-height: 900px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          padding-top: 0;
        }

        .contact-title {
          font-size: clamp(2.25rem, 4vw, 3rem);
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .contact-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #1ab189;
        }

        .contact-subtitle {
          font-size: 1rem;
          color: #4b5563;
          max-width: 650px;
          margin: 1.5rem auto 0;
          line-height: 1.7;
        }

        .contact-big-card {
          background: white;
          border-radius: 1.25rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          margin-bottom: 4rem;
          position: relative;
          top: -40px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          padding: 2.5rem;
        }

        .contact-split-section {
          display: grid;
          grid-template-columns: 380px 1fr;
          min-height: 580px;
        }

        .contact-info-panel {
          background: linear-gradient(135deg, #0d9563 0%, #059953 100%);
          padding: 3rem 2.5rem;
          color: white;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-radius: 1rem;
        }

        .info-title {
          font-size: 1.625rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: white;
        }

        .info-subtitle {
          font-size: 0.9375rem;
          line-height: 1.6;
          opacity: 0.95;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-icon {
          width: 38px;
          height: 38px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-icon i {
          font-size: 1rem;
          color: white;
        }

        .info-text h4 {
          font-size: 0.9375rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          color: white;
        }

        .info-text p {
          font-size: 0.8125rem;
          margin: 0;
          opacity: 0.85;
        }

        .decorative-circle {
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 250px;
          height: 250px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
        }

        .contact-form-panel {
          padding: 3rem 3rem;
          background: white;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-textarea {
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-family: inherit;
          color: #1f2937;
          transition: all 0.3s ease;
          background: white;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #1ab189;
          box-shadow: 0 0 0 3px rgba(26, 177, 137, 0.08);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9ca3af;
        }

        .form-textarea {
          resize: vertical;
          min-height: 140px;
        }

        .form-submit-btn {
          background: #0d9563;
          color: white;
          padding: 0.875rem 2rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .form-submit-btn:hover {
          background: #059953;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(13, 149, 99, 0.25);
        }

        .contact-methods-section {
          padding: 0 0 2rem 0;
          background: transparent;
          margin-top: -3rem;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .more-ways-title {
          font-size: 1.625rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 2.5rem;
          text-align: left;
        }

        .contact-methods-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .method-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.75rem 1.5rem;
          display: flex;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .method-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          border-color: #1ab189;
        }

        .method-icon {
          width: 50px;
          height: 50px;
          background: #d4f4e7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .method-icon i {
          font-size: 1.25rem;
          color: #0d9563;
        }

        .method-content h3 {
          font-size: 1.0625rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 0.375rem 0;
        }

        .method-content p {
          font-size: 0.8125rem;
          color: #6b7280;
          margin: 0 0 0.875rem 0;
          line-height: 1.5;
        }

        .method-value {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #0d9563;
          margin-bottom: 0.25rem;
        }

        .method-availability {
          font-size: 0.8125rem;
          color: #9ca3af;
        }

        @media (max-width: 1024px) {
          .contact-page {
            padding: 2rem 1.5rem 2.5rem 1.5rem;
          }

          .contact-outer-wrapper {
            max-width: 1100px;
            padding: 2.5rem 3rem 4rem 3rem;
            background: linear-gradient(to bottom, #d4f4e7 0%, #d4f4e7 380px, white 380px, white 100%);
            min-height: 850px;
          }

          .contact-big-card {
            max-width: 1000px;
          }

          .contact-split-section {
            grid-template-columns: 340px 1fr;
          }

          .contact-methods-grid {
            grid-template-columns: 1fr;
          }

          .contact-methods-section {
            padding: 0 3rem 0 3rem;
            max-width: 1000px;
          }
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 1.5rem 1rem 2rem 1rem;
          }

          .contact-outer-wrapper {
            padding: 2rem 2.5rem 2rem 2.5rem;
            background: linear-gradient(to bottom, #d4f4e7 0%, #d4f4e7 320px, white 320px, white 100%);
          }

          .contact-big-card {
            top: -40px;
            max-width: 100%;
            padding: 1.5rem;
          }

          .contact-split-section {
            grid-template-columns: 1fr;
          }

          .contact-info-panel {
            padding: 2.5rem 2.25rem;
          }

          .contact-form-panel {
            padding: 2.5rem 2.25rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-methods-section {
            padding: 0 2.5rem 0 2.5rem;
            max-width: 100%;
          }

          .contact-header {
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 480px) {
          .contact-page {
            padding: 1rem 0.75rem 1.5rem 0.75rem;
          }

          .contact-outer-wrapper {
            padding: 1.5rem 1.5rem 1.5rem 1.5rem;
            background: linear-gradient(to bottom, #d4f4e7 0%, #d4f4e7 280px, white 280px, white 100%);
          }

          .contact-big-card {
            top: -30px;
            padding: 1.25rem;
          }

          .contact-info-panel {
            padding: 2rem 1.75rem;
          }

          .contact-form-panel {
            padding: 2rem 1.75rem;
          }

          .contact-methods-section {
            padding: 0 1.5rem 0 1.5rem;
            margin-top: -2rem;
          }

          .method-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>

      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <div className="contact-page">
        {/* Outer Wrapper Card - Contains Everything */}
        <div className="contact-outer-wrapper">
          {/* Header - Inside Outer Card */}
          <div className="contact-header">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              Have a question, feedback? We&apos;d love to hear from you. Reach out to us and our team will get back to you as soon as possible.
            </p>
          </div>

          {/* Inner Contact Card */}
          <div className="contact-big-card">
            {/* Top Section: Split Green/White */}
            <div className="contact-split-section">
              {/* Left Panel - Contact Info (Green) */}
              <div className="contact-info-panel">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-subtitle">
                  We&apos;re here to help you get the most out of Kaarya. Reach out to us!
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-text">
                      <h4>Bisai Technologies, LLC</h4>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="info-icon">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="info-text">
                      <h4>+977 9815126740</h4>
                      <p>WhatsApp</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="info-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info-text">
                      <h4>contact@kaarya.app</h4>
                    </div>
                  </div>
                </div>

                <div className="decorative-circle"></div>
              </div>

              {/* Right Panel - Form (White) */}
              <div className="contact-form-panel">
                <div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
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
                      <label className="form-label">Your Email</label>
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

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label">Your Subject</label>
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

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>

                  <button type="button" onClick={handleSubmit} className="form-submit-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: More Ways to Connect */}
          <div className="contact-methods-section">
            <h2 className="more-ways-title">More Ways to Connect</h2>

            <div className="contact-methods-grid">
              <div className="method-card">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-content">
                  <h3>Email Support</h3>
                  <p>Get help from our support team</p>
                  <div className="method-value">contact@kaarya.app</div>
                  <div className="method-availability">24/7 response within 4 hours</div>
                </div>
              </div>

              <div className="method-card">
                <div className="method-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="method-content">
                  <h3>WhatsApp</h3>
                  <p>Live Chat with our team</p>
                  <div className="method-value">Available WhatsApp support</div>
                  <div className="method-availability">Mon-Fri, 9AM-6PM PST</div>
                </div>
              </div>

              <div className="method-card">
                <div className="method-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="method-content">
                  <h3>Phone Support</h3>
                  <p>Call us for urgent issues</p>
                  <div className="method-value">(636) 209-4879</div>
                  <div className="method-availability">Mon-Fri, 9AM-6PM PST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}