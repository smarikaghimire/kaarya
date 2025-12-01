"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserCheck,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-neutral-0">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-neutral-800 mb-4">How Kaarya Works</h2>
          <p className="body-large text-neutral-600">
            Get started in three simple steps — no signup required
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 flex flex-col items-center text-center">
            {/* Number Badge */}
            <div className="text-5xl font-bold text-primary-500 mb-6">01</div>

            {/* Icon */}
            <div className="mb-6 text-primary">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="heading-4 text-primary mb-3">Browse & Contact</h3>
              <p className="body-regular text-neutral-600 mb-4">
                Find providers, view profiles, and send inquiries — no account
                needed. Simply share your project details.
              </p>
              {/* Highlight Box */}
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md text-sm font-medium">
                No signup required! Browse freely and contact providers
                directly.
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 flex flex-col items-center text-center">
            {/* Number Badge */}
            <div className="text-5xl font-bold text-primary-500 mb-6">02</div>

            {/* Icon */}
            <div className="mb-6 text-primary">
              <FontAwesomeIcon icon={faUserCheck} size="3x" />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="heading-4 text-neutral-800 mb-3">
                Provider Responds
              </h3>
              <p className="body-regular text-primary mb-4">
                The provider reviews your inquiry and creates a project for you.
                You’ll receive login credentials automatically.
              </p>
              {/* Highlight Box */}
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md text-sm font-medium">
                Get credentials via SMS/Email when provider accepts your
                project.
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 flex flex-col items-center text-center">
            {/* Number Badge */}
            <div className="text-5xl font-bold text-primary-500 mb-6">03</div>

            {/* Icon */}
            <div className="mb-6 text-primary">
              <FontAwesomeIcon icon={faHandshake} size="3x" />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="heading-4 text-primary mb-3">Track & Complete</h3>
              <p className="body-regular text-primary mb-4">
                Login to track progress, communicate, and make secure payments.
                Rate your experience when done.
              </p>
              {/* Highlight Box */}
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md text-sm font-medium">
                Full project access once provider creates your account.
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">Get Started Now →</button>
        </div>
      </div>
    </section>
  );
}
