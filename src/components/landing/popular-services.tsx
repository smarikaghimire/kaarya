'use client';

import { Zap, Wrench, Snowflake, Hammer, Paintbrush, Trees, Sparkles, HardHat } from 'lucide-react';

export default function PopularServices() {
  const services = [
    { name: 'Electrical Work', icon: Zap, providers: 847 },
    { name: 'Plumbing', icon: Wrench, providers: 623 },
    { name: 'HVAC', icon: Snowflake, providers: 412 },
    { name: 'Carpentry', icon: Hammer, providers: 534 },
    { name: 'Painting', icon: Paintbrush, providers: 389 },
    { name: 'Landscaping', icon: Trees, providers: 456 },
    { name: 'Cleaning', icon: Sparkles, providers: 712 },
    { name: 'Handyman', icon: HardHat, providers: 891 },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className={`bg-neutral-0 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                  index === 0 ? 'border-primary' : 'border-neutral-200'
                } hover:border-primary`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                
                {/* Service Name */}
                <h3 className="heading-4 text-neutral-800 mb-2">
                  {service.name}
                </h3>
                
                {/* Provider Count */}
                <p className="body-small text-neutral-600">
                  {service.providers} providers
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}