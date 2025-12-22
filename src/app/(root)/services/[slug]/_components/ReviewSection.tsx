"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Provider } from "./providerData";

interface ReviewsSectionProps {
  provider: Provider;
}

export default function ReviewsSection({ provider }: ReviewsSectionProps) {
  const [sortBy, setSortBy] = useState("Most Recent");

  return (
    <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="border-l-4 border-primary-500 pl-6">
          <h2 className="heading-3 text-neutral-900">
            Client Reviews ({provider.reviews.length})
          </h2>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none px-4 py-2 pr-10 rounded-lg border border-neutral-200 bg-neutral-0 text-neutral-700 text-sm font-medium focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(26,177,137,0.08)] cursor-pointer transition-all"
          >
            <option value="Most Recent">Most Recent</option>
            <option value="Highest Rating">Highest Rating</option>
            <option value="Most Helpful">Most Helpful</option>
          </select>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none text-xs"
          />
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {provider.reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 bg-neutral-50 rounded-xl border border-neutral-100"
          >
            {/* Reviewer Info */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-neutral-0 font-semibold flex-shrink-0">
                {review.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-neutral-900">
                    {review.name}
                  </h4>
                  {review.verified && (
                    <span className="px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                      ✓ Verified Client
                    </span>
                  )}
                </div>
                <p className="text-neutral-600 body-small">{review.date}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={
                    index < review.rating
                      ? "text-yellow-500"
                      : "text-neutral-300"
                  }
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="body-regular text-neutral-700 mb-3 leading-relaxed">
              {review.comment}
            </p>

            {/* Project Tag */}
            <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm mb-4">
              {review.project}
            </div>

            {/* Helpful */}
            <div className="flex items-center gap-2 pt-4 border-t border-neutral-200">
              <button className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors">
                <FontAwesomeIcon icon={faThumbsUp} className="text-sm" />
                <span className="text-sm font-medium">Helpful</span>
              </button>
              <span className="text-neutral-500 text-sm">
                {review.helpful} people found this helpful
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 text-center">
        <button className="btn-secondary">Load More Reviews</button>
      </div>
    </div>
  );
}
