"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faEllipsisVertical,
  faList,
  faTableCells,
  faChevronDown,
  faCalendar,
  faUsers,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Types
interface Project {
  id: string;
  name: string;
  category: string;
  client: {
    name: string;
    initials: string;
    avatar?: string;
  };
  progress: number;
  status: "On Track" | "Needs Attention" | "Completed" | "Archived";
  dueDate: string;
  team: Array<{
    initials: string;
    color: string;
  }>;
  image?: string;
}

type ViewMode = "list" | "grid";
type TabFilter = "all" | "active" | "completed" | "archived";

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [activeTab, setActiveTab] = useState<TabFilter>("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [clientFilter, setClientFilter] = useState("All Clients");
  const [dateRangeFilter, setDateRangeFilter] = useState("Date Range");
  const [sortBy, setSortBy] = useState("Due Date");
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data
  const projects: Project[] = [
    {
      id: "1",
      name: "Kitchen Renovation",
      category: "Renovation • Electrical",
      client: {
        name: "Sarah Johnson",
        initials: "SJ",
      },
      progress: 65,
      status: "On Track",
      dueDate: "Feb 28, 2024",
      team: [
        { initials: "SJ", color: "bg-primary-600" },
        { initials: "MR", color: "bg-secondary-600" },
        { initials: "JD", color: "bg-yellow-600" },
      ],
      image: "/project-kitchen.jpg",
    },
    {
      id: "2",
      name: "Bathroom Upgrade",
      category: "Plumbing • Renovation",
      client: {
        name: "David Martinez",
        initials: "DM",
      },
      progress: 30,
      status: "Needs Attention",
      dueDate: "Mar 15, 2024",
      team: [
        { initials: "DM", color: "bg-primary-600" },
        { initials: "MR", color: "bg-secondary-600" },
      ],
      image: "/project-bathroom.jpg",
    },
    {
      id: "3",
      name: "Electrical Panel Upgrade",
      category: "Electrical • Commercial",
      client: {
        name: "Jennifer White",
        initials: "JW",
      },
      progress: 90,
      status: "On Track",
      dueDate: "Feb 10, 2024",
      team: [
        { initials: "JW", color: "bg-primary-600" },
        { initials: "TK", color: "bg-secondary-600" },
      ],
      image: "/project-electrical.jpg",
    },
    {
      id: "4",
      name: "HVAC System Installation",
      category: "HVAC • Residential",
      client: {
        name: "Michael Brown",
        initials: "MB",
      },
      progress: 100,
      status: "Completed",
      dueDate: "Jan 20, 2024",
      team: [
        { initials: "MB", color: "bg-primary-600" },
        { initials: "SJ", color: "bg-secondary-600" },
        { initials: "MR", color: "bg-yellow-600" },
      ],
      image: "/project-hvac.jpg",
    },
    {
      id: "5",
      name: "Garden & Landscape Design",
      category: "Landscaping • Outdoor",
      client: {
        name: "Robert Anderson",
        initials: "RA",
      },
      progress: 45,
      status: "On Track",
      dueDate: "Mar 30, 2024",
      team: [
        { initials: "RA", color: "bg-primary-600" },
        { initials: "MR", color: "bg-secondary-600" },
      ],
      image: "/project-garden.jpg",
    },
  ];

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "On Track":
        return "bg-green-600";
      case "Needs Attention":
        return "bg-yellow-600";
      case "Completed":
        return "bg-primary-600";
      case "Archived":
        return "bg-neutral-400";
      default:
        return "bg-neutral-400";
    }
  };

  const getStatusBadgeColor = (status: Project["status"]) => {
    switch (status) {
      case "On Track":
        return "bg-green-100 text-green-700 border-green-200";
      case "Needs Attention":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Completed":
        return "bg-primary-50 text-primary-700 border-primary-200";
      case "Archived":
        return "bg-neutral-100 text-neutral-600 border-neutral-200";
      default:
        return "bg-neutral-100 text-neutral-600 border-neutral-200";
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (
      activeTab === "active" &&
      project.status !== "On Track" &&
      project.status !== "Needs Attention"
    ) {
      return false;
    }
    if (activeTab === "completed" && project.status !== "Completed") {
      return false;
    }
    if (activeTab === "archived" && project.status !== "Archived") {
      return false;
    }
    if (
      searchQuery &&
      !project.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filteredProjects.length / 5);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-neutral-0 border-b border-neutral-200 px-8 py-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="heading-2 text-neutral-900">Projects</h1>
            <p className="text-neutral-600 body-regular mt-1">
              Manage all your projects in one place
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2 shadow-lg">
            <FontAwesomeIcon icon={faPlus} />
            Create New Project
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-neutral-0 border-b border-neutral-200 px-8">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`py-4 border-b-2 font-medium transition-colors ${
              activeTab === "all"
                ? "border-primary-600 text-primary-600"
                : "border-transparent text-neutral-600 hover:text-neutral-900"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`py-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
              activeTab === "active"
                ? "border-primary-600 text-primary-600"
                : "border-transparent text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Active
            <span className="px-2 py-0.5 bg-primary-600 text-neutral-0 rounded-full text-xs font-semibold">
              3
            </span>
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`py-4 border-b-2 font-medium transition-colors ${
              activeTab === "completed"
                ? "border-primary-600 text-primary-600"
                : "border-transparent text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab("archived")}
            className={`py-4 border-b-2 font-medium transition-colors ${
              activeTab === "archived"
                ? "border-primary-600 text-primary-600"
                : "border-transparent text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Archived
          </button>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-neutral-0 px-8 py-4 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          {/* Left side - Search and Filters */}
          <div className="flex items-center gap-3 flex-1">
            {/* Search */}
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-neutral-0 border border-neutral-200 rounded-lg w-64 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
              >
                <option>All Statuses</option>
                <option>On Track</option>
                <option>Needs Attention</option>
                <option>Completed</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
              />
            </div>

            {/* Client Filter */}
            <div className="relative">
              <select
                value={clientFilter}
                onChange={(e) => setClientFilter(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
              >
                <option>All Clients</option>
                <option>Sarah Johnson</option>
                <option>David Martinez</option>
                <option>Jennifer White</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
              />
            </div>

            {/* Date Range Filter */}
            <div className="relative">
              <select
                value={dateRangeFilter}
                onChange={(e) => setDateRangeFilter(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
              >
                <option>Date Range</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Next Month</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
              />
            </div>
          </div>

          {/* Right side - View Controls */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-neutral-50 rounded-lg p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-neutral-0 text-primary-600 shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
                aria-label="List view"
              >
                <FontAwesomeIcon icon={faList} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-neutral-0 text-primary-600 shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
                aria-label="Grid view"
              >
                <FontAwesomeIcon icon={faTableCells} />
              </button>
            </div>

            {/* Sort By */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
              >
                <option>Sort by: Due Date</option>
                <option>Sort by: Name</option>
                <option>Sort by: Progress</option>
                <option>Sort by: Client</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
              />
            </div>

            {/* More Options */}
            <button
              className="p-2 bg-neutral-0 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
              aria-label="More options"
            >
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="text-neutral-600"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {viewMode === "list" ? (
          /* List View */
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-semibold text-sm">
              <div className="col-span-3">PROJECT NAME</div>
              <div className="col-span-2">CLIENT</div>
              <div className="col-span-2">PROGRESS</div>
              <div className="col-span-2">STATUS</div>
              <div className="col-span-2">DUE DATE</div>
              <div className="col-span-1">TEAM</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-neutral-100">
              {paginatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-neutral-50 transition-colors cursor-pointer group"
                >
                  {/* Project Name */}
                  <div className="col-span-3 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                      {project.image ? (
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700" />
                      ) : (
                        <span className="text-neutral-400 text-xl">📁</span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-neutral-500 text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Client */}
                  <div className="col-span-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-neutral-0 flex items-center justify-center text-sm font-semibold">
                      {project.client.initials}
                    </div>
                    <span className="text-neutral-700">
                      {project.client.name}
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="col-span-2 flex items-center">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-neutral-600">
                          {project.progress}% Complete
                        </span>
                      </div>
                      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getStatusColor(
                            project.status
                          )} rounded-full transition-all`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="col-span-2 flex items-center">
                    <span
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${getStatusBadgeColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Due Date */}
                  <div className="col-span-2 flex items-center gap-2 text-neutral-700">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-neutral-400 text-sm"
                    />
                    <span>{project.dueDate}</span>
                  </div>

                  {/* Team */}
                  <div className="col-span-1 flex items-center">
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member, idx) => (
                        <div
                          key={idx}
                          className={`w-8 h-8 rounded-full ${member.color} text-neutral-0 flex items-center justify-center text-xs font-semibold border-2 border-neutral-0`}
                        >
                          {member.initials}
                        </div>
                      ))}
                      {project.team.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center text-xs font-semibold border-2 border-neutral-0">
                          +{project.team.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-neutral-200 flex items-center justify-between">
              <p className="text-neutral-600 text-sm">
                Showing {(currentPage - 1) * 5 + 1}-
                {Math.min(currentPage * 5, filteredProjects.length)} of{" "}
                {filteredProjects.length} projects
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="text-neutral-600"
                  />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === i + 1
                        ? "bg-primary-600 text-neutral-0"
                        : "bg-neutral-0 text-neutral-700 border border-neutral-200 hover:bg-neutral-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-neutral-600"
                  />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-0 rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-primary-500 transition-all cursor-pointer group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors" />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border backdrop-blur-sm ${getStatusBadgeColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  {/* Client Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-neutral-0 flex items-center justify-center font-semibold">
                      {project.client.initials}
                    </div>
                    <span className="text-neutral-600 text-sm">
                      {project.client.name}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h4 className="heading-4 text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-neutral-500 text-sm mb-4">
                    {project.category}
                  </p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-600 text-sm">
                        {project.progress}% Complete
                      </span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getStatusColor(
                          project.status
                        )} rounded-full transition-all`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Due Date */}
                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-4">
                    <FontAwesomeIcon icon={faCalendar} className="text-xs" />
                    <span>Due {project.dueDate}</span>
                  </div>

                  {/* Team and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member, idx) => (
                        <div
                          key={idx}
                          className={`w-8 h-8 rounded-full ${member.color} text-neutral-0 flex items-center justify-center text-xs font-semibold border-2 border-neutral-0`}
                        >
                          {member.initials}
                        </div>
                      ))}
                      {project.team.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center text-xs font-semibold border-2 border-neutral-0">
                          +{project.team.length - 3}
                        </div>
                      )}
                    </div>
                    <button className="text-primary-600 font-medium text-sm hover:text-primary-700">
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
