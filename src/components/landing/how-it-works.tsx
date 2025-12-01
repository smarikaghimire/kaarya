'use client';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-neutral-0">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-neutral-800 mb-4">
            How Kaarya Works
          </h2>
          <p className="body-large text-neutral-600">
            Get started in three simple steps
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            {/* Number Badge */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary mb-6">
              <span className="text-neutral-0 font-bold text-xl">1</span>
            </div>

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <svg 
                className="w-12 h-12 text-primary" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="heading-4 text-neutral-800 mb-3">
                Tell Us What You Need
              </h3>
              <p className="body-regular text-neutral-600">
                Describe your project, set your budget, and specify your timeline. Our smart matching system will find the perfect providers for you.
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
              <svg 
                className="w-12 h-12 text-primary" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                <path d="M20 10l-2 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="heading-4 text-neutral-800 mb-3">
                Browse Verified Providers
              </h3>
              <p className="body-regular text-neutral-600">
                Review profiles, ratings, and portfolios of background-checked professionals. Compare quotes and choose the best fit.
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
              <svg 
                className="w-12 h-12 text-primary" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="heading-4 text-neutral-800 mb-3">
                Get The Job Done
              </h3>
              <p className="body-regular text-neutral-600">
                Track progress, communicate seamlessly, and make secure payments. Rate your experience when complete.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Get Started Now →
          </button>
        </div>
      </div>
    </section>
  );
}