'use client';

import React, { useState } from 'react';
import ServiceProviderCard from '@/components/cards/ServiceCategoryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faSliders } from '@fortawesome/free-solid-svg-icons';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('Electrician');
  const [location, setLocation] = useState('Brooklyn, NY');

  const categories = [
    'All Services',
    'Panel Upgrades',
    'Emergency Repair',
    'Smart Home',
    'Commercial'
  ];

  const providers = [
    {
      id: 1,
      name: 'Mike Chen',
      initials: 'MC',
      title: 'Master Electrician',
      location: 'Brooklyn, NY',
      rating: 4.9,
      reviewCount: 247,
      description: 'Licensed electrician with 15+ years of experience in residential and commercial electrical work. Specialized in panel upgrades, smart home installations.',
      experience: '15 yrs exp',
      successRate: '98%',
      responseTime: '< 1hr response',
      distance: '1.2 mi away',
      priceRange: '$150-200/hour',
      isVerified: true
    },
    {
      id: 2,
      name: 'Sarah Rodriguez',
      initials: 'SR',
      title: 'Licensed Electrician',
      location: 'Queens, NY',
      rating: 4.8,
      reviewCount: 189,
      description: 'Certified electrician specializing in residential wiring, lighting design, and emergency repairs. Available for same-day service in most cases.',
      experience: '12 yrs exp',
      successRate: '95%',
      responseTime: '< 2hr response',
      distance: '2.4 mi away',
      priceRange: '$120-180/hour',
      isVerified: true
    },
    {
      id: 3,
      name: 'David Johnson',
      initials: 'DJ',
      title: 'Electrical Contractor',
      location: 'Manhattan, NY',
      rating: 4.9,
      reviewCount: 312,
      description: 'Full-service electrical contractor with expertise in commercial buildings, industrial systems, and large-scale residential projects. Licensed and insured.',
      experience: '18 yrs exp',
      successRate: '99%',
      responseTime: '< 30min response',
      distance: '0.8 mi away',
      priceRange: '$175-225/hour',
      isVerified: true
    },
    {
      id: 4,
      name: 'Emily Parker',
      initials: 'EP',
      title: 'Master Electrician',
      location: 'Brooklyn, NY',
      rating: 5.0,
      reviewCount: 156,
      description: 'Expert in green energy installations, solar panel wiring, and energy-efficient electrical solutions. Committed to sustainable practices and quality work.',
      experience: '10 yrs exp',
      successRate: '100%',
      responseTime: '< 1hr response',
      distance: '1.5 mi away',
      priceRange: '$140-190/hour',
      isVerified: true
    },
    {
      id: 5,
      name: 'Thomas Wilson',
      initials: 'TW',
      title: 'Licensed Electrician',
      location: 'Bronx, NY',
      rating: 4.7,
      reviewCount: 203,
      description: 'Friendly and reliable electrician with a focus on customer satisfaction. Specializes in troubleshooting, repairs, and installations for homes and small businesses.',
      experience: '14 yrs exp',
      successRate: '96%',
      responseTime: '< 2hr response',
      distance: '3.1 mi away',
      priceRange: '$110-160/hour',
      isVerified: true
    },
    {
      id: 6,
      name: 'Anna Lee',
      initials: 'AL',
      title: 'Electrical Engineer',
      location: 'Manhattan, NY',
      rating: 4.9,
      reviewCount: 178,
      description: 'Professional electrical engineer with expertise in complex electrical systems design, automation, and smart building technologies. Perfect for commercial projects.',
      experience: '16 yrs exp',
      successRate: '98%',
      responseTime: '< 1hr response',
      distance: '1.9 mi away',
      priceRange: '$200-250/hour',
      isVerified: true
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Search Section */}
      <section className="bg-neutral-0 py-8 border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="flex-1 w-full relative">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="text"
                placeholder="Electrician"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Location Input */}
            <div className="flex-1 w-full relative">
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="text"
                placeholder="Brooklyn, NY"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Search Button */}
            <button className="btn-primary whitespace-nowrap w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-neutral-700 font-medium">
                247 providers found
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Category Pills */}
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-primary text-neutral-0'
                      : 'bg-neutral-0 text-neutral-700 border border-neutral-200 hover:border-primary'
                  }`}
                >
                  {category}
                </button>
              ))}

              {/* Filters Button */}
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 bg-neutral-0 text-neutral-700 hover:border-primary transition-all">
                <FontAwesomeIcon icon={faSliders} />
                <span className="text-sm font-medium">Filters</span>
              </button>

              {/* Sort Dropdown */}
              <select className="px-4 py-2 rounded-lg border border-neutral-200 bg-neutral-0 text-neutral-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer">
                <option>Sort by: Best Match</option>
                <option>Sort by: Highest Rating</option>
                <option>Sort by: Most Reviews</option>
                <option>Sort by: Lowest Price</option>
                <option>Sort by: Nearest</option>
              </select>
            </div>
          </div>

          {/* Providers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <ServiceProviderCard key={provider.id} {...provider} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}