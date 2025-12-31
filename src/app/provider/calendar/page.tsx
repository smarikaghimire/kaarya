"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faFilter,
  faPlus,
  faUser,
  faTimes,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

interface Event {
  id: string;
  title: string;
  type: "deadline" | "meeting" | "reminder" | "task";
  user: string;
  time?: string;
}

interface EventsData {
  [key: string]: Event[];
}

export default function CalendarPage() {
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day; // Get Sunday of current week
    return new Date(today.setDate(diff));
  });
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set()
  );
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  // Availability state
  const [availabilityDate, setAvailabilityDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [availabilityNotes, setAvailabilityNotes] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringDays, setRecurringDays] = useState<Set<string>>(new Set());

  // Mock events data
  const eventsData: EventsData = {
    "2025-1-5": [
      {
        id: "1",
        title: "Submit Final Proposal",
        type: "deadline",
        user: "Sarah Johnson",
        time: "5:00 PM",
      },
      {
        id: "2",
        title: "Plan Q1 Projects",
        type: "task",
        user: "Michael Rodriguez",
      },
    ],
    "2025-1-6": [
      {
        id: "3",
        title: "Team Sync Meeting",
        type: "meeting",
        user: "All Team",
        time: "10:00 AM",
      },
    ],
    "2025-1-7": [
      {
        id: "4",
        title: "Complete Design Review",
        type: "task",
        user: "David Martinez",
      },
      {
        id: "5",
        title: "Call Client about Invoice",
        type: "reminder",
        user: "Jennifer White",
        time: "2:00 PM",
      },
    ],
    "2025-1-8": [
      {
        id: "6",
        title: "Client Presentation",
        type: "meeting",
        user: "Sarah Johnson",
        time: "3:00 PM",
      },
    ],
    "2025-1-9": [
      {
        id: "7",
        title: "Review Project Updates",
        type: "task",
        user: "Michael Rodriguez",
      },
    ],
    "2025-1-10": [
      {
        id: "8",
        title: "Project Milestone Deadline",
        type: "deadline",
        user: "All Team",
        time: "11:59 PM",
      },
    ],
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const eventTypes = [
    { type: "deadline", label: "Deadline", color: "bg-red-500" },
    { type: "meeting", label: "Meeting", color: "bg-blue-500" },
    { type: "reminder", label: "Reminder", color: "bg-yellow-500" },
    { type: "task", label: "Task", color: "bg-green-500" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilterDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleFilter = (filter: string) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filter)) {
      newFilters.delete(filter);
    } else {
      newFilters.add(filter);
    }
    setSelectedFilters(newFilters);
  };

  const removeFilter = (filter: string) => {
    const newFilters = new Set(selectedFilters);
    newFilters.delete(filter);
    setSelectedFilters(newFilters);
  };

  const formatDateKey = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const getWeekDates = () => {
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(currentWeekStart);
      day.setDate(currentWeekStart.getDate() + i);
      return day;
    });
  };

  const goToPreviousWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeekStart(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeekStart(newDate);
  };

  const handleAddAvailability = () => {
    if (!availabilityDate || !startTime || !endTime) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Adding availability:", {
      date: availabilityDate,
      startTime,
      endTime,
      notes: availabilityNotes,
      isRecurring,
      recurringDays: Array.from(recurringDays),
    });
    alert("Availability added successfully!");
    setShowAvailabilityModal(false);
    // Reset form
    setAvailabilityDate(new Date().toISOString().split("T")[0]);
    setStartTime("09:00");
    setEndTime("17:00");
    setAvailabilityNotes("");
    setIsRecurring(false);
    setRecurringDays(new Set());
  };

  const toggleRecurringDay = (day: string) => {
    const newDays = new Set(recurringDays);
    if (newDays.has(day)) {
      newDays.delete(day);
    } else {
      newDays.add(day);
    }
    setRecurringDays(newDays);
  };

  const weekEndDate = new Date(currentWeekStart);
  weekEndDate.setDate(weekEndDate.getDate() + 6);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "deadline":
        return "bg-red-50 border-red-200 text-red-700";
      case "meeting":
        return "bg-blue-50 border-blue-200 text-blue-700";
      case "reminder":
        return "bg-yellow-50 border-yellow-200 text-yellow-700";
      case "task":
        return "bg-green-50 border-green-200 text-green-700";
      default:
        return "bg-neutral-50 border-neutral-200 text-neutral-700";
    }
  };

  const getEventDotColor = (type: string) => {
    switch (type) {
      case "deadline":
        return "bg-red-500";
      case "meeting":
        return "bg-blue-500";
      case "reminder":
        return "bg-yellow-500";
      case "task":
        return "bg-green-500";
      default:
        return "bg-neutral-500";
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-neutral-0 border-b border-neutral-200 px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="heading-2 text-neutral-900 mb-1">Calendar View</h1>
            <p className="text-neutral-600 body-regular">
              Track your tasks and schedule
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAvailabilityModal(true)}
              className="btn-secondary flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faCalendar} />
              Set Availability
            </button>
            <button
              onClick={() => {
                setSelectedDate(new Date());
                setShowAddEventModal(true);
              }}
              className="btn-primary flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPlus} />
              Add Event
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto">
        {/* Controls Bar */}
        <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Week Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToPreviousWeek}
                className="p-2.5 hover:bg-neutral-50 rounded-lg transition-colors border border-neutral-200"
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-neutral-600"
                />
              </button>
              <div className="text-center min-w-[200px]">
                <p className="font-semibold text-neutral-900">
                  {monthNames[currentWeekStart.getMonth()]}{" "}
                  {currentWeekStart.getDate()} - {weekEndDate.getDate()},{" "}
                  {currentWeekStart.getFullYear()}
                </p>
              </div>
              <button
                onClick={goToNextWeek}
                className="p-2.5 hover:bg-neutral-50 rounded-lg transition-colors border border-neutral-200"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-neutral-600"
                />
              </button>
            </div>

            {/* Legend and Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Legend */}
              <div className="flex items-center gap-4">
                {eventTypes.map((eventType) => (
                  <div key={eventType.type} className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${eventType.color}`}
                    ></div>
                    <span className="text-neutral-700 text-sm">
                      {eventType.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Filter Button */}
              <div className="relative" ref={filterRef}>
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-0 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faFilter}
                    className="text-neutral-600"
                  />
                  <span className="text-neutral-700 font-medium">Filter</span>
                  {selectedFilters.size > 0 && (
                    <span className="px-2 py-0.5 bg-primary-600 text-neutral-0 rounded-full text-xs font-semibold">
                      {selectedFilters.size}
                    </span>
                  )}
                </button>

                {/* Filter Dropdown */}
                {showFilterDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-neutral-0 rounded-lg shadow-lg border border-neutral-200 py-2 z-10">
                    {eventTypes.map((eventType) => (
                      <button
                        key={eventType.type}
                        onClick={() => toggleFilter(eventType.type)}
                        className={`w-full px-4 py-2 text-left hover:bg-neutral-50 transition-colors flex items-center justify-between ${
                          selectedFilters.has(eventType.type)
                            ? "bg-primary-50"
                            : ""
                        }`}
                      >
                        <span className="text-neutral-700">
                          {eventType.label}
                        </span>
                        {selectedFilters.has(eventType.type) && (
                          <span className="text-primary-600 font-semibold">
                            ✓
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {selectedFilters.size > 0 && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-100">
              <span className="text-neutral-600 text-sm font-medium">
                Active Filters:
              </span>
              {Array.from(selectedFilters).map((filter) => {
                const eventType = eventTypes.find((et) => et.type === filter);
                return (
                  <span
                    key={filter}
                    className={`px-3 py-1 rounded-lg text-sm font-medium border flex items-center gap-2 ${getEventTypeColor(
                      filter
                    )}`}
                  >
                    {eventType?.label}
                    <button
                      onClick={() => removeFilter(filter)}
                      className="hover:scale-110 transition-transform"
                    >
                      <FontAwesomeIcon icon={faTimes} className="text-xs" />
                    </button>
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {/* Calendar Grid */}
        <div className="bg-neutral-0 rounded-xl border border-neutral-200 overflow-hidden">
          {/* Day Headers */}
          <div className="grid grid-cols-7 border-b border-neutral-200 bg-neutral-50">
            {getWeekDates().map((date, i) => {
              const isToday = date.toDateString() === new Date().toDateString();
              return (
                <div
                  key={i}
                  className="p-4 text-center border-r border-neutral-200 last:border-r-0"
                >
                  <div className="text-neutral-600 text-sm font-medium mb-1">
                    {weekDays[date.getDay()]}
                  </div>
                  <div
                    className={`text-lg font-semibold ${
                      isToday
                        ? "w-8 h-8 bg-primary-600 text-neutral-0 rounded-full flex items-center justify-center mx-auto"
                        : "text-neutral-900"
                    }`}
                  >
                    {date.getDate()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Event Cells */}
          <div className="grid grid-cols-7">
            {getWeekDates().map((date, i) => {
              const key = formatDateKey(date);
              const dayEvents = eventsData[key] || [];
              const filteredEvents =
                selectedFilters.size === 0
                  ? dayEvents
                  : dayEvents.filter((event) =>
                      selectedFilters.has(event.type)
                    );

              return (
                <div
                  key={i}
                  className="min-h-[200px] p-3 border-r border-b border-neutral-200 last:border-r-0 hover:bg-neutral-50 transition-colors"
                >
                  <div className="space-y-2">
                    {filteredEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`p-3 rounded-lg border cursor-pointer hover:shadow-md transition-all ${getEventTypeColor(
                          event.type
                        )}`}
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <div
                            className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${getEventDotColor(
                              event.type
                            )}`}
                          ></div>
                          <p className="font-semibold text-sm leading-tight flex-1">
                            {event.title}
                          </p>
                        </div>
                        {event.time && (
                          <div className="flex items-center gap-1 text-xs mb-1">
                            <FontAwesomeIcon
                              icon={faClock}
                              className="text-xs"
                            />
                            <span>{event.time}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-xs">
                          <FontAwesomeIcon icon={faUser} className="text-xs" />
                          <span>{event.user}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddEventModal && (
        <div className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-0 rounded-xl shadow-2xl max-w-lg w-full">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-primary-50 to-secondary-50">
              <h3 className="heading-4 text-neutral-900">Add New Event</h3>
              <button
                onClick={() => setShowAddEventModal(false)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-neutral-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Event Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter event title..."
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Event Type <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular cursor-pointer">
                    <option>Deadline</option>
                    <option>Meeting</option>
                    <option>Reminder</option>
                    <option>Task</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2 body-small">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2 body-small">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Assigned To
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name..."
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowAddEventModal(false)}
                className="px-5 py-2.5 border-2 border-neutral-200 rounded-lg text-neutral-700 font-semibold hover:bg-neutral-100 transition-colors"
              >
                Cancel
              </button>
              <button className="btn-primary flex items-center gap-2">
                <FontAwesomeIcon icon={faPlus} />
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Set Availability Modal */}
      {showAvailabilityModal && (
        <div className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-0 rounded-xl shadow-2xl max-w-lg w-full">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-primary-50 to-secondary-50">
              <div>
                <h3 className="heading-4 text-neutral-900">
                  Set Your Availability
                </h3>
                <p className="text-neutral-600 text-sm">
                  Define when you're available to work
                </p>
              </div>
              <button
                onClick={() => setShowAvailabilityModal(false)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-neutral-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-5">
                {/* Date Selection */}
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={availabilityDate}
                    onChange={(e) => setAvailabilityDate(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>

                {/* Time Range */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2 body-small">
                      Start Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2 body-small">
                      End Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                </div>

                {/* Recurring Option */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isRecurring}
                      onChange={(e) => setIsRecurring(e.target.checked)}
                      className="w-5 h-5 text-primary-600 border-neutral-300 rounded focus:ring-2 focus:ring-primary-500/20 cursor-pointer"
                    />
                    <span className="text-neutral-700 font-semibold body-small">
                      Set as recurring availability
                    </span>
                  </label>
                </div>

                {/* Recurring Days Selection */}
                {isRecurring && (
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <label className="block text-neutral-700 font-semibold mb-3 body-small">
                      Select Days
                    </label>
                    <div className="grid grid-cols-7 gap-2">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => toggleRecurringDay(day)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              recurringDays.has(day)
                                ? "bg-primary-600 text-neutral-0"
                                : "bg-neutral-0 text-neutral-700 border border-neutral-200 hover:border-primary-500"
                            }`}
                          >
                            {day}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Notes */}
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={availabilityNotes}
                    onChange={(e) => setAvailabilityNotes(e.target.value)}
                    placeholder="Add any additional notes about your availability..."
                    rows={3}
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular resize-none"
                  />
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-700 text-sm">
                    <strong>Tip:</strong> Setting your availability helps
                    clients know when they can book appointments or meetings
                    with you.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowAvailabilityModal(false)}
                className="px-5 py-2.5 border-2 border-neutral-200 rounded-lg text-neutral-700 font-semibold hover:bg-neutral-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAvailability}
                className="btn-primary flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faCalendar} />
                Set Availability
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
