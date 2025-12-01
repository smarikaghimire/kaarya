// src/components/landing/how-it-works.tsx
'use client';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-neutral-0">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-neutral-800">How Karya Works</h2>
          <p className="body-large text-neutral-600">Get started in three simple steps</p>
        </div>

        {/* Decorative Line */}
        <div className="w-full h-1 bg-primary mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-8">
             
            </div>
            <h3 className="heading-4 mb-3 text-neutral-800">Tell Us What You Need</h3>
            <p className="body-regular text-neutral-600">
              Describe your project, set your budget, and specify your timeline. Our smart matching system will find the perfect providers for you.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-8">
              <svg className="w-48 h-48 mx-auto text-primary" viewBox="0 0 200 200" fill="currentColor">
                <circle cx="80" cy="60" r="30" />
                <path d="M 50 100 Q 50 90, 60 90 L 100 90 Q 110 90, 110 100 L 110 140 Q 110 150, 100 150 L 60 150 Q 50 150, 50 140 Z" />
                <path d="M 120 80 L 150 110 L 120 140 Z" />
              </svg>
            </div>
            <h3 className="heading-4 mb-3 text-neutral-800">Browse Verified Providers</h3>
            <p className="body-regular text-neutral-600">
              Review profiles, ratings, and portfolios of background-checked professionals. Compare quotes and choose the best fit.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-8">
              <svg className="w-48 h-48 mx-auto text-primary" viewBox="0 0 200 200" fill="currentColor">
                <path d="M 40 80 L 100 40 L 160 80 L 160 160 L 40 160 Z" />
                <rect x="80" y="110" width="40" height="50" fill="white" />
              </svg>
            </div>
            <h3 className="heading-4 mb-3 text-neutral-800">Get The Job Done</h3>
            <p className="body-regular text-neutral-600">
              Track progress, communicate seamlessly, and make secure payments. Rate your experience when complete.
            </p>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="w-full h-1 bg-primary mt-16 rounded-full"></div>
      </div>
    </section>
  );
}