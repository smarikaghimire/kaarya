"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faTrash,
  faCalendar,
  faMapMarkerAlt,
  faUser,
  faFileAlt,
  faBriefcase,
  faCheckCircle,
  faPenToSquare,
  faEye,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "in-progress" | "completed";
}

interface MilestoneFormData {
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "in-progress" | "completed";
}

export default function CreateProjectPage() {
  const [projectName, setProjectName] = useState("");
  const [location, setLocation] = useState("");
  const [clientName, setClientName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [showMilestoneModal, setShowMilestoneModal] = useState(false);
  const [editingMilestone, setEditingMilestone] = useState<Milestone | null>(
    null
  );
  const [milestoneForm, setMilestoneForm] = useState<MilestoneFormData>({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });
  const [viewingMilestone, setViewingMilestone] = useState<Milestone | null>(
    null
  );

  const openMilestoneModal = (milestone?: Milestone) => {
    if (milestone) {
      setEditingMilestone(milestone);
      setMilestoneForm({
        title: milestone.title,
        description: milestone.description,
        dueDate: milestone.dueDate,
        status: milestone.status,
      });
    } else {
      setEditingMilestone(null);
      setMilestoneForm({
        title: "",
        description: "",
        dueDate: "",
        status: "pending",
      });
    }
    setShowMilestoneModal(true);
  };

  const closeMilestoneModal = () => {
    setShowMilestoneModal(false);
    setEditingMilestone(null);
    setMilestoneForm({
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
    });
  };

  const saveMilestone = () => {
    if (!milestoneForm.title || !milestoneForm.dueDate) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingMilestone) {
      // Update existing milestone
      setMilestones(
        milestones.map((m) =>
          m.id === editingMilestone.id ? { ...m, ...milestoneForm } : m
        )
      );
    } else {
      // Add new milestone
      const newMilestone: Milestone = {
        id: Date.now().toString(),
        ...milestoneForm,
      };
      setMilestones([...milestones, newMilestone]);
    }
    closeMilestoneModal();
  };

  const deleteMilestone = (id: string) => {
    if (confirm("Are you sure you want to delete this milestone?")) {
      setMilestones(milestones.filter((m) => m.id !== id));
    }
  };

  const viewMilestone = (milestone: Milestone) => {
    setViewingMilestone(milestone);
  };

  const closeViewModal = () => {
    setViewingMilestone(null);
  };

  const getStatusBadgeColor = (status: Milestone["status"]) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
      "in-progress": "bg-blue-100 text-blue-700 border-blue-200",
      completed: "bg-green-100 text-green-700 border-green-200",
    };
    return colors[status];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectData = {
      projectName,
      location,
      clientName,
      startDate,
      endDate,
      category,
      description,
      milestones,
    };
    console.log("Project Data:", projectData);
    alert("Project created successfully!");
  };

  const handleCancel = () => {
    if (
      confirm(
        "Are you sure you want to cancel? All unsaved changes will be lost."
      )
    ) {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-neutral-0 border-b border-neutral-200 px-8 py-6">
        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={() => window.history.back()}
            className="p-2 rounded-lg hover:bg-neutral-50 transition-colors"
            aria-label="Go back"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-neutral-600 text-lg"
            />
          </button>
          <div>
            <h1 className="heading-2 text-neutral-900">Create New Project</h1>
            <p className="text-neutral-600 body-regular mt-1">
              Fill in the details to create your project
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Information Card */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-primary-600"
                />
                Project Information
              </h2>

              <div className="space-y-5">
                {/* Project Name */}
                <div>
                  <label
                    htmlFor="projectName"
                    className="block text-neutral-700 font-semibold mb-2 body-small"
                  >
                    Project Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g., Kitchen Renovation"
                    required
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>

                {/* Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-neutral-700 font-semibold mb-2 body-small"
                  >
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular cursor-pointer"
                  >
                    <option value="">Select a category</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="HVAC">HVAC</option>
                    <option value="Landscaping">Landscaping</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-neutral-700 font-semibold mb-2 body-small"
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-primary-600 mr-2"
                    />
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g., 123 Main Street, New York, NY"
                    required
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>

                {/* Client Name */}
                <div>
                  <label
                    htmlFor="clientName"
                    className="block text-neutral-700 font-semibold mb-2 body-small"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-primary-600 mr-2"
                    />
                    Client Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g., John Smith"
                    required
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>
                {/* Project Budget */}
                <div>
                  <label
                    htmlFor="projectBudget"
                    className="block text-neutral-700 font-semibold mb-2 body-small"
                  >
                    <FontAwesomeIcon
                      icon={faMoneyBill}
                      className="text-primary-600 mr-2"
                    />
                    Project Estimated Budget{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g., John Smith"
                    required
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>

                {/* Date Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="startDate"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-primary-600 mr-2"
                      />
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="endDate"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-primary-600 mr-2"
                      />
                      End Date (Estimated){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate}
                      required
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-neutral-700 font-semibold mb-2 body-small"
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="text-primary-600 mr-2"
                    />
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide a detailed description of the project..."
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Milestones Card */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-4 text-neutral-900 flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary-600"
                  />
                  Project Milestones
                </h2>
                <button
                  type="button"
                  onClick={() => openMilestoneModal()}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-neutral-0 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Add Milestone
                </button>
              </div>

              {milestones.length > 0 ? (
                <div className="space-y-3">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.id}
                      className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:border-primary-500 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600 font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-neutral-900 truncate">
                            {milestone.title}
                          </h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-neutral-500 text-sm flex items-center gap-1">
                              <FontAwesomeIcon
                                icon={faCalendar}
                                className="text-xs"
                              />
                              {new Date(milestone.dueDate).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded text-xs font-semibold border ${getStatusBadgeColor(
                                milestone.status
                              )}`}
                            >
                              {milestone.status === "in-progress"
                                ? "In Progress"
                                : milestone.status.charAt(0).toUpperCase() +
                                  milestone.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => viewMilestone(milestone)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          aria-label="View milestone"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          type="button"
                          onClick={() => openMilestoneModal(milestone)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          aria-label="Edit milestone"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteMilestone(milestone.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label="Delete milestone"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-neutral-500">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-5xl mb-4 opacity-30"
                  />
                  <p className="body-regular">No milestones added yet</p>
                  <p className="body-small mt-2">
                    Click "Add Milestone" to create your first milestone
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6 sticky top-8">
              <h3 className="heading-4 text-neutral-900 mb-4">
                Project Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-primary-600 mt-1"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-neutral-600 body-small mb-1">
                      Project Name
                    </p>
                    <p className="text-neutral-900 font-semibold truncate">
                      {projectName || "Not specified"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-primary-600 mt-1"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-neutral-600 body-small mb-1">Client</p>
                    <p className="text-neutral-900 font-semibold truncate">
                      {clientName || "Not specified"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-primary-600 mt-1"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-neutral-600 body-small mb-1">Location</p>
                    <p className="text-neutral-900 font-semibold truncate">
                      {location || "Not specified"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-primary-600 mt-1"
                  />
                  <div className="flex-1">
                    <p className="text-neutral-600 body-small mb-1">Duration</p>
                    <p className="text-neutral-900 font-semibold">
                      {startDate && endDate
                        ? `${new Date(startDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })} - ${new Date(endDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric", year: "numeric" }
                          )}`
                        : "Not specified"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary-600 mt-1"
                  />
                  <div className="flex-1">
                    <p className="text-neutral-600 body-small mb-1">
                      Milestones
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {milestones.length}{" "}
                      {milestones.length === 1 ? "milestone" : "milestones"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Create Project
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-full btn-secondary"
                >
                  Cancel
                </button>
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-primary-700 body-small">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  <strong>Tip:</strong> Add detailed milestones to track your
                  project progress effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Add/Edit Milestone Modal */}
      {showMilestoneModal && (
        <div className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-0 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-neutral-0 border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
              <h3 className="heading-4 text-neutral-900">
                {editingMilestone ? "Edit Milestone" : "Add New Milestone"}
              </h3>
              <button
                onClick={closeMilestoneModal}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-neutral-700 font-semibold mb-2 body-small">
                  Milestone Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={milestoneForm.title}
                  onChange={(e) =>
                    setMilestoneForm({
                      ...milestoneForm,
                      title: e.target.value,
                    })
                  }
                  placeholder="e.g., Foundation Complete"
                  className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-2 body-small">
                  Description
                </label>
                <textarea
                  value={milestoneForm.description}
                  onChange={(e) =>
                    setMilestoneForm({
                      ...milestoneForm,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe this milestone..."
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Due Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={milestoneForm.dueDate}
                    onChange={(e) =>
                      setMilestoneForm({
                        ...milestoneForm,
                        dueDate: e.target.value,
                      })
                    }
                    min={startDate}
                    max={endDate}
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Status
                  </label>
                  <select
                    value={milestoneForm.status}
                    onChange={(e) =>
                      setMilestoneForm({
                        ...milestoneForm,
                        status: e.target.value as Milestone["status"],
                      })
                    }
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular cursor-pointer"
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-neutral-50 border-t border-neutral-200 px-6 py-4 flex items-center justify-end gap-3">
              <button
                onClick={closeMilestoneModal}
                className="px-5 py-2.5 border border-neutral-200 rounded-lg text-neutral-700 font-medium hover:bg-neutral-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveMilestone}
                className="btn-primary flex items-center gap-2"
              >
                {editingMilestone ? "Update Milestone" : "Add Milestone"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Milestone Modal */}
      {viewingMilestone && (
        <div className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-0 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-neutral-0 border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
              <h3 className="heading-4 text-neutral-900">Milestone Details</h3>
              <button
                onClick={closeViewModal}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-neutral-600 font-medium mb-2 body-small">
                  Title
                </label>
                <p className="text-neutral-900 font-semibold text-lg">
                  {viewingMilestone.title}
                </p>
              </div>

              {viewingMilestone.description && (
                <div>
                  <label className="block text-neutral-600 font-medium mb-2 body-small">
                    Description
                  </label>
                  <p className="text-neutral-700 body-regular leading-relaxed">
                    {viewingMilestone.description}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-600 font-medium mb-2 body-small">
                    Due Date
                  </label>
                  <div className="flex items-center gap-2 text-neutral-900 font-medium">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-primary-600"
                    />
                    {new Date(viewingMilestone.dueDate).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-600 font-medium mb-2 body-small">
                    Status
                  </label>
                  <span
                    className={`inline-flex px-3 py-1.5 rounded-lg text-sm font-semibold border ${getStatusBadgeColor(
                      viewingMilestone.status
                    )}`}
                  >
                    {viewingMilestone.status === "in-progress"
                      ? "In Progress"
                      : viewingMilestone.status.charAt(0).toUpperCase() +
                        viewingMilestone.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-neutral-50 border-t border-neutral-200 px-6 py-4 flex items-center justify-end gap-3">
              <button
                onClick={closeViewModal}
                className="px-5 py-2.5 border border-neutral-200 rounded-lg text-neutral-700 font-medium hover:bg-neutral-100 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  closeViewModal();
                  openMilestoneModal(viewingMilestone);
                }}
                className="btn-primary flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
                Edit Milestone
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
