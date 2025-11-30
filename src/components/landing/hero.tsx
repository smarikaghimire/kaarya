import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
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
  );
}