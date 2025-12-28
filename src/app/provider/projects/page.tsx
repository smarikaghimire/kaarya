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
  faChevronLeft,
  faChevronRight,
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "1",
      name: "Kitchen Renovation",
      category: "Renovation • Electrical",
      client: { name: "Sarah Johnson", initials: "SJ" },
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
      client: { name: "David Martinez", initials: "DM" },
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
      client: { name: "Jennifer White", initials: "JW" },
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
      client: { name: "Michael Brown", initials: "MB" },
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
      client: { name: "Robert Anderson", initials: "RA" },
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAction = (
    action: string,
    projectId: string,
    projectName: string
  ) => {
    setOpenDropdown(null);
    if (action === "view") alert(`Viewing project: ${projectName}`);
    else if (action === "update") alert(`Updating project: ${projectName}`);
    else if (
      action === "delete" &&
      confirm(`Are you sure you want to delete "${projectName}"?`)
    ) {
      alert(`Deleted project: ${projectName}`);
    }
  };

  const getStatusColor = (status: Project["status"]) => {
    const colors = {
      "On Track": "bg-green-600",
      "Needs Attention": "bg-yellow-600",
      Completed: "bg-primary-600",
      Archived: "bg-neutral-400",
    };
    return colors[status] || "bg-neutral-400";
  };

  const getStatusBadgeColor = (status: Project["status"]) => {
    const colors = {
      "On Track": "bg-green-100 text-green-700 border-green-200",
      "Needs Attention": "bg-yellow-100 text-yellow-700 border-yellow-200",
      Completed: "bg-primary-50 text-primary-700 border-primary-200",
      Archived: "bg-neutral-100 text-neutral-600 border-neutral-200",
    };
    return (
      colors[status] || "bg-neutral-100 text-neutral-600 border-neutral-200"
    );
  };

  const filteredProjects = projects.filter((project) => {
    if (
      activeTab === "active" &&
      project.status !== "On Track" &&
      project.status !== "Needs Attention"
    )
      return false;
    if (activeTab === "completed" && project.status !== "Completed")
      return false;
    if (activeTab === "archived" && project.status !== "Archived") return false;
    if (
      searchQuery &&
      !project.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const totalPages = Math.ceil(filteredProjects.length / 5);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  return (
    <div className="min-h-screen bg-neutral-50">
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

      <div className="bg-neutral-0 border-b border-neutral-200 px-8">
        <div className="flex items-center gap-6">
          {(["all", "active", "completed", "archived"] as TabFilter[]).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
                  activeTab === tab
                    ? "border-primary-600 text-primary-600"
                    : "border-transparent text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() +
                  tab.slice(1).replace("active", "Active")}
                {tab === "active" && (
                  <span className="px-2 py-0.5 bg-primary-600 text-neutral-0 rounded-full text-xs font-semibold">
                    3
                  </span>
                )}
              </button>
            )
          )}
        </div>
      </div>

      <div className="bg-neutral-0 px-8 py-4 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
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
            {[
              {
                value: statusFilter,
                setValue: setStatusFilter,
                options: [
                  "All Statuses",
                  "On Track",
                  "Needs Attention",
                  "Completed",
                ],
              },
              {
                value: clientFilter,
                setValue: setClientFilter,
                options: [
                  "All Clients",
                  "Sarah Johnson",
                  "David Martinez",
                  "Jennifer White",
                ],
              },
              {
                value: dateRangeFilter,
                setValue: setDateRangeFilter,
                options: [
                  "Date Range",
                  "This Week",
                  "This Month",
                  "Next Month",
                ],
              },
            ].map((filter, idx) => (
              <div key={idx} className="relative">
                <select
                  value={filter.value}
                  onChange={(e) => filter.setValue(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
                >
                  {filter.options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-neutral-50 rounded-lg p-1">
              {(["list", "grid"] as ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`p-2 rounded transition-colors ${
                    viewMode === mode
                      ? "bg-neutral-0 text-primary-600 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={mode === "list" ? faList : faTableCells}
                  />
                </button>
              ))}
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
              >
                {["Due Date", "Name", "Progress", "Client"].map((opt) => (
                  <option key={opt}>Sort by: {opt}</option>
                ))}
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
              />
            </div>
            <button className="p-2 bg-neutral-0 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="text-neutral-600"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {viewMode === "list" ? (
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-semibold text-sm">
              <div className="col-span-3">PROJECT NAME</div>
              <div className="col-span-2">CLIENT</div>
              <div className="col-span-2">PROGRESS</div>
              <div className="col-span-2">STATUS</div>
              <div className="col-span-2">DUE DATE</div>
              <div className="col-span-1 text-center">ACTIONS</div>
            </div>
            <div className="divide-y divide-neutral-100">
              {paginatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-neutral-50 transition-colors group"
                >
                  <div className="col-span-3 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                      {project.image ? (
                        <div className="w-full h-full bg-primary" />
                      ) : (
                        <span className="text-neutral-400 text-xl">📁</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors truncate">
                        {project.name}
                      </h4>
                      <p className="text-neutral-500 text-sm truncate">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-neutral-0 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {project.client.initials}
                    </div>
                    <span className="text-neutral-700 truncate">
                      {project.client.name}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <div className="flex-1">
                      <span className="text-sm text-neutral-600 block mb-1">
                        {project.progress}% Complete
                      </span>
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
                  <div className="col-span-2 flex items-center">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-semibold border whitespace-nowrap ${getStatusBadgeColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center gap-2 text-neutral-700">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-neutral-400 text-sm flex-shrink-0"
                    />
                    <span className="whitespace-nowrap">{project.dueDate}</span>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <div
                      className="relative"
                      ref={openDropdown === project.id ? dropdownRef : null}
                    >
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === project.id ? null : project.id
                          )
                        }
                        className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                        aria-label="Actions"
                      >
                        <FontAwesomeIcon
                          icon={faEllipsisVertical}
                          className="text-neutral-600"
                        />
                      </button>
                      {openDropdown === project.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-neutral-0 rounded-lg shadow-lg border border-neutral-200 py-1 z-10">
                          <button
                            onClick={() =>
                              handleAction("view", project.id, project.name)
                            }
                            className="w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-3 transition-colors"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="text-blue-600 w-4"
                            />
                            View
                          </button>
                          <button
                            onClick={() =>
                              handleAction("update", project.id, project.name)
                            }
                            className="w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-3 transition-colors"
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="text-green-600 w-4"
                            />
                            Update
                          </button>
                          <button
                            onClick={() =>
                              handleAction("delete", project.id, project.name)
                            }
                            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
                          >
                            <FontAwesomeIcon icon={faTrash} className="w-4" />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-0 rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-primary-500 transition-all cursor-pointer group"
              >
                <div className="h-48 bg-primary relative overflow-hidden">
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
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-neutral-0 flex items-center justify-center font-semibold">
                      {project.client.initials}
                    </div>
                    <span className="text-neutral-600 text-sm">
                      {project.client.name}
                    </span>
                  </div>
                  <h4 className="heading-4 text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-neutral-500 text-sm mb-4">
                    {project.category}
                  </p>
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
                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-4">
                    <FontAwesomeIcon icon={faCalendar} className="text-xs" />
                    <span>Due {project.dueDate}</span>
                  </div>
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
                    <div
                      className="relative"
                      ref={
                        openDropdown === `grid-${project.id}`
                          ? dropdownRef
                          : null
                      }
                    >
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === `grid-${project.id}`
                              ? null
                              : `grid-${project.id}`
                          )
                        }
                        className="text-primary-600 font-medium text-sm hover:text-primary-700 flex items-center gap-1"
                      >
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                      {openDropdown === `grid-${project.id}` && (
                        <div className="absolute right-0 bottom-full mb-2 w-48 bg-neutral-0 rounded-lg shadow-lg border border-neutral-200 py-1 z-10">
                          <button
                            onClick={() =>
                              handleAction("view", project.id, project.name)
                            }
                            className="w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-3 transition-colors"
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className="text-primary-600 w-4"
                            />
                            View
                          </button>
                          <button
                            onClick={() =>
                              handleAction("update", project.id, project.name)
                            }
                            className="w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-3 transition-colors"
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="text-green-600 w-4"
                            />
                            Update
                          </button>
                          <button
                            onClick={() =>
                              handleAction("delete", project.id, project.name)
                            }
                            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
                          >
                            <FontAwesomeIcon icon={faTrash} className="w-4" />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
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
