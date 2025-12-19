// src/components/landing/testimonials.tsx
"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      initials: "JW",
      name: "Jessica Williams",
      location: "Brooklyn, NY",
      service: "Kitchen Renovation",
      text: "Found an amazing electrician through Karya. The entire process was seamless, from booking to payment. Highly recommend this platform for anyone needing home services!",
      rating: 5,
    },
    {
      initials: "RT",
      name: "Robert Taylor",
      location: "Queens, NY",
      service: "Plumbing Services",
      text: "As a service provider, Karya has transformed my business. I get quality leads, manage projects efficiently, and the payment system is reliable. It's been a game-changer.",
      rating: 5,
    },
    {
      initials: "ML",
      name: "Maria Lopez",
      location: "Manhattan, NY",
      service: "HVAC Repair",
      text: "I was skeptical at first, but the verification process gave me confidence. The HVAC technician was professional, punctual, and did excellent work. Will definitely use again!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-neutral-0">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-neutral-800">
            What Our Clients Say
          </h2>
          <p className="body-large text-neutral-600">
            Real experiences from real customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-neutral-0 rounded-xl p-8 border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="body-regular mb-6 italic text-neutral-700">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-neutral-0 flex items-center justify-center font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">
                    {testimonial.name}
                  </h4>
                  <p className="body-small text-neutral-600">
                    {testimonial.location} • {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
