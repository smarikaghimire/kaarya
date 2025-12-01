// src/components/landing/top-rated-providers.tsx
'use client';

export default function TopRatedProviders() {
  const providers = [
    {
      initials: 'MC',
      name: 'Mike Chen',
      title: 'Master Electrician',
      rating: 4.9,
      reviews: 247,
      distance: '1.2 mi away',
    },
    {
      initials: 'SR',
      name: 'Sarah Rodriguez',
      title: 'Licensed Plumber',
      rating: 4.8,
      reviews: 189,
      distance: '2.4 mi away',
    },
    {
      initials: 'DJ',
      name: 'David Johnson',
      title: 'HVAC Specialist',
      rating: 4.9,
      reviews: 312,
      distance: '0.8 mi away',
    },
    {
      initials: 'EP',
      name: 'Emily Parker',
      title: 'Master Carpenter',
      rating: 5.0,
      reviews: 156,
      distance: '3.1 mi away',
    },
  ];

  return (
    <section className="py-20 bg-neutral-0">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-neutral-800">Top-Rated Providers in Your Area</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                  <svg className="w-4 h-4 text-neutral-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              </div>
              <h3 className="heading-4 mb-1 text-neutral-800">{provider.name}</h3>
              <p className="body-small mb-3 text-neutral-600">{provider.title}</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-neutral-800">{provider.rating}</span>
              </div>
              <p className="body-small mb-3 text-neutral-600">{provider.reviews} reviews</p>
              <p className="body-small mb-4 flex items-center justify-center gap-1 text-neutral-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
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