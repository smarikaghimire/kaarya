'use client';

import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <style jsx>{`
        .hero-section {
          position: relative;
          padding: 5rem 0;
          overflow: hidden;
          background-color: var(--neutral-0);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.7) 50%,
            rgba(255, 255, 255, 0.3) 100%
          );
          z-index: 1;
        }

        .hero-section :global(.container) {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 0;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-text-content {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 3rem 0;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-buttons :global(.btn-primary),
          .hero-buttons :global(.btn-secondary) {
            width: 100%;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Background Image */}
        <div className="hero-background">
          <Image
            src="/herosection.png"
            alt="Hero background"
            fill
            priority
            quality={90}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="container">
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-text-content">
              <h1 className="heading-2">
                Manage Service Projects with
                <br />
                <span className="text-primary">Kaarya</span>
              </h1>

              <p className="body-large text-neutral-600">
                Complete service management solution to manage sites, resources,
                finances, and parties all in one powerful platform.
              </p>

              {/* Buttons */}
              <div className="hero-buttons">
                <button className="btn-primary">Download App</button>
                <button className="btn-secondary">Learn more</button>
              </div>
            </div>

            {/* Right Content - Hero Side Image */}
            <div className="hero-image-container">
              <Image
                src="/hero-side.png"
                alt="Hero side illustration"
                width={600}
                height={380}
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}