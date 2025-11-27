'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="heading-2 mb-4">
              Manage Service Projects with
              <br />
              <span className="text-primary">Kaarya</span>
            </h1>
            <p className="body-large text-neutral-600 mb-8">
              Complete service management solution to manage sites, resources,
              finances, and parties all in one powerful platform.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="btn-primary">Download App</button>
              <button className="btn-secondary">Learn more</button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1">
            <Image
              src="/hero-image.png"
              alt="Service professionals reviewing plans"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}