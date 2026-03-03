import React from "react";
import Sidebar from "../components/Sidebar";
import StatusCard from "../components/StatusCard";
import ScanTable from "../components/ScanTable";

const Dashboard = () => {
  // Get the username from localStorage (set during login/signup)
  const username = localStorage.getItem("username") || "User";

  const stats = [
    { title: "Critical", count: 5, percentage: "+10%", color: "text-red-600" },
    { title: "High", count: 12, percentage: "+5%", color: "text-orange-600" },
    { title: "Medium", count: 20, percentage: "-2%", color: "text-yellow-500" },
    { title: "Low", count: 50, percentage: "+8%", color: "text-green-600" },
  ];

  const scans = [
    {
      name: "Scan 1",
      type: "Full",
      status: "Completed",
      statusColor: "bg-green-600",
      progress: 100,
      vulnerabilities: [
        { count: 5, color: "bg-red-600" },
        { count: 10, color: "bg-orange-600" },
      ],
      lastScan: "2026-03-01",
    },
    {
      name: "Scan 2",
      type: "Quick",
      status: "Scheduled",
      statusColor: "bg-gray-500",
      progress: 0,
      vulnerabilities: [{ count: 2, color: "bg-yellow-500" }],
      lastScan: "2026-03-02",
    },
    {
      name: "Scan 3",
      type: "Full",
      status: "Failed",
      statusColor: "bg-red-600",
      progress: 50,
      vulnerabilities: [{ count: 1, color: "bg-red-600" }],
      lastScan: "2026-03-03",
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 dark:bg-darkbg transition-colors duration-500 overflow-auto relative">
        {/* Breadcrumb / Navigation Path */}
        <nav className="text-gray-600 mb-6 text-sm">
          Home / Dashboard / Scans
        </nav>

        {/* Status Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map((s, i) => (
            <StatusCard key={i} {...s} />
          ))}
        </div>

        {/* Scan Table */}
        <ScanTable scans={scans} />

        {/* Bottom-left logo + dynamic username */}
        <div className="fixed bottom-4 left-4 flex items-center gap-2 p-3 rounded-lg shadow-lg z-50 
                bg-white dark:bg-gray-200 text-gray-900 dark:text-black">
          <span className="font-medium">{username}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;