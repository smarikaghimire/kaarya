"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faEllipsisVertical,
  faChevronDown,
  faEnvelope,
  faPhone,
  faCircle,
  faChevronLeft,
  faChevronRight,
  faUserGroup,
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

interface TeamMember {
  id: string;
  name: string;
  initials: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  status: "Active" | "Inactive" | "On Leave";
  projects: number;
  joinDate: string;
  avatar?: string;
  color: string;
}

type TabFilter = "all" | "active" | "inactive" | "onleave";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<TabFilter>("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [sortBy, setSortBy] = useState("Name");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      initials: "SJ",
      email: "sarah.j@company.com",
      phone: "+1 (555) 123-4567",
      role: "Project Manager",
      department: "Operations",
      status: "Active",
      projects: 8,
      joinDate: "Jan 15, 2022",
      color: "bg-primary-600",
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      initials: "MR",
      email: "michael.r@company.com",
      phone: "+1 (555) 234-5678",
      role: "Electrician",
      department: "Technical",
      status: "Active",
      projects: 12,
      joinDate: "Mar 8, 2021",
      color: "bg-secondary-600",
    },
    {
      id: "3",
      name: "Jennifer Davis",
      initials: "JD",
      email: "jennifer.d@company.com",
      phone: "+1 (555) 345-6789",
      role: "Plumber",
      department: "Technical",
      status: "Active",
      projects: 9,
      joinDate: "Jul 22, 2022",
      color: "bg-yellow-600",
    },
    {
      id: "4",
      name: "David Martinez",
      initials: "DM",
      email: "david.m@company.com",
      phone: "+1 (555) 456-7890",
      role: "HVAC Specialist",
      department: "Technical",
      status: "On Leave",
      projects: 6,
      joinDate: "Sep 10, 2023",
      color: "bg-purple-600",
    },
    {
      id: "5",
      name: "Jennifer White",
      initials: "JW",
      email: "jennifer.w@company.com",
      phone: "+1 (555) 567-8901",
      role: "Supervisor",
      department: "Operations",
      status: "Active",
      projects: 15,
      joinDate: "Feb 5, 2020",
      color: "bg-blue-600",
    },
    {
      id: "6",
      name: "Thomas Kim",
      initials: "TK",
      email: "thomas.k@company.com",
      phone: "+1 (555) 678-9012",
      role: "Carpenter",
      department: "Technical",
      status: "Active",
      projects: 7,
      joinDate: "May 18, 2022",
      color: "bg-green-600",
    },
    {
      id: "7",
      name: "Robert Anderson",
      initials: "RA",
      email: "robert.a@company.com",
      phone: "+1 (555) 789-0123",
      role: "Landscaper",
      department: "Outdoor Services",
      status: "Active",
      projects: 5,
      joinDate: "Nov 3, 2023",
      color: "bg-teal-600",
    },
    {
      id: "8",
      name: "Emily Parker",
      initials: "EP",
      email: "emily.p@company.com",
      phone: "+1 (555) 890-1234",
      role: "Interior Designer",
      department: "Design",
      status: "Inactive",
      projects: 0,
      joinDate: "Aug 12, 2021",
      color: "bg-pink-600",
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
    memberId: string,
    memberName: string
  ) => {
    setOpenDropdown(null);
    if (action === "view") alert(`Viewing team member: ${memberName}`);
    else if (action === "update") alert(`Updating team member: ${memberName}`);
    else if (
      action === "delete" &&
      confirm(`Are you sure you want to delete "${memberName}"?`)
    ) {
      alert(`Deleted team member: ${memberName}`);
    }
  };

  const getStatusBadgeColor = (status: TeamMember["status"]) => {
    const colors = {
      Active: "bg-green-100 text-green-700 border-green-200",
      Inactive: "bg-neutral-100 text-neutral-600 border-neutral-200",
      "On Leave": "bg-yellow-100 text-yellow-700 border-yellow-200",
    };
    return (
      colors[status] || "bg-neutral-100 text-neutral-600 border-neutral-200"
    );
  };

  const filteredMembers = teamMembers.filter((member) => {
    if (activeTab === "active" && member.status !== "Active") return false;
    if (activeTab === "inactive" && member.status !== "Inactive") return false;
    if (activeTab === "onleave" && member.status !== "On Leave") return false;
    if (
      searchQuery &&
      !member.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const totalPages = Math.ceil(filteredMembers.length / 6);
  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  const activeCount = teamMembers.filter((m) => m.status === "Active").length;
  const inactiveCount = teamMembers.filter(
    (m) => m.status === "Inactive"
  ).length;
  const onLeaveCount = teamMembers.filter(
    (m) => m.status === "On Leave"
  ).length;

  return (
    <div className="flex-1 bg-neutral-50">
      <div className="bg-neutral-0 border-b border-neutral-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="heading-2 text-neutral-900">Team Members</h2>
            <p className="text-neutral-600 body-regular mt-1">
              Manage your team and their assignments
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2 shadow-lg">
            <FontAwesomeIcon icon={faPlus} />
            Add Team Member
          </button>
        </div>
      </div>

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
            All Members
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
            <span className="px-2 py-0.5 bg-green-600 text-neutral-0 rounded-full text-xs font-semibold">
              {activeCount}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("onleave")}
            className={`py-4 border-b-2 font-medium transition-colors flex items-center gap-2 ${
              activeTab === "onleave"
                ? "border-primary-600 text-primary-600"
                : "border-transparent text-neutral-600 hover:text-neutral-900"
            }`}
          >
            On Leave
            <span className="px-2 py-0.5 bg-yellow-600 text-neutral-0 rounded-full text-xs font-semibold">
              {onLeaveCount}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("inactive")}
            className={`py-4 border-b-2 font-medium transition-colors ${
              activeTab === "inactive"
                ? "border-primary-600 text-primary-600"
                : "border-transparent text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Inactive
          </button>
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
                placeholder="Search team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-neutral-0 border border-neutral-200 rounded-lg w-64 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small"
              />
            </div>

            <div className="relative">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
              >
                <option>All Roles</option>
                <option>Project Manager</option>
                <option>Supervisor</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>HVAC Specialist</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
              />
            </div>

            <div className="relative">
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
              >
                <option>All Departments</option>
                <option>Operations</option>
                <option>Technical</option>
                <option>Design</option>
                <option>Outdoor Services</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
              >
                <option>Sort by: Name</option>
                <option>Sort by: Role</option>
                <option>Sort by: Projects</option>
                <option>Sort by: Join Date</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
              />
            </div>

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

      <div className="p-8">
        <div className="bg-neutral-0 rounded-xl border border-neutral-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-semibold text-sm">
            <div className="col-span-3">TEAM MEMBER</div>
            <div className="col-span-2">ROLE</div>
            <div className="col-span-3">CONTACT</div>
            <div className="col-span-1">STATUS</div>
            <div className="col-span-1">PROJECTS</div>
            <div className="col-span-1">JOIN DATE</div>
            <div className="col-span-1 text-center">ACTIONS</div>
          </div>

          <div className="divide-y divide-neutral-100">
            {paginatedMembers.map((member) => (
              <div
                key={member.id}
                className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-neutral-50 transition-colors group"
              >
                <div className="col-span-3 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${member.color} text-neutral-0 flex items-center justify-center font-semibold text-base flex-shrink-0`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-neutral-500 text-sm">
                      {member.department}
                    </p>
                  </div>
                </div>

                <div className="col-span-2 flex items-center">
                  <span className="text-neutral-700">{member.role}</span>
                </div>

                <div className="col-span-3 flex flex-col justify-center gap-1">
                  <div className="flex items-center gap-2 text-neutral-600 text-sm">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-neutral-400 text-xs"
                    />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600 text-sm">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-neutral-400 text-xs"
                    />
                    <span>{member.phone}</span>
                  </div>
                </div>

                <div className="col-span-1 flex items-center">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getStatusBadgeColor(
                      member.status
                    )}`}
                  >
                    {member.status}
                  </span>
                </div>

                <div className="col-span-1 flex items-center">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className="text-neutral-400 text-sm"
                    />
                    <span className="font-semibold text-neutral-900">
                      {member.projects}
                    </span>
                  </div>
                </div>

                <div className="col-span-1 flex items-center text-neutral-700">
                  <span>{member.joinDate}</span>
                </div>

                <div className="col-span-1 flex items-center justify-center">
                  <div
                    className="relative"
                    ref={openDropdown === member.id ? dropdownRef : null}
                  >
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === member.id ? null : member.id
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

                    {openDropdown === member.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-neutral-0 rounded-lg shadow-lg border border-neutral-200 py-1 z-10">
                        <button
                          onClick={() =>
                            handleAction("view", member.id, member.name)
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
                            handleAction("update", member.id, member.name)
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
                            handleAction("delete", member.id, member.name)
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
              Showing {(currentPage - 1) * 6 + 1}-
              {Math.min(currentPage * 6, filteredMembers.length)} of{" "}
              {filteredMembers.length} team members
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
      </div>
    </div>
  );
}
