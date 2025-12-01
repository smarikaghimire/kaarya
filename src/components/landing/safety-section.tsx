// src/components/landing/safety-section.tsx
'use client';

export default function SafetySection() {
  const features = [
    'Background-checked providers with verified credentials',
    'Verified licenses and insurance documentation',
    'Secure payment processing with buyer protection',
    '24/7 customer support for your peace of mind',
    'Money-back guarantee on completed work',
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="bg-neutral-0 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-neutral-800">with Satified with</h3>
                <h3 className="text-3xl font-bold text-neutral-800">Satisfied Client</h3>
              </div>
              <img
                src="/handshake.png"
                alt="Professional handshake"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="heading-2 mb-8 text-neutral-800">Your Safety is Our Priority</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-neutral-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <p className="body-large flex-1 text-neutral-700">{feature}</p>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-8">Learn About Our Verification Process</button>
          </div>
        </div>
      </div>
    </section>
  );
}