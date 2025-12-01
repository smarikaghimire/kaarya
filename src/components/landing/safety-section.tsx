'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function SafetySection() {
  const features = [
    'Background-checked providers with verified credentials',
    'Verified licenses and insurance documentation',
    'Secure payment processing with buyer protection',
    '24/7 customer support for your peace of mind',
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="bg-neutral-0 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="heading-3 text-neutral-800">with Satisfied</h3>
                <h3 className="heading-3 text-neutral-800">Satisfied Client</h3>
              </div>
              <div className="relative w-full h-[300px]">
                <Image
                  src="/handshake.png"
                  alt="Professional handshake"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="heading-2 mb-8 text-neutral-800">Your Safety is Our Priority</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-5 h-5 text-neutral-0" />
                  </div>
                  <p className="body-large flex-1 text-neutral-700">{feature}</p>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-8">Learn About Our Verification Process</button>
          </div>
        </div>
      </div>
    </section>
  );
}