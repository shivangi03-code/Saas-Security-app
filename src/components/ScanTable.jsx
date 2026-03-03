import React from "react";

const ScanTable = () => {
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
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow overflow-auto transition-colors duration-500">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Scans</h2>

      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
          <tr>
            <th className="p-3">Scan Name</th>
            <th className="p-3">Type</th>
            <th className="p-3">Status</th>
            <th className="p-3">Progress</th>
            <th className="p-3">Vulnerabilities</th>
            <th className="p-3">Last Scan</th>
          </tr>
        </thead>
        <tbody>
          {scans.map((scan, i) => (
            <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 text-gray-900 dark:text-gray-100">{scan.name}</td>
              <td className="p-3 text-gray-900 dark:text-gray-100">{scan.type}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${scan.statusColor}`}
                >
                  {scan.status}
                </span>
              </td>
              <td className="p-3 text-gray-900 dark:text-gray-100">{scan.progress}%</td>
              <td className="p-3 flex space-x-2">
                {scan.vulnerabilities.map((v, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded-full text-white text-xs ${v.color}`}
                  >
                    {v.count}
                  </span>
                ))}
              </td>
              <td className="p-3 text-gray-900 dark:text-gray-100">{scan.lastScan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScanTable;