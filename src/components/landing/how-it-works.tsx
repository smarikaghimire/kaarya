// src/components/landing/how-it-works.tsx
"use client";

import { ClipboardList, UserCheck, Handshake } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-neutral-0">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-neutral-800 mb-4">How Kaarya Works</h2>
          <p className="body-large text-neutral-600">
            Get started in three simple steps
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            {/* Number Badge */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary mb-6">
              <span className="text-neutral-0 font-bold text-xl">1</span>
            </div>

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <ClipboardList className="w-12 h-12 text-primary" />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="heading-4 text-neutral-800 mb-3">
                Tell Us What You Need
              </h3>
              <p className="body-regular text-neutral-600">
                Describe your project, set your budget, and specify your
                timeline. Our smart matching system will find the perfect
                providers for you.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            {/* Number Badge */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary mb-6">
              <span className="text-neutral-0 font-bold text-xl">2</span>
            </div>

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <UserCheck className="w-12 h-12 text-primary" />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="heading-4 text-neutral-800 mb-3">
                Browse Verified Providers
              </h3>
              <p className="body-regular text-neutral-600">
                Review profiles, ratings, and portfolios of background-checked
                professionals. Compare quotes and choose the best fit.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            {/* Number Badge */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary mb-6">
              <span className="text-neutral-0 font-bold text-xl">3</span>
            </div>

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <Handshake className="w-12 h-12 text-primary" />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="heading-4 text-neutral-800 mb-3">
                Get The Job Done
              </h3>
              <p className="body-regular text-neutral-600">
                Track progress, communicate seamlessly, and make secure
                payments. Rate your experience when complete.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">Get Started Now →</button>
        </div>
      </div>
    </section>
  );
}
