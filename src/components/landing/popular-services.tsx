'use client';

export default function PopularServices() {
  return (
    <>
      <style jsx>{`
        .popular-services-section {
          padding: 5rem 0;
          background-color: #f5f5f5;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.75rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #718096;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: white;
          border-radius: 1rem;
          padding: 2.5rem 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: var(--primary-500);
        }

        .icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .icon-wrapper i {
          font-size: 2rem;
          color: var(--primary-500);
        }

        .service-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .provider-count {
          font-size: 0.9375rem;
          color: #718096;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .popular-services-section {
            padding: 4rem 0;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .service-card {
            padding: 2rem 1rem;
          }

          .icon-wrapper i {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <section className="popular-services-section">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <h2 className="section-title">Popular Services</h2>
            <p className="section-subtitle">Browse services by category</p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {/* Electrical Work */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="service-name">Electrical Work</h3>
              <p className="provider-count">847 providers</p>
            </div>

            {/* Plumbing */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fas fa-wrench"></i>
              </div>
              <h3 className="service-name">Plumbing</h3>
              <p className="provider-count">623 providers</p>
            </div>

            {/* HVAC */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fas fa-snowflake"></i>
              </div>
              <h3 className="service-name">HVAC</h3>
              <p className="provider-count">412 providers</p>
            </div>

            {/* Carpentry */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fas fa-hammer"></i>
              </div>
              <h3 className="service-name">Carpentry</h3>
              <p className="provider-count">534 providers</p>
            </div>

            {/* Painting */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fas fa-paint-roller"></i>
              </div>
              <h3 className="service-name">Painting</h3>
              <p className="provider-count">389 providers</p>
            </div>

            {/* Landscaping */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fas fa-tree"></i>
              </div>
              <h3 className="service-name">Landscaping</h3>
              <p className="provider-count">456 providers</p>
            </div>

            {/* Cleaning */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fas fa-broom"></i>
              </div>
              <h3 className="service-name">Cleaning</h3>
              <p className="provider-count">712 providers</p>
            </div>

            {/* Handyman */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="service-name">Handyman</h3>
              <p className="provider-count">891 providers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}