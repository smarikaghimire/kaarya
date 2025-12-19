"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outer Wrapper */}
        <div className="bg-gradient-to-b from-[#d4f4e7] from-0% via-[#d4f4e7] via-[420px] to-white to-[420px] rounded-none shadow-none overflow-visible px-6 py-12 sm:px-12 sm:py-16 relative min-h-[900px]">
          {/* Header */}
          <div className="text-center mb-12 max-w-[900px] mx-auto pt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[#1ab189]">
              Get In Touch
            </h1>
            <p className="text-base text-gray-600 max-w-[650px] mx-auto mt-6 leading-relaxed">
              Have a question, feedback? We&apos;d love to hear from you. Reach
              out to us and our team will get back to you as soon as possible.
            </p>
          </div>

          {/* Inner Contact Card */}
          <div className="bg-white rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden mb-16 relative -top-10 max-w-[1100px] mx-auto p-6 sm:p-10">
            {/* Split Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] min-h-[580px] gap-0">
              {/* Left Panel - Contact Info (Green) */}
              <div className="bg-gradient-to-br from-[#0d9563] to-[#059953] p-8 sm:p-10 text-white relative overflow-hidden flex flex-col rounded-2xl">
                <h2 className="text-2xl sm:text-[1.625rem] font-bold mb-3 text-white">
                  Contact Information
                </h2>
                <p className="text-sm sm:text-[0.9375rem] leading-relaxed opacity-95 mb-12 pb-8 border-b border-white/15">
                  We&apos;re here to help you get the most out of Kaarya. Reach
                  out to us!
                </p>

                <div className="flex flex-col gap-9">
                  <div className="flex items-start gap-4">
                    <div className="w-[38px] h-[38px] bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-[0.9375rem] font-semibold mb-1 text-white">
                        Bisai Technologies, LLC
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-[38px] h-[38px] bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-[0.9375rem] font-semibold mb-1 text-white">
                        +977 9815126740
                      </h4>
                      <p className="text-[0.8125rem] opacity-85">WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-[38px] h-[38px] bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-[0.9375rem] font-semibold text-white">
                        contact@kaarya.app
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -bottom-[100px] -right-[100px] w-[250px] h-[250px] bg-white/8 rounded-full"></div>
              </div>

              {/* Right Panel - Form (White) */}
              <div className="p-8 sm:p-12 bg-white">
                <form onSubmit={handleSubmit}>
                  {/* Form Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div className="flex flex-col">
                      <label className="text-sm font-medium text-gray-800 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Trapealy"
                        className="px-4 py-3 border border-gray-200 rounded-lg text-[0.9375rem] text-gray-800 transition-all focus:outline-none focus:border-[#1ab189] focus:shadow-[0_0_0_3px_rgba(26,177,137,0.08)] bg-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-medium text-gray-800 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@gmail.com"
                        className="px-4 py-3 border border-gray-200 rounded-lg text-[0.9375rem] text-gray-800 transition-all focus:outline-none focus:border-[#1ab189] focus:shadow-[0_0_0_3px_rgba(26,177,137,0.08)] bg-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-sm font-medium text-gray-800 mb-2">
                      Your Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter your subject"
                      className="px-4 py-3 border border-gray-200 rounded-lg text-[0.9375rem] text-gray-800 transition-all focus:outline-none focus:border-[#1ab189] focus:shadow-[0_0_0_3px_rgba(26,177,137,0.08)] bg-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-sm font-medium text-gray-800 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      className="px-4 py-3 border border-gray-200 rounded-lg text-[0.9375rem] text-gray-800 transition-all focus:outline-none focus:border-[#1ab189] focus:shadow-[0_0_0_3px_rgba(26,177,137,0.08)] bg-white placeholder:text-gray-400 resize-y min-h-[140px]"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#0d9563] text-white px-8 py-3.5 rounded-lg text-[0.9375rem] font-semibold cursor-pointer transition-all mt-2 hover:bg-[#059953] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(13,149,99,0.25)]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Section: More Ways to Connect */}
          <div className="pt-0 pb-8 bg-transparent -mt-12 max-w-[1100px] mx-auto">
            <h2 className="text-2xl sm:text-[1.625rem] font-bold text-gray-800 mb-10 text-left">
              More Ways to Connect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* Email Support */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7 flex gap-4 transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-[#1ab189]">
                <div className="w-[50px] h-[50px] bg-[#d4f4e7] rounded-full flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-xl text-[#0d9563]"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.0625rem] font-semibold text-gray-800 mb-1.5">
                    Email Support
                  </h3>
                  <p className="text-[0.8125rem] text-gray-500 mb-3.5 leading-snug">
                    Get help from our support team
                  </p>
                  <div className="text-[0.9375rem] font-semibold text-[#0d9563] mb-1">
                    contact@kaarya.app
                  </div>
                  <div className="text-[0.8125rem] text-gray-400">
                    24/7 response within 4 hours
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7 flex gap-4 transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-[#1ab189]">
                <div className="w-[50px] h-[50px] bg-[#d4f4e7] rounded-full flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-xl text-[#0d9563]"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.0625rem] font-semibold text-gray-800 mb-1.5">
                    WhatsApp
                  </h3>
                  <p className="text-[0.8125rem] text-gray-500 mb-3.5 leading-snug">
                    Live Chat with our team
                  </p>
                  <div className="text-[0.9375rem] font-semibold text-[#0d9563] mb-1">
                    Available WhatsApp support
                  </div>
                  <div className="text-[0.8125rem] text-gray-400">
                    Mon-Fri, 9AM-6PM PST
                  </div>
                </div>
              </div>

              {/* Phone Support */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7 flex gap-4 transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-[#1ab189]">
                <div className="w-[50px] h-[50px] bg-[#d4f4e7] rounded-full flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="text-xl text-[#0d9563]"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.0625rem] font-semibold text-gray-800 mb-1.5">
                    Phone Support
                  </h3>
                  <p className="text-[0.8125rem] text-gray-500 mb-3.5 leading-snug">
                    Call us for urgent issues
                  </p>
                  <div className="text-[0.9375rem] font-semibold text-[#0d9563] mb-1">
                    (636) 209-4879
                  </div>
                  <div className="text-[0.8125rem] text-gray-400">
                    Mon-Fri, 9AM-6PM PST
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
