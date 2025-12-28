"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ProviderTopbar() {
  const [notificationCount] = useState(3);

  return (
    <div className="sticky top-0 z-50 bg-neutral-0 border-b border-neutral-200 px-8 py-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="heading-2 text-neutral-900">Good afternoon, Michael</h1>
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              placeholder="Search projects, clients, or tasks..."
              className="pl-12 pr-4 py-2.5 bg-neutral-0 border border-neutral-200 rounded-lg w-80 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>
          {/* Notifications */}
          <button className="relative w-10 h-10 bg-neutral-0 border border-neutral-200 rounded-lg flex items-center justify-center hover:bg-neutral-50 transition-colors">
            <FontAwesomeIcon icon={faBell} className="text-neutral-600" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 text-neutral-0 rounded-full text-xs flex items-center justify-center font-semibold">
              3
            </span>
          </button>
          {/* Profile */}
          <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-neutral-0 font-semibold cursor-pointer">
            MR
          </div>
        </div>
      </div>
    </div>
  );
}
