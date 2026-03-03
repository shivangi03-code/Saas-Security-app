import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

// Step Tracker Component
const StepTracker = ({ steps, activeStep }) => (
  <div className="flex items-center space-x-2 flex-1">
    {steps.map((step, i) => (
      <div key={i} className="flex-1 flex flex-col items-center">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${
            i === activeStep ? "bg-teal-500" : "bg-gray-400 dark:bg-gray-600"
          }`}
        >
          {i + 1}
        </div>
        <span className="text-sm mt-1 text-gray-700 dark:text-gray-300">{step}</span>
        {i !== steps.length - 1 && <div className="h-1 bg-gray-300 dark:bg-gray-600 w-full mt-2"></div>}
      </div>
    ))}
  </div>
);

// Vulnerability Card Component
const VulnerabilityCard = ({ title, endpoint, severity, description, timestamp }) => {
  const severityColors = {
    Critical: "bg-red-500",
    High: "bg-orange-500",
    Medium: "bg-yellow-400",
    Low: "bg-green-500",
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-3 mb-3 transition-colors duration-500">
      <div className="flex justify-between items-center mb-1">
        <span className={`px-2 py-1 rounded text-white text-xs ${severityColors[severity]}`}>
          {severity}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{timestamp}</span>
      </div>
      <div className="text-sm font-semibold text-gray-900 dark:text-white">{title}</div>
      <div className="text-sm text-teal-500 dark:text-teal-400">{endpoint}</div>
      <div className="text-sm text-gray-700 dark:text-gray-300">{description}</div>
    </div>
  );
};

const ActiveScanDetail = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const [scan, setScan] = useState(null);
  const username = localStorage.getItem("username") || "User";

  useEffect(() => {
    // Load scans from localStorage
    let scans = JSON.parse(localStorage.getItem("scans")) || [];

    // If no scans, create a default one
    if (scans.length === 0) {
      const defaultScan = {
        type: "Full",
        progress: 50,
        steps: ["Spidering", "Mapping", "Testing", "Validating", "Reporting"],
        activeStep: 2,
        vulnerabilities: [
          {
            title: "SQL Injection",
            endpoint: "/api/login",
            severity: "Critical",
            description: "Unsanitized input",
            timestamp: "2026-03-03 12:00",
          },
          {
            title: "XSS",
            endpoint: "/search?q=test",
            severity: "High",
            description: "Script injection possible",
            timestamp: "2026-03-03 12:05",
          },
        ],
        lastScan: "2026-03-03",
        targets: 5,
        subAgents: 2,
        parallel: 4,
        operations: 50,
        critical: 1,
        high: 1,
        medium: 1,
        activityLog: ["[12:00] Spidering started...", "[12:01] Mapping complete..."],
        verificationLog: ["[12:00] Loop 1 executed..."],
        credentials: "Admin",
        files: 2,
        checklists: 3,
      };
      scans.push(defaultScan);
      localStorage.setItem("scans", JSON.stringify(scans));
    }

    setScan(scans[scans.length - 1]); // Show the latest scan
  }, []);

  if (!scan) {
    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center text-gray-600 dark:text-gray-300">
          No scan data available.
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 overflow-auto relative">
        
        {/* Breadcrumb */}
        <nav className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
          Home / Dashboard / Active Scan
        </nav>

        {/* Top section: progress + step tracker */}
        <div className="flex items-center space-x-6 mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-teal-500 flex items-center justify-center text-xl font-bold text-teal-500 dark:text-teal-400">
            {scan.progress || 0}%
          </div>
          <StepTracker steps={scan.steps} activeStep={scan.activeStep} />
        </div>

        {/* Metadata row */}
        <div className="mt-4 bg-white dark:bg-gray-800 shadow rounded p-4 flex flex-wrap justify-between transition-colors duration-500">
          <div className="text-gray-900 dark:text-white">Scan Type: {scan.type}</div>
          <div className="text-gray-900 dark:text-white">Targets: {scan.targets || 0}</div>
          <div className="text-gray-900 dark:text-white">Started At: {scan.lastScan}</div>
          <div className="text-gray-900 dark:text-white">Credentials: {scan.credentials}</div>
          <div className="text-gray-900 dark:text-white">Files: {scan.files || 0}</div>
          <div className="text-gray-900 dark:text-white">Checklists: {scan.checklists || 0}</div>
        </div>

        {/* Lower section: Live console + Finding log */}
        <div className="mt-6 flex space-x-4">
          {/* Left panel: Live console */}
          <div className="flex-1">
            <div className="bg-black dark:bg-gray-900 text-green-400 dark:text-green-300 h-96 rounded font-mono overflow-auto p-4">
              {/* Tabs */}
              <div className="flex mb-2 space-x-2">
                <button
                  onClick={() => setActiveTab("activity")}
                  className={`px-3 py-1 rounded ${
                    activeTab === "activity" ? "bg-teal-500 text-white" : "bg-gray-700 text-gray-200 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  Activity Log
                </button>
                <button
                  onClick={() => setActiveTab("verification")}
                  className={`px-3 py-1 rounded ${
                    activeTab === "verification" ? "bg-teal-500 text-white" : "bg-gray-700 text-gray-200 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  Verification Loops
                </button>
              </div>
              {/* Console content */}
              <div className="text-sm">
                {activeTab === "activity"
                  ? scan.activityLog.map((line, i) => <div key={i}>{line}</div>)
                  : scan.verificationLog.map((line, i) => <div key={i}>{line}</div>)}
              </div>
            </div>
          </div>

          {/* Right panel: Finding Log */}
          <div className="w-80">
            {scan.vulnerabilities.length > 0 ? (
              scan.vulnerabilities.map((v, i) => <VulnerabilityCard key={i} {...v} />)
            ) : (
              <div className="text-gray-600 dark:text-gray-300 text-sm">No vulnerabilities found.</div>
            )}
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="mt-4 bg-white dark:bg-gray-800 shadow rounded p-2 flex justify-between text-sm transition-colors duration-500 text-gray-900 dark:text-white">
          <span>Sub-agents: {scan.subAgents || 0}</span>
          <span>Parallel Executions: {scan.parallel || 0}</span>
          <span>Operations: {scan.operations || 0}</span>
          <span>Critical: {scan.critical || 0}</span>
          <span>High: {scan.high || 0}</span>
          <span>Medium: {scan.medium || 0}</span>
        </div>

        {/* Bottom-left logo + username */}
        <div className="fixed bottom-4 left-4 flex items-center gap-2 p-3 rounded-lg shadow-lg z-50 
                bg-white dark:bg-gray-200 text-gray-900 dark:text-black">
          <span className="font-medium">{username}</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveScanDetail;