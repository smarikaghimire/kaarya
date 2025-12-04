// components/cards/ServiceProviderCard.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface ServiceProviderCardProps {
  id: number;
  name: string;
  initials: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  description: string;
  experience: string;
  successRate: string;
  responseTime: string;
  distance: string;
  priceRange: string;
  isVerified: boolean;
}

export default function ServiceProviderCard({
  name,
  initials,
  title,
  location,
  rating,
  reviewCount,
  description,
  experience,
  successRate,
  responseTime,
  distance,
  priceRange,
  isVerified
}: ServiceProviderCardProps) {
  return (
    <div className="bg-neutral-0 rounded-2xl p-6 border border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-primary-500">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-neutral-0 font-bold text-xl">
            {initials}
          </div>
          {isVerified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-neutral-0 text-sm" />
            </div>
          )}
        </div>

        {/* Name and Title */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-neutral-800 mb-1">
            {name}
          </h3>
          <p className="text-sm text-neutral-600 mb-2">{title}</p>
          <div className="flex items-center gap-1 text-sm text-neutral-500">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={`text-sm ${
                i < Math.floor(rating) ? 'text-yellow-400' : 'text-neutral-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-neutral-800">{rating}</span>
        <span className="text-sm text-neutral-500">({reviewCount} reviews)</span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
        {description}
      </p>

      {/* Stats */}
      <div className="flex items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1 text-neutral-700">
          <span className="font-medium">{experience}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium text-primary-500">{successRate}</span>
          <span className="text-neutral-500">success</span>
        </div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faClock} className="text-neutral-400 text-xs" />
          <span className="text-neutral-500">{responseTime}</span>
        </div>
      </div>

      {/* Distance Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary-700 rounded-full text-sm font-medium">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs" />
          {distance}
        </span>
      </div>

      {/* Price */}
      <div className="text-lg font-bold text-neutral-800 mb-4">
        {priceRange}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="btn-primary flex-1">
          Contact Now
        </button>
        <button className="btn-secondary flex-1">
          View Profile
        </button>
      </div>
    </div>
  );
}