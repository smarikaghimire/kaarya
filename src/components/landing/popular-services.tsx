"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faWrench,
  faSnowflake,
  faHammer,
  faPaintRoller,
  faTree,
  faBroom,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export default function PopularServices() {
  const services = [
    { name: "Electrical Work", icon: faBolt, providers: 847 },
    { name: "Plumbing", icon: faWrench, providers: 623 },
    { name: "HVAC", icon: faSnowflake, providers: 412 },
    { name: "Carpentry", icon: faHammer, providers: 534 },
    { name: "Painting", icon: faPaintRoller, providers: 389 },
    { name: "Landscaping", icon: faTree, providers: 456 },
    { name: "Cleaning", icon: faBroom, providers: 712 },
    { name: "Handyman", icon: faTools, providers: 891 },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-neutral-800 mb-3">Popular Services</h2>
          <p className="body-large text-neutral-500">
            Browse services by category
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-0 rounded-2xl p-10 text-center cursor-pointer border-2 border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-500"
            >
              <div className="flex justify-center mb-6">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-4xl text-primary-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                {service.name}
              </h3>
              <p className="text-[15px] text-neutral-500">
                {service.providers} providers
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
