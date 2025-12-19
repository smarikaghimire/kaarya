// src/components/landing/top-rated-providers.tsx
"use client";

import { MapPin, Star, CheckCircle2 } from "lucide-react";

export default function TopRatedProviders() {
  const providers = [
    {
      initials: "MC",
      name: "Mike Chen",
      title: "Master Electrician",
      rating: 4.9,
      reviews: 247,
      distance: "1.2 mi away",
    },
    {
      initials: "SR",
      name: "Sarah Rodriguez",
      title: "Licensed Plumber",
      rating: 4.8,
      reviews: 189,
      distance: "2.4 mi away",
    },
    {
      initials: "DJ",
      name: "David Johnson",
      title: "HVAC Specialist",
      rating: 4.9,
      reviews: 312,
      distance: "0.8 mi away",
    },
    {
      initials: "EP",
      name: "Emily Parker",
      title: "Master Carpenter",
      rating: 5.0,
      reviews: 156,
      distance: "3.1 mi away",
    },
  ];

  return (
    <section className="py-20 bg-neutral-0">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-neutral-800">
            Top-Rated Providers in Your Area
          </h2>
          <p className="body-large text-neutral-600">
            Connect with verified professionals near you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="bg-neutral-0 rounded-xl p-6 text-center border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-full bg-primary-600 text-neutral-0 flex items-center justify-center text-xl font-bold">
                  {provider.initials}
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-neutral-0">
                  <CheckCircle2 className="w-4 h-4 text-neutral-0" />
                </div>
              </div>
              <h3 className="heading-4 mb-1 text-neutral-800">
                {provider.name}
              </h3>
              <p className="body-small mb-3 text-neutral-600">
                {provider.title}
              </p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-neutral-800">
                  {provider.rating}
                </span>
              </div>
              <p className="body-small mb-3 text-neutral-600">
                {provider.reviews} reviews
              </p>
              <p className="body-small mb-4 flex items-center justify-center gap-1 text-neutral-500">
                <MapPin className="w-4 h-4" />
                {provider.distance}
              </p>
              <button className="btn-primary w-full">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
