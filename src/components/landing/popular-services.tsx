'use client';

export default function PopularServices() {
  const services = [
    { name: 'Electrical Work', icon: '⚡', providers: 847, color: '#f59e0b' },
    { name: 'Plumbing', icon: '🔧', providers: 623, color: '#6b7280' },
    { name: 'HVAC', icon: '❄️', providers: 412, color: '#3b82f6' },
    { name: 'Carpentry', icon: '🔨', providers: 534, color: '#8b5cf6' },
    { name: 'Painting', icon: '🎨', providers: 389, color: '#ec4899' },
    { name: 'Landscaping', icon: '🌳', providers: 456, color: '#10b981' },
    { name: 'Cleaning', icon: '🧹', providers: 712, color: '#f97316' },
    { name: 'Handyman', icon: '🔧', providers: 891, color: '#6b7280' },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-neutral-800 mb-4">
            Popular Services
          </h2>
          <p className="body-large text-neutral-600">
            Browse services by category
          </p>
        </div>

        {/* Services Grid - 4 columns */}
        <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`bg-neutral-0 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                index === 0 ? 'border-primary' : 'border-neutral-200'
              } hover:border-primary`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>
              
              {/* Service Name */}
              <h3 className="heading-4 text-neutral-800 mb-2">
                {service.name}
              </h3>
              
              {/* Provider Count */}
              <p className="body-small text-neutral-600">
                {service.providers} providers
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}