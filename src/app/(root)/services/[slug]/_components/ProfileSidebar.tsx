"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCheckCircle,
  faTruck,
  faRepeat,
  faShieldAlt,
  faPhone,
  faEnvelope,
  faComment,
  faCommentDots,
  faMapMarkerAlt,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Provider } from "./providerData";

interface ProfileSidebarProps {
  provider: Provider;
}

// Icon mapping for dynamic icons
const iconMap: Record<string, any> = {
  faClock,
  faCheckCircle,
  faTruck,
  faRepeat,
  faCommentDots,
  faPhone,
  faComment,
  faEnvelope,
};

export default function ProfileSidebar({ provider }: ProfileSidebarProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(
    provider.availability.find((day) => day.available)?.date || null
  );

  return (
    <div className="space-y-6">
      {/* Availability Card */}
      <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-6">
        <h3 className="heading-4 text-neutral-900 mb-4">Availability</h3>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {provider.availability.map((day) => (
            <button
              key={day.date}
              onClick={() => day.available && setSelectedDate(day.date)}
              disabled={!day.available}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                selectedDate === day.date
                  ? "bg-primary-500 text-neutral-0"
                  : day.available
                  ? "bg-primary-50 text-primary-700 hover:bg-primary-100"
                  : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
              }`}
            >
              <span className="text-xs font-medium mb-1">{day.day}</span>
              <span className="text-lg font-semibold">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Request Booking Button */}
        <button className="w-full btn-primary">Request Booking</button>
      </div>

      {/* Quick Stats Card */}
      <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-6">
        <h3 className="heading-4 text-neutral-900 mb-4">Quick Stats</h3>
        <div className="space-y-3">
          {provider.quickStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon
                  icon={iconMap[stat.icon] || faClock}
                  className="text-primary-600 text-sm"
                />
              </div>
              <div className="flex-1">
                <span className="text-neutral-700 body-regular">
                  {stat.label}
                </span>
              </div>
              <span className="font-semibold text-neutral-900">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Area Card */}
      <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-6">
        <h3 className="heading-4 text-neutral-900 mb-4">Service Area</h3>

        {/* Map Placeholder */}
        <div className="relative w-full h-48 bg-neutral-100 rounded-lg mb-4 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-primary-500 flex items-center justify-center bg-primary-50">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-700">
                    {provider.serviceArea.radius}
                  </p>
                  <p className="text-xs text-primary-600">miles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-neutral-700 body-regular text-center mb-3">
          Services within {provider.serviceArea.radius} miles of{" "}
          {provider.serviceArea.location}
        </p>
        <button className="w-full text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-center gap-2">
          View on map
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </button>
      </div>

      {/* Background Verified Card */}
      {provider.backgroundVerified && (
        <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-primary-600 text-xl"
              />
            </div>
            <div>
              <h3 className="heading-4 text-neutral-900 mb-1">
                Background Verified
              </h3>
              <p className="body-small text-neutral-600">
                This provider has passed our comprehensive background check
              </p>
            </div>
          </div>
          <button className="w-full btn-primary">Contact Provider</button>
        </div>
      )}

      {/* Best Ways to Reach Me Card */}
      <div className="bg-neutral-0 rounded-xl shadow-sm border border-neutral-200 p-6">
        <h3 className="heading-4 text-neutral-900 mb-4">
          Best Ways to Reach Me
        </h3>
        <div className="space-y-3">
          {provider.contactMethods.map((method, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={iconMap[method.icon] || faPhone}
                  className="text-neutral-600 text-lg w-5"
                />
                <span className="text-neutral-700 body-regular">
                  {method.label}
                </span>
              </div>
              {method.preferred && (
                <div className="w-3 h-3 rounded-full bg-primary-500"></div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 body-small text-neutral-600">
          Working hours: Mon-Sat 8AM-6PM
        </p>
      </div>

      {/* Report Profile */}
      <button className="w-full text-neutral-500 hover:text-neutral-700 font-medium text-sm flex items-center justify-center gap-2 py-3">
        <FontAwesomeIcon icon={faFlag} />
        Report this profile
      </button>
    </div>
  );
}
