"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faClipboardCheck,
  faShieldAlt,
  faWrench,
  faHardHat,
  faHandshake,
  faStar,
  faCheckCircle,
  faPaintRoller,
  faTools,
  faLightbulb,
  faAward,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const serviceCategories = [
    {
      icon: faHardHat,
      name: "Construction",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: faWrench,
      name: "Plumbing",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: faLightbulb,
      name: "Electrical",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: faPaintRoller,
      name: "Painting",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: faTools,
      name: "Carpentry",
      color: "from-red-500 to-red-600",
    },
    {
      icon: faCogs,
      name: "HVAC",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: faShieldAlt,
      name: "Roofing",
      color: "from-gray-600 to-gray-700",
    },
    {
      icon: faCheckCircle,
      name: "And More",
      color: "from-[#1ab189] to-[#2dc99e]",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Compact Hero Section */}
      <div className="relative h-[420px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image1.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e]/85 to-[#2d6a4f]/90 z-[1]"></div>

        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full mb-4 backdrop-blur-sm border border-white/30">
              <FontAwesomeIcon icon={faAward} className="text-white text-xs" />
              <span className="text-white text-xs font-semibold tracking-wide">
                About Kaarya
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Connecting You with Trusted Service Providers
            </h1>
            <p className="text-base text-white/95 leading-relaxed mb-5">
              Your complete platform for finding reliable contractors, plumbers,
              electricians, and construction professionals while empowering
              service providers to manage their projects seamlessly.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-[#1ab189] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all shadow-lg">
                Find a Provider
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all backdrop-blur-sm">
                Become a Provider
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center pt-16 pb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Built for Construction Excellence
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kaarya delivers comprehensive construction management tools designed
            specifically for modern construction businesses to streamline
            operations and maximize efficiency.
          </p>
        </div>

        {/* Mission & Stats Cards */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-8">
                We empower construction businesses with intelligent tools that
                simplify project management, resource tracking, and financial
                oversight. Kaarya was created to bring digital efficiency to the
                construction industry.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1ab189] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-white text-xs"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
                      Site Management
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Create and manage multiple construction sites with
                      real-time tracking
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1ab189] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-white text-xs"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
                      Resource Control
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Track materials, equipment, and workforce allocation
                      efficiently
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1ab189] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-white text-xs"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
                      Financial Transparency
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Complete financial management with secure data protection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                App Stats
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-[#1ab189] text-2xl font-bold mb-1">
                    2025
                  </div>
                  <div className="text-gray-600 text-xs font-medium">
                    Founded
                  </div>
                </div>
                <div>
                  <div className="text-[#1ab189] text-2xl font-bold mb-1">
                    20+
                  </div>
                  <div className="text-gray-600 text-xs font-medium">
                    Team Members
                  </div>
                </div>
                <div>
                  <div className="text-[#1ab189] text-2xl font-bold mb-1">
                    100K+
                  </div>
                  <div className="text-gray-600 text-xs font-medium">
                    Downloads
                  </div>
                </div>
                <div>
                  <div className="text-[#1ab189] text-2xl font-bold mb-1">
                    50+
                  </div>
                  <div className="text-gray-600 text-xs font-medium">
                    Contractors Onboarded
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-9 h-9 rounded-full bg-[#1ab189]/10 border-2 border-white flex items-center justify-center shadow-sm">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="text-[#1ab189] text-xs"
                      />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#1ab189]/10 border-2 border-white flex items-center justify-center shadow-sm">
                      <FontAwesomeIcon
                        icon={faHandshake}
                        className="text-[#1ab189] text-xs"
                      />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#1ab189]/10 border-2 border-white flex items-center justify-center shadow-sm">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#1ab189] text-xs"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Trusted by thousands
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works - For Customers */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1.5 bg-[#00b8d4]/10 rounded-full mb-4">
                <span className="text-[#007a8f] text-xs font-semibold">
                  For Customers
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1ab189] mb-4">
                Find the Right Professional for Your Project
              </h3>

              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Whether you need a plumber, electrician, contractor, or any home
                service professional, Kaarya makes it easy to find, compare, and
                hire the best in your area.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1ab189] to-[#2dc99e] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-white text-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1ab189] mb-1 text-base">
                      Search & Discover
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Browse through verified professionals in your area. Filter
                      by service type, ratings, and availability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1ab189] to-[#2dc99e] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-white text-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1ab189] mb-1 text-base">
                      Compare & Choose
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Read authentic reviews, check ratings, view past projects,
                      and compare different service providers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1ab189] to-[#2dc99e] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      className="text-white text-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1ab189] mb-1 text-base">
                      Connect & Hire
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Reach out directly, discuss your project details, and get
                      started with confidence and transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-xl overflow-hidden shadow-xl relative h-[400px] w-full">
                <Image
                  src="/image2.png"
                  alt="Customer searching for services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* How It Works - For Providers */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl relative h-[400px] w-full">
                <Image
                  src="/image3.png"
                  alt="Service provider managing sites"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <div className="inline-block px-3 py-1.5 bg-[#00b8d4]/10 rounded-full mb-4">
                <span className="text-[#00b8d4] text-xs font-semibold">
                  For Service Providers
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1ab189] mb-4">
                Grow Your Business with Powerful Tools
              </h3>

              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Join thousands of professionals who use Kaarya to find new
                clients, manage their projects, and build their reputation in
                the industry.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00b8d4] to-[#007a8f] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="text-white text-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1ab189] mb-1 text-base">
                      Get Discovered
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Create your professional profile and get found by
                      customers actively looking for your services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00b8d4] to-[#007a8f] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon
                      icon={faClipboardCheck}
                      className="text-white text-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1ab189] mb-1 text-base">
                      Manage Multiple Sites
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Create and track multiple project sites with our intuitive
                      dashboard and management tools.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00b8d4] to-[#007a8f] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon
                      icon={faTools}
                      className="text-white text-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1ab189] mb-1 text-base">
                      Work Efficiently
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Streamline workflow with project updates, client
                      communication, scheduling, and invoicing—all in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1ab189] mb-3">
              Service Categories We Cover
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Find professionals across all types of home improvement and
              construction services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg hover:border-[#1ab189] transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-white text-xl"
                  />
                </div>
                <div className="font-semibold text-[#1ab189] text-sm">
                  {service.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Kaarya */}
        <div className="bg-gradient-to-br from-white to-[#00b8d4]/5 rounded-2xl p-10 mb-20 border border-gray-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1ab189] mb-3">
              Why Choose Kaarya?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              We&apos;re more than just a platform we&apos;re your partner in
              connecting and growing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1ab189] to-[#2dc99e] rounded-xl shadow-md flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-white text-xl"
                />
              </div>
              <h3 className="text-lg font-bold text-[#1ab189] mb-2">
                Verified & Trusted
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                All service providers go through a thorough verification process
                to ensure quality, reliability, and professionalism for every
                project.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#00b8d4] to-[#007a8f] rounded-xl shadow-md flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  className="text-white text-xl"
                />
              </div>
              <h3 className="text-lg font-bold text-[#1ab189] mb-2">
                Easy Management
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Providers get access to powerful tools to create sites, track
                progress, manage clients, and handle multiple projects
                simultaneously.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-md flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="text-white text-xl"
                />
              </div>
              <h3 className="text-lg font-bold text-[#1ab189] mb-2">
                Seamless Connection
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Direct communication between customers and providers makes the
                entire hiring process quick, transparent, and hassle-free.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-[#1ab189] to-[#2dc99e] rounded-2xl p-10 text-center text-white shadow-xl mb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-base mb-6 text-white/95 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re looking for reliable services or wanting to
              grow your business, Kaarya is here to help you succeed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-[#1ab189] px-7 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-1">
                Find a Provider
              </button>
              <button className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-lg font-bold hover:bg-white/10 transition-all hover:-translate-y-1">
                Become a Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
