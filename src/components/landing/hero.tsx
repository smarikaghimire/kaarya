'use client';

import Image from "next/image";
import { Search, MapPin, CheckCircle, Briefcase, Star } from "lucide-react";

export default function Hero() {
  return (
    <>
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #e8f5f1 0%, #d8f0e8 100%);
          padding: 6rem 0 4rem 0;
          min-height: 550px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-left {
          max-width: 700px;
        }

        .hero-title {
          font-size: clamp(2.25rem, 4vw, 3rem);
          font-weight: 700;
          color: #1e3a4f;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.0625rem;
          color: #5a6c7a;
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .search-container {
          background: white;
          border-radius: 6px;
          padding: 0.375rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0;
          max-width: 700px;
        }

        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.75rem 1rem;
          min-width: 0;
        }

        .search-input-wrapper:first-of-type {
          flex: 1.2;
        }

        .search-input-wrapper:last-of-type {
          flex: 0.8;
        }

        .search-input-wrapper :global(svg) {
          color: #0d9563;
          flex-shrink: 0;
          width: 18px;
          height: 18px;
        }

        .search-divider {
          width: 1px;
          height: 20px;
          background: #e5e7eb;
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 0.9375rem;
          color: #374151;
          outline: none;
          min-width: 0;
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .search-button {
          padding: 0.75rem 1.75rem;
          background: #0d9563;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .search-button:hover {
          background: #059953;
        }

        .stats-row {
          display: flex;
          gap: 1.75rem;
          align-items: center;
          flex-wrap: nowrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
          color: #374151;
          font-weight: 400;
          white-space: nowrap;
        }

        .stat-item :global(svg) {
          color: #0d9563;
          flex-shrink: 0;
          width: 18px;
          height: 18px;
        }

        .hero-right {
          position: relative;
          display: flex;
          justify-content: flex-end;
          padding-right: 2rem;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 550px;
          height: auto;
        }

        @media (max-width: 1200px) {
          .hero-grid {
            grid-template-columns: 1fr 0.9fr;
            gap: 3rem;
          }

          .stats-row {
            gap: 1.5rem;
          }

          .stat-item {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            gap: 2.5rem;
          }

          .stats-row {
            gap: 1.25rem;
          }

          .stat-item {
            font-size: 0.8125rem;
          }

          .hero-image-wrapper {
            max-width: 480px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 5rem 0 3rem 0;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-left {
            max-width: 100%;
          }

          .hero-right {
            justify-content: center;
            padding-right: 0;
          }

          .search-container {
            flex-wrap: wrap;
            padding: 0.5rem;
            gap: 0.5rem;
          }

          .search-input-wrapper {
            width: 100%;
            padding: 0.625rem 0.875rem;
          }

          .search-input-wrapper:first-of-type,
          .search-input-wrapper:last-of-type {
            flex: 1;
          }

          .search-divider {
            display: none;
          }

          .search-button {
            width: 100%;
            padding: 0.875rem;
          }

          .stats-row {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .stat-item {
            font-size: 0.8125rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.875rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-left">
              <h1 className="hero-title">
                Find Trusted Service Providers Near You
              </h1>

              <p className="hero-subtitle">
                Connect with verified professionals for electrical, plumbing, HVAC, and more
              </p>

              {/* Search Box */}
              <div className="search-container">
                <div className="search-input-wrapper">
                  <Search size={18} />
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="search-input"
                  />
                </div>

                <div className="search-divider"></div>

                <div className="search-input-wrapper">
                  <MapPin size={18} />
                  <input
                    type="text"
                    placeholder="Where?"
                    className="search-input"
                  />
                </div>

                <button className="search-button">
                  Search
                </button>
              </div>

              {/* Stats */}
              <div className="stats-row">
                <div className="stat-item">
                  <CheckCircle size={18} />
                  <span>5,000+ Verified Providers</span>
                </div>
                <div className="stat-item">
                  <Briefcase size={18} />
                  <span>50,000+ Jobs Completed</span>
                </div>
                <div className="stat-item">
                  <Star size={18} />
                  <span>4.8★ Average Rating</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="hero-right">
              <div className="hero-image-wrapper">
                <Image
                  src="/hero-side.png"
                  alt="Professional service providers"
                  width={550}
                  height={400}
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}