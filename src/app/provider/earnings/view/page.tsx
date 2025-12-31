"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheckCircle,
  faDownload,
  faPrint,
  faShare,
  faCalendar,
  faCreditCard,
  faFileInvoice,
  faUser,
  faBuilding,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface PaymentDetail {
  id: string;
  date: string;
  amount: number;
  method: string;
  notes: string;
  transactionId: string;
}

interface Transaction {
  id: string;
  projectName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  amount: number;
  status: "completed" | "pending" | "processing";
  date: string;
  paymentMethod: string;
  invoiceNumber: string;
  description: string;
  totalBudget: number;
  earnedAmount: number;
  remainingAmount: number;
}

export default function EarningsViewPage() {
  // In a real app, you'd get the transaction ID from the URL params
  // For demo purposes, we'll use mock data
  const transaction: Transaction = {
    id: "1",
    projectName: "Kitchen Renovation",
    clientName: "Sarah Johnson",
    clientEmail: "sarah.johnson@email.com",
    clientPhone: "+1 (555) 123-4567",
    clientAddress: "123 Main Street, Springfield, IL 62701",
    amount: 8500,
    status: "completed",
    date: "2024-03-15",
    paymentMethod: "Bank Transfer",
    invoiceNumber: "INV-001",
    description:
      "Complete kitchen renovation including cabinets, countertops, appliances, and electrical work.",
    totalBudget: 15000,
    earnedAmount: 8500,
    remainingAmount: 6500,
  };

  const paymentHistory: PaymentDetail[] = [
    {
      id: "1",
      date: "2024-03-15",
      amount: 5000,
      method: "Bank Transfer",
      notes: "First installment - 50% advance payment",
      transactionId: "TXN-2024-001-A",
    },
    {
      id: "2",
      date: "2024-03-10",
      amount: 3500,
      method: "Bank Transfer",
      notes:
        "Second installment - Progress payment after completion of cabinetry",
      transactionId: "TXN-2024-001-B",
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

  const handleDownload = () => {
    console.log("Downloading invoice:", transaction.invoiceNumber);
    alert(`Downloading invoice ${transaction.invoiceNumber}`);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    console.log("Sharing invoice:", transaction.invoiceNumber);
    alert("Share functionality would be implemented here");
  };

  const handleBack = () => {
    window.history.back();
  };

  const progressPercentage =
    (transaction.earnedAmount / transaction.totalBudget) * 100;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-neutral-0 border-b border-neutral-200 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="body-regular font-medium">Back to Earnings</span>
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="px-4 py-2 border-2 border-neutral-200 rounded-lg text-neutral-700 font-semibold hover:bg-neutral-50 transition-colors flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faShare} />
                <span>Share</span>
              </button>
              <button
                onClick={handlePrint}
                className="px-4 py-2 border-2 border-neutral-200 rounded-lg text-neutral-700 font-semibold hover:bg-neutral-50 transition-colors flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faPrint} />
                <span>Print</span>
              </button>
              <button
                onClick={handleDownload}
                className="btn-primary flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download Invoice
              </button>
            </div>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="heading-2 text-neutral-900 mb-2">
                {transaction.projectName}
              </h1>
              <div className="flex items-center gap-4 text-neutral-600">
                <span className="body-small">
                  Invoice: {transaction.invoiceNumber}
                </span>
                <span className="body-small">•</span>
                <span className="body-small">
                  {new Date(transaction.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <span
              className={`px-4 py-2 rounded-lg text-sm font-semibold border ${getStatusBadge(
                transaction.status
              )}`}
            >
              {getStatusText(transaction.status)}
            </span>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Summary */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-6">
                Project Summary
              </h2>

              {/* Amount Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4 border border-primary-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        className="text-neutral-0 text-sm"
                      />
                    </div>
                    <p className="text-neutral-600 body-small">Total Budget</p>
                  </div>
                  <p className="heading-3 text-neutral-900">
                    ${transaction.totalBudget.toLocaleString()}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-neutral-0 text-sm"
                      />
                    </div>
                    <p className="text-neutral-600 body-small">Earned</p>
                  </div>
                  <p className="heading-3 text-green-700">
                    ${transaction.earnedAmount.toLocaleString()}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-neutral-0 text-sm"
                      />
                    </div>
                    <p className="text-neutral-600 body-small">Remaining</p>
                  </div>
                  <p className="heading-3 text-orange-700">
                    ${transaction.remainingAmount.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="body-small text-neutral-600 font-medium">
                    Payment Progress
                  </span>
                  <span className="body-small text-neutral-900 font-semibold">
                    {progressPercentage.toFixed(0)}%
                  </span>
                </div>
                <div className="w-full h-3 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-600 to-primary-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Description
                </h3>
                <p className="text-neutral-600 body-regular leading-relaxed">
                  {transaction.description}
                </p>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-6">
                Payment History
              </h2>
              <div className="space-y-4">
                {paymentHistory.map((payment, index) => (
                  <div
                    key={payment.id}
                    className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 hover:border-primary-500 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-green-600 text-xl"
                          />
                        </div>
                        <div>
                          <p className="heading-4 text-neutral-900 mb-1">
                            ${payment.amount.toLocaleString()}
                          </p>
                          <p className="text-neutral-500 body-small">
                            Payment #{index + 1} • {payment.method}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-neutral-900 font-medium body-small mb-1">
                          {new Date(payment.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <p className="text-neutral-500 text-xs">
                          {payment.transactionId}
                        </p>
                      </div>
                    </div>
                    <p className="text-neutral-600 body-small pl-16">
                      {payment.notes}
                    </p>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <span className="body-regular text-neutral-600">
                    Total Received
                  </span>
                  <span className="heading-4 text-green-600">
                    ${transaction.earnedAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Client Information */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-6">
                Client Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-primary-600"
                    />
                  </div>
                  <div>
                    <p className="text-neutral-500 body-small mb-1">
                      Client Name
                    </p>
                    <p className="text-neutral-900 font-semibold">
                      {transaction.clientName}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-blue-600"
                    />
                  </div>
                  <div>
                    <p className="text-neutral-500 body-small mb-1">Email</p>
                    <p className="text-neutral-900 font-medium body-small break-all">
                      {transaction.clientEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-green-600"
                    />
                  </div>
                  <div>
                    <p className="text-neutral-500 body-small mb-1">Phone</p>
                    <p className="text-neutral-900 font-medium">
                      {transaction.clientPhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-orange-600"
                    />
                  </div>
                  <div>
                    <p className="text-neutral-500 body-small mb-1">Address</p>
                    <p className="text-neutral-900 font-medium body-small leading-relaxed">
                      {transaction.clientAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="bg-neutral-0 rounded-xl border border-neutral-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-6">
                Invoice Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <span className="text-neutral-600 body-small">
                    Invoice Number
                  </span>
                  <span className="text-neutral-900 font-semibold">
                    {transaction.invoiceNumber}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <span className="text-neutral-600 body-small">
                    Invoice Date
                  </span>
                  <span className="text-neutral-900 font-semibold">
                    {new Date(transaction.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <span className="text-neutral-600 body-small">
                    Payment Method
                  </span>
                  <span className="text-neutral-900 font-semibold">
                    {transaction.paymentMethod}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 body-small">Status</span>
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getStatusBadge(
                      transaction.status
                    )}`}
                  >
                    {getStatusText(transaction.status)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-200 p-6">
              <h2 className="heading-4 text-neutral-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={handleDownload}
                  className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg text-neutral-700 font-semibold hover:bg-primary-50 hover:border-primary-500 transition-colors flex items-center gap-3"
                >
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-primary-600"
                  />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg text-neutral-700 font-semibold hover:bg-primary-50 hover:border-primary-500 transition-colors flex items-center gap-3"
                >
                  <FontAwesomeIcon
                    icon={faPrint}
                    className="text-primary-600"
                  />
                  <span>Print Invoice</span>
                </button>
                <button
                  onClick={handleShare}
                  className="w-full px-4 py-3 bg-neutral-0 border border-neutral-200 rounded-lg text-neutral-700 font-semibold hover:bg-primary-50 hover:border-primary-500 transition-colors flex items-center gap-3"
                >
                  <FontAwesomeIcon
                    icon={faShare}
                    className="text-primary-600"
                  />
                  <span>Share Invoice</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
