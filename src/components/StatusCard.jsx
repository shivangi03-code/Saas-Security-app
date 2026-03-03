import React from "react";

const StatusCard = ({ title, count, percentage, color }) => {
  return (
    <div className="flex-1 bg-white dark:bg-gray-800 shadow rounded-lg p-4 transition-colors duration-500">
      <h4 className="text-gray-500 dark:text-gray-300">{title}</h4>
      <div className="flex items-center justify-between mt-2">
        <span className={`text-2xl font-bold ${color}`}>{count}</span>
        <span className={`text-sm ${color}`}>{percentage}</span>
      </div>
    </div>
  );
};

export default StatusCard;