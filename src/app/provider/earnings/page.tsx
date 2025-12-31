"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faWallet,
  faClock,
  faCheckCircle,
  faChartLine,
  faDownload,
  faEllipsisVertical,
  faArrowUp,
  faChevronDown,
  faPlus,
  faEye,
  faTimes,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Transaction {
  id: string;
  projectName: string;
  clientName: string;
  amount: number;
  status: "completed" | "pending" | "processing";
  date: string;
  paymentMethod: string;
  invoiceNumber: string;
}

interface MonthlyEarning {
  month: string;
  amount: number;
}

interface Project {
  id: string;
  name: string;
  client: string;
  totalBudget: number;
  earnedAmount: number;
  remainingAmount: number;
}

export default function EarningsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [showAddEarningModal, setShowAddEarningModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [earningAmount, setEarningAmount] = useState("");
  const [earningDate, setEarningDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [earningNotes, setEarningNotes] = useState("");
  const [openActionsMenu, setOpenActionsMenu] = useState<string | null>(null);

  // Mock data
  const totalEarnings = 124500;
  const pendingPayments = 18750;
  const completedThisMonth = 28900;
  const projectedEarnings = 32400;

  const transactions: Transaction[] = [
    {
      id: "1",
      projectName: "Kitchen Renovation",
      clientName: "Sarah Johnson",
      amount: 8500,
      status: "completed",
      date: "2024-03-15",
      paymentMethod: "Bank Transfer",
      invoiceNumber: "INV-001",
    },
    {
      id: "2",
      projectName: "Bathroom Remodel",
      clientName: "Michael Rodriguez",
      amount: 4200,
      status: "pending",
      date: "2024-03-14",
      paymentMethod: "Credit Card",
      invoiceNumber: "INV-002",
    },
    {
      id: "3",
      projectName: "Office Interior Design",
      clientName: "David Martinez",
      amount: 12000,
      status: "processing",
      date: "2024-03-13",
      paymentMethod: "Bank Transfer",
      invoiceNumber: "INV-003",
    },
    {
      id: "4",
      projectName: "Home Electrical Work",
      clientName: "Jennifer White",
      amount: 3400,
      status: "completed",
      date: "2024-03-12",
      paymentMethod: "Cash",
      invoiceNumber: "INV-004",
    },
    {
      id: "5",
      projectName: "Plumbing Installation",
      clientName: "Lisa Chen",
      amount: 2500,
      status: "pending",
      date: "2024-03-11",
      paymentMethod: "Credit Card",
      invoiceNumber: "INV-005",
    },
  ];

  const monthlyEarnings: MonthlyEarning[] = [
    { month: "Jan", amount: 18200 },
    { month: "Feb", amount: 22400 },
    { month: "Mar", amount: 28900 },
    { month: "Apr", amount: 24600 },
    { month: "May", amount: 30100 },
    { month: "Jun", amount: 26800 },
  ];

  const projects: Project[] = [
    {
      id: "1",
      name: "Kitchen Renovation",
      client: "Sarah Johnson",
      totalBudget: 15000,
      earnedAmount: 8500,
      remainingAmount: 6500,
    },
    {
      id: "2",
      name: "Bathroom Remodel",
      client: "Michael Rodriguez",
      totalBudget: 8000,
      earnedAmount: 4200,
      remainingAmount: 3800,
    },
    {
      id: "3",
      name: "Office Interior Design",
      client: "David Martinez",
      totalBudget: 25000,
      earnedAmount: 12000,
      remainingAmount: 13000,
    },
  ];

  const getStatusBadge = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "processing":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-neutral-100 text-neutral-600 border-neutral-200";
    }
  };

  const getStatusText = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "pending":
        return "Pending";
      case "processing":
        return "Processing";
      default:
        return status;
    }
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (
      searchQuery &&
      !transaction.projectName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
      !transaction.clientName.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    if (
      statusFilter !== "All Status" &&
      transaction.status !== statusFilter.toLowerCase()
    ) {
      return false;
    }
    return true;
  });

  const maxEarning = Math.max(...monthlyEarnings.map((e) => e.amount));

  const handleAddEarning = () => {
    if (!selectedProject || !earningAmount) {
      alert("Please select a project and enter an amount");
      return;
    }
    console.log("Adding earning:", {
      project: selectedProject,
      amount: earningAmount,
      date: earningDate,
      method: paymentMethod,
      notes: earningNotes,
    });
    alert("Earning added successfully!");
    setShowAddEarningModal(false);
    setSelectedProject("");
    setEarningAmount("");
    setEarningDate(new Date().toISOString().split("T")[0]);
    setPaymentMethod("Bank Transfer");
    setEarningNotes("");
  };

  const handleViewDetails = (transactionId: string) => {
    // Navigate to view page
    window.location.href = `/provider/earnings/view?id=${transactionId}`;
  };

  const handleDownloadInvoice = (transaction: Transaction) => {
    console.log("Downloading invoice for:", transaction.invoiceNumber);
    alert(`Downloading invoice ${transaction.invoiceNumber}`);
  };

  const handleExportReport = () => {
    console.log("Exporting report for period:", selectedPeriod);
    alert("Exporting earnings report...");
  };

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-neutral-0 border-b border-neutral-200 px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="heading-2 text-neutral-900 mb-1">Earnings</h1>
            <p className="text-neutral-600 body-regular">
              Track your income and payment history
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
              >
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
                <option>All Time</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
              />
            </div>
            <button
              onClick={() => setShowAddEarningModal(true)}
              className="btn-primary flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPlus} />
              Add Earning
            </button>
            <button
              onClick={handleExportReport}
              className="btn-secondary flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              Export Report
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Earnings */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-neutral-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-neutral-0/20 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faDollarSign} className="text-2xl" />
              </div>
              <div className="flex items-center gap-1 text-sm bg-green-500/20 px-2 py-1 rounded">
                <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
                <span>12%</span>
              </div>
            </div>
            <h3 className="text-neutral-0/80 body-small mb-1">
              Total Earnings
            </h3>
            <p className="heading-2 mb-0">${totalEarnings.toLocaleString()}</p>
          </div>

          {/* Pending Payments */}
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-2xl text-yellow-600"
                />
              </div>
            </div>
            <h3 className="text-neutral-600 body-small mb-1">
              Pending Payments
            </h3>
            <p className="heading-3 text-neutral-900 mb-0">
              ${pendingPayments.toLocaleString()}
            </p>
          </div>

          {/* This Month */}
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-2xl text-green-600"
                />
              </div>
            </div>
            <h3 className="text-neutral-600 body-small mb-1">This Month</h3>
            <p className="heading-3 text-neutral-900 mb-0">
              ${completedThisMonth.toLocaleString()}
            </p>
          </div>

          {/* Projected */}
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-2xl text-blue-600"
                />
              </div>
            </div>
            <h3 className="text-neutral-600 body-small mb-1">
              Projected (Next Month)
            </h3>
            <p className="heading-3 text-neutral-900 mb-0">
              ${projectedEarnings.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Monthly Earnings Chart */}
          <div className="lg:col-span-2 bg-neutral-0 rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="heading-4 text-neutral-900">Monthly Earnings</h2>
              <button className="text-primary-600 body-small font-medium hover:text-primary-700 transition-colors">
                View Details
              </button>
            </div>

            {/* Simple Bar Chart */}
            <div className="flex items-end justify-between gap-4 h-64">
              {monthlyEarnings.map((earning, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="w-full flex flex-col justify-end h-full">
                    <div
                      className="w-full bg-primary-600 rounded-t-lg hover:bg-primary-700 transition-all cursor-pointer relative group"
                      style={{
                        height: `${(earning.amount / maxEarning) * 100}%`,
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-neutral-0 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        ${earning.amount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <span className="text-neutral-600 text-sm font-medium">
                    {earning.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
            <h2 className="heading-4 text-neutral-900 mb-6">Quick Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div>
                  <p className="text-neutral-600 body-small mb-1">
                    Total Projects
                  </p>
                  <p className="heading-4 text-neutral-900">47</p>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faWallet}
                    className="text-primary-600 text-xl"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div>
                  <p className="text-neutral-600 body-small mb-1">
                    Avg. Project Value
                  </p>
                  <p className="heading-4 text-neutral-900">$6,850</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-blue-600 text-xl"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-600 body-small mb-1">
                    Active Clients
                  </p>
                  <p className="heading-4 text-neutral-900">23</p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-600 text-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-neutral-0 rounded-xl border border-neutral-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-neutral-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="heading-4 text-neutral-900">
                Transaction History
              </h2>
              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-4 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small w-64"
                  />
                </div>
                {/* Status Filter */}
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small cursor-pointer"
                  >
                    <option>All Status</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Processing</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">
                    PROJECT
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">
                    CLIENT
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">
                    AMOUNT
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">
                    STATUS
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">
                    DATE
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">
                    PAYMENT METHOD
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-600">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-neutral-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-neutral-900">
                        {transaction.projectName}
                      </p>
                      <p className="text-neutral-500 text-sm">
                        {transaction.invoiceNumber}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-neutral-700">
                        {transaction.clientName}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-neutral-900">
                        ${transaction.amount.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getStatusBadge(
                          transaction.status
                        )}`}
                      >
                        {getStatusText(transaction.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-neutral-700">
                        {new Date(transaction.date).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-neutral-700">
                        {transaction.paymentMethod}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center relative">
                        <button
                          onClick={() =>
                            setOpenActionsMenu(
                              openActionsMenu === transaction.id
                                ? null
                                : transaction.id
                            )
                          }
                          className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                        >
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            className="text-neutral-600"
                          />
                        </button>

                        {/* Actions Dropdown */}
                        {openActionsMenu === transaction.id && (
                          <>
                            <div
                              className="fixed inset-0 z-10"
                              onClick={() => setOpenActionsMenu(null)}
                            />
                            <div className="absolute right-0 top-full mt-1 w-48 bg-neutral-0 border border-neutral-200 rounded-lg shadow-lg z-20 py-1">
                              <button
                                onClick={() => {
                                  handleViewDetails(transaction.id);
                                  setOpenActionsMenu(null);
                                }}
                                className="w-full px-4 py-2.5 text-left hover:bg-neutral-50 transition-colors flex items-center gap-3 text-neutral-700"
                              >
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="text-primary-600 w-4"
                                />
                                <span className="body-small">View Details</span>
                              </button>
                              <button
                                onClick={() => {
                                  handleDownloadInvoice(transaction);
                                  setOpenActionsMenu(null);
                                }}
                                className="w-full px-4 py-2.5 text-left hover:bg-neutral-50 transition-colors flex items-center gap-3 text-neutral-700"
                              >
                                <FontAwesomeIcon
                                  icon={faDownload}
                                  className="text-blue-600 w-4"
                                />
                                <span className="body-small">
                                  Download Invoice
                                </span>
                              </button>
                              <div className="border-t border-neutral-100 my-1" />
                              <button
                                onClick={() => {
                                  console.log("View invoice details");
                                  setOpenActionsMenu(null);
                                }}
                                className="w-full px-4 py-2.5 text-left hover:bg-neutral-50 transition-colors flex items-center gap-3 text-neutral-700"
                              >
                                <FontAwesomeIcon
                                  icon={faFileInvoice}
                                  className="text-neutral-600 w-4"
                                />
                                <span className="body-small">
                                  Invoice Details
                                </span>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Earning Modal */}
      {showAddEarningModal && (
        <div className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-0 rounded-xl shadow-2xl max-w-2xl w-full">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-primary-50 to-secondary-50">
              <h3 className="heading-4 text-neutral-900">Add New Earning</h3>
              <button
                onClick={() => setShowAddEarningModal(false)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-neutral-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-5">
                {/* Select Project */}
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Select Project <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular cursor-pointer"
                  >
                    <option value="">Choose a project...</option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name} - {project.client}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Budget Info */}
                {selectedProjectData && (
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-900 mb-3">
                      Project Budget
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-neutral-600 text-sm mb-1">
                          Total Budget
                        </p>
                        <p className="font-semibold text-neutral-900">
                          ${selectedProjectData.totalBudget.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-neutral-600 text-sm mb-1">Earned</p>
                        <p className="font-semibold text-green-600">
                          ${selectedProjectData.earnedAmount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-neutral-600 text-sm mb-1">
                          Remaining
                        </p>
                        <p className="font-semibold text-orange-600">
                          $
                          {selectedProjectData.remainingAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Amount */}
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Amount <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold">
                      $
                    </span>
                    <input
                      type="number"
                      value={earningAmount}
                      onChange={(e) => setEarningAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                </div>

                {/* Date and Payment Method */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2 body-small">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={earningDate}
                      onChange={(e) => setEarningDate(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2 body-small">
                      Payment Method <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular cursor-pointer"
                    >
                      <option>Bank Transfer</option>
                      <option>Credit Card</option>
                      <option>Cash</option>
                      <option>Check</option>
                    </select>
                  </div>
                </div>
                {/* Notes */}
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2 body-small">
                    Notes
                  </label>
                  <textarea
                    value={earningNotes}
                    onChange={(e) => setEarningNotes(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Modal Actions */}
            <div className="px-6 py-4 border-t border-neutral-200 flex items-center justify-end gap-4 bg-neutral-50">
              <button
                onClick={() => setShowAddEarningModal(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button onClick={handleAddEarning} className="btn-primary">
                Add Earning
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
