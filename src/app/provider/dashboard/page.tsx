"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faPlus,
  faArrowUp,
  faArrowRight,
  faMessage,
  faStar,
  faCalendar,
  faCheckCircle,
  faFolder,
  faListCheck,
  faLightbulb,
  faCircle,
  faCalendarDays,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function ProviderDashboard() {
  const [showOptimizationTip, setShowOptimizationTip] = useState(true);

  const recentActivities = [
    {
      icon: faMessage,
      iconColor: "text-primary-600",
      iconBg: "bg-primary-50",
      title: "New message from Sarah Johnson",
      subtitle: "About Kitchen Renovation project",
      time: "2 hours ago",
    },
    {
      icon: faStar,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
      title: "New 5-star review from Michael Brown",
      subtitle: '"Excellent work on the bathroom remodel!"',
      time: "5 hours ago",
    },
    {
      icon: faCalendar,
      iconColor: "text-primary-600",
      iconBg: "bg-primary-50",
      title: "Upcoming: Panel Upgrade project starts tomorrow",
      subtitle: "Client: David Martinez",
      time: "Tomorrow, 9:00 AM",
    },
    {
      icon: faCheckCircle,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      title: "Project completed: Bathroom Remodel",
      subtitle: "Client: Michael Brown",
      time: "2 days ago",
    },
  ];

  const activeProjects = [
    {
      name: "Kitchen Renovation",
      client: "Sarah Johnson",
      clientInitials: "SJ",
      progress: 65,
      status: "On Track",
      statusColor: "bg-green-600",
      dueDate: "Feb 28",
      nextTask: "Electrical work",
    },
    {
      name: "Bathroom Upgrade",
      client: "David Martinez",
      clientInitials: "DM",
      progress: 30,
      status: "Needs Attention",
      statusColor: "bg-yellow-600",
      dueDate: "Mar 15",
      nextTask: "Plumbing installation",
    },
    {
      name: "Electrical Panel Upgrade",
      client: "Jennifer White",
      clientInitials: "JW",
      progress: 90,
      status: "On Track",
      statusColor: "bg-green-600",
      dueDate: "Feb 10",
      nextTask: "Final inspection",
    },
  ];

  const todaysSchedule = [
    {
      time: "9:00 AM",
      title: "Site visit: Kitchen Renovation",
      location: "123 Oak Street",
      type: "Start",
    },
    {
      time: "2:00 PM",
      title: "Client meeting: New bathroom project",
      location: "Video call",
      type: "Join",
    },
    {
      time: "4:30 PM",
      title: "Material pickup",
      location: "Home Depot",
      type: null,
    },
  ];

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-neutral-600 body-small mb-2">Dashboard</p>
        <div className="flex items-center justify-between mb-6">
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
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-neutral-0 font-semibold cursor-pointer">
              MR
            </div>
          </div>
        </div>

        {/* Success Banner */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎉</div>
              <div>
                <h3 className="heading-4 text-neutral-900 mb-1">
                  Congratulations! Your profile is now verified and live.
                </h3>
                <p className="text-neutral-600 body-regular">
                  Start connecting with clients and grow your business on Karya
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2 bg-neutral-0 text-neutral-900 rounded-lg font-medium hover:bg-neutral-50 transition-colors">
                Get Started
              </button>
              <button className="w-8 h-8 hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-neutral-600">×</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Left Column - 2/3 width */}
        <div className="xl:col-span-2 space-y-6">
          {/* Welcome Card */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-neutral-0">
            <p className="body-regular mb-2">Welcome back!</p>
            <h2 className="heading-2 mb-4">Your dashboard is looking great</h2>
            <p className="body-regular mb-6 opacity-90">
              You have 3 active projects and 8 new leads waiting for your
              response.
              <br />
              Keep up the excellent work!
            </p>
            <button className="px-6 py-3 bg-neutral-0 text-primary-600 rounded-lg font-semibold hover:bg-neutral-50 transition-colors">
              Quick Start Guide
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Profile Views */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <div className="flex items-center gap-2 text-neutral-600 body-small mb-3">
                <FontAwesomeIcon icon={faCircle} className="text-xs" />
                Profile Views
              </div>
              <p className="heading-2 text-neutral-900 mb-2">127</p>
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
                <span>+15%</span>
              </div>
              <Link
                href={"/"}
                className="text-primary-600 text-sm font-medium mt-4 hover:text-primary-700 flex items-center gap-1 cursor-pointer"
              >
                View Analytics{" "}
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </div>

            {/* New Leads */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faFolder}
                  className="text-primary-600 text-xl"
                />
              </div>
              <p className="heading-2 text-neutral-900 mb-1">8</p>
              <p className="text-neutral-600 body-regular mb-2">New Leads</p>
              <p className="text-neutral-500 text-sm">3 responded to</p>
              <Link
                href={"/"}
                className="text-primary-600 text-sm font-medium mt-4 hover:text-primary-700 flex items-center gap-1 cursor-pointer"
              >
                View All{" "}
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </div>

            {/* Active Projects */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faListCheck}
                  className="text-primary-600 text-xl"
                />
              </div>
              <p className="heading-2 text-neutral-900 mb-1">3</p>
              <p className="text-neutral-600 body-regular mb-2">
                Active Projects
              </p>
              <p className="text-neutral-500 text-sm">
                2 on track, 1 needs attention
              </p>
              <button className="text-primary-600 text-sm font-medium mt-4 hover:text-primary-700 flex items-center gap-1 cursor-pointer">
                Go to Projects{" "}
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </div>

            {/* This Month's Earnings */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <p className="text-neutral-600 body-small mb-3">
                This Month&apos;s Earnings
              </p>
              <p className="heading-2 text-primary-600 mb-2">$8,450</p>
              <div className="flex items-center gap-2 text-green-600 text-sm mb-4">
                <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
                <span>+12% vs last month</span>
              </div>
              {/* Mini Chart */}
              <div className="flex items-end gap-1 h-8">
                {[40, 50, 45, 60, 75].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary-600 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <Link
                href={"/"}
                className="text-primary-600 text-sm font-medium mt-4 hover:text-primary-700 flex items-center gap-1 cursor-pointer"
              >
                View Details{" "}
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="heading-3 text-neutral-900">Recent Activity</h3>
              <Link
                href={"/"}
                className="text-primary-600 font-medium hover:text-primary-700 cursor-pointer"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b border-neutral-100 last:border-0"
                >
                  <div
                    className={`w-10 h-10 rounded-full ${activity.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <FontAwesomeIcon
                      icon={activity.icon}
                      className={activity.iconColor}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-neutral-900 font-medium mb-1">
                      {activity.title}
                    </p>
                    <p className="text-neutral-600 body-small">
                      {activity.subtitle}
                    </p>
                  </div>
                  <span className="text-neutral-500 body-small flex-shrink-0">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="heading-3 text-neutral-900">Active Projects</h3>
              <Link
                href={"/provider/projects"}
                className="text-primary-600 font-medium hover:text-primary-700 cursor-pointer"
              >
                View All Projects
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeProjects.map((project, index) => (
                <div
                  key={index}
                  className="border border-neutral-200 rounded-lg p-6 hover:border-primary-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-neutral-0 flex items-center justify-center font-semibold">
                      {project.clientInitials}
                    </div>
                    <p className="text-neutral-600 body-small">
                      {project.client}
                    </p>
                  </div>
                  <h4 className="heading-4 text-neutral-900 mb-3">
                    {project.name}
                  </h4>
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-600 text-sm">
                        {project.progress}% Complete
                      </span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-600 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-3 py-1 ${project.statusColor} text-neutral-0 rounded-full text-xs font-medium`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600 body-small mb-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-xs" />
                    <span>Due {project.dueDate}</span>
                  </div>
                  <p className="text-neutral-600 body-small mb-4">
                    Next: {project.nextTask}
                  </p>
                  <Link
                    href={"/"}
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 flex items-center gap-2 cursor-pointer"
                  >
                    View Project{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
            <h3 className="heading-4 text-neutral-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full btn-primary flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faPlus} />
                Create New Project
              </button>
              <button className="w-full px-6 py-3 bg-neutral-0 text-primary-600 border-2 border-primary-600 rounded-lg font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faCalendarDays} />
                Update Availability
              </button>
              <button className="w-full px-6 py-3 bg-neutral-0 text-neutral-700 border border-neutral-200 rounded-lg font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faMessage} />
                Respond to Leads
                <span className="ml-auto w-6 h-6 bg-primary-600 text-neutral-0 rounded-full flex items-center justify-center text-xs font-semibold">
                  8
                </span>
              </button>
              <button className="w-full px-6 py-3 bg-neutral-0 text-neutral-700 border border-neutral-200 rounded-lg font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faFolder} />
                Post Portfolio Update
              </button>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="heading-4 text-neutral-900">
                Today&apos;s Schedule
              </h3>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-primary-600"
              />
            </div>
            <div className="space-y-4">
              {todaysSchedule.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="text-neutral-900 font-semibold text-sm">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-1 bg-neutral-50 rounded-lg p-4 border-l-4 border-primary-600">
                    <p className="text-neutral-900 font-semibold mb-1">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2 text-neutral-600 text-sm">
                      {item.location.includes("Video") ? (
                        <FontAwesomeIcon icon={faVideo} className="text-xs" />
                      ) : null}
                      <span>{item.location}</span>
                    </div>
                    {item.type && (
                      <button
                        className={`mt-3 px-4 py-2 rounded-lg text-sm font-medium ${
                          item.type === "Start"
                            ? "bg-primary-600 text-neutral-0 hover:bg-primary-700"
                            : "bg-primary-600 text-neutral-0 hover:bg-primary-700"
                        } transition-colors`}
                      >
                        {item.type}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={"/"}
              className="w-full mt-4 text-primary-600 font-medium text-sm hover:text-primary-700"
            >
              View Full Calendar
            </Link>
          </div>

          {/* Optimization Tip */}
          {showOptimizationTip && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-yellow-600 text-2xl"
                />
                <div className="flex-1">
                  <h4 className="heading-4 text-neutral-900 mb-2">
                    Optimization Tip
                  </h4>
                  <p className="text-neutral-700 body-small">
                    Your response rate is excellent! Consider adding weekend
                    availability to capture 15% more leads in your area.
                  </p>
                </div>
                <button
                  onClick={() => setShowOptimizationTip(false)}
                  className="text-neutral-600 hover:text-neutral-900 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faCircle} className="text-xs" />
                </button>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-primary-600 text-neutral-0 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors cursor-pointer">
                  Update Availability
                </button>
                <button
                  onClick={() => setShowOptimizationTip(false)}
                  className="px-4 py-2 bg-neutral-0 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
