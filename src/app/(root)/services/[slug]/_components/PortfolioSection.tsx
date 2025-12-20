"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Provider } from "./providerData";

interface PortfolioSectionProps {
  provider: Provider;
}

export default function PortfolioSection({ provider }: PortfolioSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="border-l-4 border-primary-500 pl-6">
          <h2 className="heading-3 text-neutral-900">
            Portfolio & Work Examples
          </h2>
        </div>
        <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2">
          View all {provider.portfolio.length} photos
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {provider.portfolio.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(image.url)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-neutral-0 font-semibold text-sm mb-1">
                  {image.title}
                </p>
                <p className="text-neutral-200 text-xs">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedImage}
              alt="Portfolio"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-neutral-0 rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-2xl text-neutral-900">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
