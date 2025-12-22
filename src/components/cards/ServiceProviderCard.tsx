import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMapMarkerAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

interface ServiceProviderCardProps {
  id: number;
  name: string;
  initials: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  description: string;
  experienceYears: string;
  successRate: string;
  responseTime: string;
  distance: string;
  priceRange: string;
  isVerified: boolean;
  slug: string;
}

export default function ServiceProviderCard({
  id,
  name,
  initials,
  title,
  location,
  rating,
  reviewCount,
  description,
  experienceYears,
  successRate,
  responseTime,
  distance,
  priceRange,
  isVerified,
  slug,
}: ServiceProviderCardProps) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="bg-neutral-0 rounded-xl border border-neutral-200 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-neutral-200">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-xl font-bold">{initials}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-neutral-900 truncate">
                  {name}
                </h3>
                {isVerified && (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary text-sm flex-shrink-0"
                  />
                )}
              </div>
              <p className="text-neutral-600 text-sm mb-2">{title}</p>
              <div className="flex items-center gap-1 text-sm">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-500 text-xs"
                />
                <span className="font-semibold text-neutral-900">{rating}</span>
                <span className="text-neutral-500">({reviewCount})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-6 border-b border-neutral-200">
          <p className="text-neutral-700 text-sm line-clamp-2">{description}</p>
        </div>

        {/* Stats */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Experience:</span>
            <span className="font-medium text-neutral-900">
              {experienceYears}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Success Rate:</span>
            <span className="font-medium text-primary">{successRate}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Response Time:</span>
            <span className="font-medium text-neutral-900">{responseTime}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-neutral-400"
            />
            <span className="font-medium text-neutral-900">{distance}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0">
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
            <span className="text-lg font-bold text-neutral-900">
              {priceRange}
            </span>
            <button className="btn-primary text-sm">View Profile</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
