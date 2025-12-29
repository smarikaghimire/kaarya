"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faUser,
  faEnvelope,
  faPhone,
  faBriefcase,
  faIdCard,
  faCalendar,
  faPlus,
  faCheckCircle,
  faMapMarkerAlt,
  faFileAlt,
  faDollarSign,
  faTimes,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTeamMemberPage() {
  const router = useRouter();

  // Sample existing team member data - replace with actual data fetching
  const existingMember = {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    phone: "+1 (555) 123-4567",
    role: "Project Manager",
    department: "Operations",
    status: "Active" as const,
    employeeId: "EMP-001",
    joinDate: "2022-01-15",
    address: "456 Park Avenue",
    city: "Brooklyn",
    state: "NY",
    zipCode: "11201",
    emergencyContact: "John Johnson",
    emergencyPhone: "+1 (555) 987-6543",
    salary: "$75,000",
    skills: ["Project Management", "Supervision", "Electrical", "Plumbing"],
    notes:
      "Excellent project manager with strong leadership skills. Has successfully completed multiple large-scale renovation projects.",
  };

  const [memberName, setMemberName] = useState(existingMember.name);
  const [email, setEmail] = useState(existingMember.email);
  const [phone, setPhone] = useState(existingMember.phone);
  const [role, setRole] = useState(existingMember.role);
  const [department, setDepartment] = useState(existingMember.department);
  const [status, setStatus] = useState<"Active" | "Inactive" | "On Leave">(
    existingMember.status
  );
  const [employeeId, setEmployeeId] = useState(existingMember.employeeId);
  const [joinDate, setJoinDate] = useState(existingMember.joinDate);
  const [address, setAddress] = useState(existingMember.address);
  const [city, setCity] = useState(existingMember.city);
  const [state, setState] = useState(existingMember.state);
  const [zipCode, setZipCode] = useState(existingMember.zipCode);
  const [emergencyContact, setEmergencyContact] = useState(
    existingMember.emergencyContact
  );
  const [emergencyPhone, setEmergencyPhone] = useState(
    existingMember.emergencyPhone
  );
  const [salary, setSalary] = useState(existingMember.salary);
  const [skills, setSkills] = useState<string[]>(existingMember.skills);
  const [skillInput, setSkillInput] = useState("");
  const [notes, setNotes] = useState(existingMember.notes);

  const predefinedSkills = [
    "Electrical",
    "Plumbing",
    "HVAC",
    "Carpentry",
    "Project Management",
    "Supervision",
    "Design",
    "Landscaping",
  ];

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const getSkillColor = (skill: string) => {
    const colors: { [key: string]: string } = {
      Electrical: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Plumbing: "bg-blue-100 text-blue-700 border-blue-200",
      HVAC: "bg-orange-100 text-orange-700 border-orange-200",
      Carpentry: "bg-amber-100 text-amber-700 border-amber-200",
      "Project Management": "bg-primary-50 text-primary-700 border-primary-200",
      Supervision: "bg-purple-100 text-purple-700 border-purple-200",
      Design: "bg-pink-100 text-pink-700 border-pink-200",
      Landscaping: "bg-green-100 text-green-700 border-green-200",
    };
    return (
      colors[skill] || "bg-neutral-100 text-neutral-600 border-neutral-200"
    );
  };

  const getStatusBadgeColor = (status: string) => {
    const colors = {
      Active: "bg-green-100 text-green-700 border-green-200",
      Inactive: "bg-neutral-100 text-neutral-600 border-neutral-200",
      "On Leave": "bg-yellow-100 text-yellow-700 border-yellow-200",
    };
    return colors[status as keyof typeof colors];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const memberData = {
      id: existingMember.id,
      memberName,
      email,
      phone,
      role,
      department,
      status,
      employeeId,
      joinDate,
      address,
      city,
      state,
      zipCode,
      emergencyContact,
      emergencyPhone,
      salary,
      skills,
      notes,
    };
    console.log("Updated Team Member Data:", memberData);
    alert("Team member updated successfully!");
    router.push(`/provider/team/${existingMember.id}`);
  };

  const handleCancel = () => {
    if (
      confirm(
        "Are you sure you want to cancel? All unsaved changes will be lost."
      )
    ) {
      router.back();
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-neutral-0 border-b border-neutral-200 px-8 py-6">
        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-lg hover:bg-neutral-50 transition-colors"
            aria-label="Go back"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-neutral-600 text-lg"
            />
          </button>
          <div>
            <h1 className="heading-2 text-neutral-900">Edit Team Member</h1>
            <p className="text-neutral-600 body-regular mt-1">
              Update team member information
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Card */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faUser} className="text-primary-600" />
                Personal Information
              </h2>

              <div className="space-y-5">
                {/* Member Name */}
                <div>
                  <label
                    htmlFor="memberName"
                    className="block text-neutral-700 font-semibold mb-2 body-small"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="memberName"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                    placeholder="e.g., John Smith"
                    required
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-primary-600 mr-2"
                      />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.smith@company.com"
                      required
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-primary-600 mr-2"
                      />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="emergencyContact"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      id="emergencyContact"
                      value={emergencyContact}
                      onChange={(e) => setEmergencyContact(e.target.value)}
                      placeholder="e.g., Jane Smith"
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="emergencyPhone"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      id="emergencyPhone"
                      value={emergencyPhone}
                      onChange={(e) => setEmergencyPhone(e.target.value)}
                      placeholder="+1 (555) 987-6543"
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Employment Details Card */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-primary-600"
                />
                Employment Details
              </h2>

              <div className="space-y-5">
                {/* Role & Department */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular cursor-pointer"
                    >
                      <option value="">Select a role</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Supervisor">Supervisor</option>
                      <option value="Electrician">Electrician</option>
                      <option value="Plumber">Plumber</option>
                      <option value="HVAC Specialist">HVAC Specialist</option>
                      <option value="Carpenter">Carpenter</option>
                      <option value="Landscaper">Landscaper</option>
                      <option value="Interior Designer">
                        Interior Designer
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="department"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="department"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular cursor-pointer"
                    >
                      <option value="">Select a department</option>
                      <option value="Operations">Operations</option>
                      <option value="Technical">Technical</option>
                      <option value="Design">Design</option>
                      <option value="Outdoor Services">Outdoor Services</option>
                    </select>
                  </div>
                </div>

                {/* Employee ID & Status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="employeeId"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      <FontAwesomeIcon
                        icon={faIdCard}
                        className="text-primary-600 mr-2"
                      />
                      Employee ID
                    </label>
                    <input
                      type="text"
                      id="employeeId"
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      placeholder="e.g., EMP-001"
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="status"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="status"
                      value={status}
                      onChange={(e) =>
                        setStatus(
                          e.target.value as "Active" | "Inactive" | "On Leave"
                        )
                      }
                      required
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular cursor-pointer"
                    >
                      <option value="Active">Active</option>
                      <option value="On Leave">On Leave</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                {/* Join Date & Salary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="joinDate"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-primary-600 mr-2"
                      />
                      Join Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="joinDate"
                      value={joinDate}
                      onChange={(e) => setJoinDate(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="salary"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        className="text-primary-600 mr-2"
                      />
                      Salary
                    </label>
                    <input
                      type="text"
                      id="salary"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      placeholder="e.g., $65,000"
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-neutral-700 font-semibold mb-3 body-small">
                    Skills & Certifications
                  </label>

                  {/* Predefined Skills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {predefinedSkills.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => addSkill(skill)}
                        disabled={skills.includes(skill)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                          skills.includes(skill)
                            ? "bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed"
                            : "bg-neutral-0 text-neutral-700 border-neutral-200 hover:border-primary-500 hover:text-primary-600"
                        }`}
                      >
                        {skills.includes(skill) ? "✓ " : "+ "}
                        {skill}
                      </button>
                    ))}
                  </div>

                  {/* Custom Skill Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addSkill(skillInput);
                        }
                      }}
                      placeholder="Add custom skill..."
                      className="flex-1 px-4 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small"
                    />
                    <button
                      type="button"
                      onClick={() => addSkill(skillInput)}
                      className="px-4 py-2 bg-primary-600 text-neutral-0 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>

                  {/* Selected Skills */}
                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium border flex items-center gap-2 ${getSkillColor(
                            skill
                          )}`}
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="hover:scale-110 transition-transform"
                          >
                            <FontAwesomeIcon
                              icon={faTimes}
                              className="text-xs"
                            />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Address Information Card */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-primary-600"
                />
                Address Information
              </h2>

              <div className="space-y-5">
                {/* Street Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-neutral-700 font-semibold mb-2 body-small"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main Street"
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>

                {/* City, State, Zip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="New York"
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="NY"
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-neutral-700 font-semibold mb-2 body-small"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="10001"
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes Card */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="text-primary-600"
                />
                Additional Notes
              </h2>

              <div>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add any additional notes about this team member..."
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular resize-none"
                />
              </div>
            </div>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6 sticky top-8">
              <h3 className="heading-4 text-neutral-900 mb-6">
                Member Preview
              </h3>

              {/* Avatar Preview */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-primary-600 text-neutral-0 flex items-center justify-center text-3xl font-bold">
                  {memberName ? getInitials(memberName) : "?"}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="text-center pb-4 border-b border-neutral-100">
                  <p className="text-neutral-600 body-small mb-1">Name</p>
                  <p className="text-neutral-900 font-semibold">
                    {memberName || "Not specified"}
                  </p>
                </div>

                <div className="text-center pb-4 border-b border-neutral-100">
                  <p className="text-neutral-600 body-small mb-1">Role</p>
                  <p className="text-neutral-900 font-semibold">
                    {role || "Not specified"}
                  </p>
                </div>

                <div className="text-center pb-4 border-b border-neutral-100">
                  <p className="text-neutral-600 body-small mb-1">Department</p>
                  <p className="text-neutral-900 font-semibold">
                    {department || "Not specified"}
                  </p>
                </div>

                <div className="text-center pb-4 border-b border-neutral-100">
                  <p className="text-neutral-600 body-small mb-1">Email</p>
                  <p className="text-neutral-900 font-semibold truncate">
                    {email || "Not specified"}
                  </p>
                </div>

                <div className="text-center pb-4 border-b border-neutral-100">
                  <p className="text-neutral-600 body-small mb-1">Phone</p>
                  <p className="text-neutral-900 font-semibold">
                    {phone || "Not specified"}
                  </p>
                </div>

                <div className="text-center pb-4 border-b border-neutral-100">
                  <p className="text-neutral-600 body-small mb-2">Status</p>
                  <span
                    className={`inline-flex px-3 py-1.5 rounded-lg text-sm font-semibold border ${getStatusBadgeColor(
                      status
                    )}`}
                  >
                    {status}
                  </span>
                </div>

                {skills.length > 0 && (
                  <div className="text-center">
                    <p className="text-neutral-600 body-small mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded text-xs font-medium border ${getSkillColor(
                            skill
                          )}`}
                        >
                          {skill}
                        </span>
                      ))}
                      {skills.length > 3 && (
                        <span className="text-neutral-500 text-xs">
                          +{skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faSave} />
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-full btn-secondary"
                >
                  Cancel
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-700 body-small">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  <strong>Note:</strong> Changes will be saved when you click
                  "Save Changes"
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
