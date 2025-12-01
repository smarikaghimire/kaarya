// src/components/landing/popular-services.tsx
'use client';

export default function PopularServices() {
  const services = [
    { name: 'Electrical Work', icon: '⚡', providers: 847 },
    { name: 'Plumbing', icon: '🔧', providers: 623 },
    { name: 'HVAC', icon: '❄️', providers: 412 },
    { name: 'Carpentry', icon: '🔨', providers: 534 },
    { name: 'Painting', icon: '🎨', providers: 389 },
    { name: 'Landscaping', icon: '🌳', providers: 456 },
    { name: 'Cleaning', icon: '🧹', providers: 712 },
    { name: 'Handyman', icon: '🔧', providers: 891 },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-neutral-800">Popular Services</h2>
          <p className="body-large text-neutral-600">Browse services by category</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-neutral-0 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-neutral-200"
            >
              <div className="text-5xl mb-4 text-primary">{service.icon}</div>
              <h3 className="heading-4 mb-2 text-neutral-800">{service.name}</h3>
              <p className="body-small text-neutral-600">{service.providers} providers</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}