import React from "react";

const StepTracker = ({ steps, activeStep }) => {
  return (
    <div className="flex items-center space-x-4 mt-4">
      {steps.map((step,i)=>(
        <div key={i} className="flex items-center space-x-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${i===activeStep ? "bg-teal-500" : "bg-gray-400"}`}>
            {i+1}
          </div>
          <span className={i===activeStep ? "text-teal-500 font-semibold" : "text-gray-500"}>{step}</span>
          {i < steps.length-1 && <div className={`flex-1 h-1 ${i<activeStep ? "bg-teal-500" : "bg-gray-300"}`}></div>}
        </div>
      ))}
    </div>
  );
};

export default StepTracker;