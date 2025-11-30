import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-6xl font-bold leading-tight mb-5 text-neutral-900">
              Manage Service Projects with
              <br />
              <span className="text-primary">Kaarya</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-7 leading-relaxed" style={{ color: '#6b7280' }}>
              Complete service management solution to manage sites, resources,
              finances, and parties all in one powerful platform.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 items-center">
              <button 
                type="button" 
                className="btn-primary px-6 py-3 text-base font-medium"
              >
                Download App
              </button>
              <button 
                type="button" 
                className="btn-secondary px-6 py-3 text-base font-medium"
              >
                Learn more
              </button>
            </div>
          </div>

          {/* Right Content - Side Image */}
          <div className="flex-1 flex justify-end">
            <div className="relative max-w-lg">
              <Image
                src="/hero-side.png"
                alt="Service professionals reviewing plans"
                width={600}
                height={380}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}