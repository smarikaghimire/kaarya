"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ProviderTopbar() {
  const [notificationCount] = useState(3);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
    // e.g., clear tokens, redirect to login page
    alert("Logged out successfully!");
    setShowLogoutModal(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-neutral-0 border-b border-neutral-200 px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="heading-2 text-neutral-900">
            Good afternoon, Michael
          </h1>
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
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-neutral-0 font-semibold cursor-pointer hover:bg-primary-700 transition-colors"
            >
              MR
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-neutral-0 rounded-xl shadow-2xl max-w-md w-full mx-4">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faSignOut}
                    className="text-red-600 text-xl"
                  />
                </div>
                <div>
                  <h3 className="heading-4 text-neutral-900">Logout</h3>
                  <p className="text-neutral-600 text-sm">
                    Are you sure you want to logout?
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-neutral-700 body-regular">
                You will be logged out of your account and redirected to the
                login page.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-5 py-2.5 border-2 border-neutral-200 rounded-lg text-neutral-700 font-semibold hover:bg-neutral-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 bg-red-600 text-neutral-0 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faSignOut} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
