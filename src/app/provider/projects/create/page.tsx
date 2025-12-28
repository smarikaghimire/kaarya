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
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Milestone {
  id: string;
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
  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: "1",
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
    },
  ]);

  const addMilestone = () => {
    const newMilestone: Milestone = {
      id: Date.now().toString(),
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
    };
    setMilestones([...milestones, newMilestone]);
  };

  const removeMilestone = (id: string) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter((m) => m.id !== id));
    }
  };

  const updateMilestone = (
    id: string,
    field: keyof Milestone,
    value: string
  ) => {
    setMilestones(
      milestones.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
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
                  onClick={addMilestone}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-neutral-0 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Add Milestone
                </button>
              </div>

              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.id}
                    className="border border-neutral-200 rounded-lg p-5 hover:border-primary-500 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-neutral-700 body-regular">
                        Milestone {index + 1}
                      </h3>
                      {milestones.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeMilestone(milestone.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label="Remove milestone"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-neutral-600 font-medium mb-2 body-small">
                          Milestone Title{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={milestone.title}
                          onChange={(e) =>
                            updateMilestone(
                              milestone.id,
                              "title",
                              e.target.value
                            )
                          }
                          placeholder="e.g., Foundation Complete"
                          required
                          className="w-full px-4 py-2.5 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small"
                        />
                      </div>

                      <div>
                        <label className="block text-neutral-600 font-medium mb-2 body-small">
                          Description
                        </label>
                        <textarea
                          value={milestone.description}
                          onChange={(e) =>
                            updateMilestone(
                              milestone.id,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Describe this milestone..."
                          rows={2}
                          className="w-full px-4 py-2.5 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-neutral-600 font-medium mb-2 body-small">
                            Due Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            value={milestone.dueDate}
                            onChange={(e) =>
                              updateMilestone(
                                milestone.id,
                                "dueDate",
                                e.target.value
                              )
                            }
                            min={startDate}
                            max={endDate}
                            required
                            className="w-full px-4 py-2.5 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small"
                          />
                        </div>

                        <div>
                          <label className="block text-neutral-600 font-medium mb-2 body-small">
                            Status
                          </label>
                          <select
                            value={milestone.status}
                            onChange={(e) =>
                              updateMilestone(
                                milestone.id,
                                "status",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2.5 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
                          >
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {milestones.length === 0 && (
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
    </div>
  );
}
