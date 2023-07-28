import React from "react";

function SkeletonTrainItem() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md animate-pulse">
      <div className="h-4 w-3/4 bg-gray-200 mb-2"></div>
      <div className="h-3 w-1/2 bg-gray-200 mb-2"></div>
      <div className="h-3 w-1/4 bg-gray-200 mb-2"></div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-3 w-1/4 bg-gray-200"></div>
        <div className="h-3 w-1/4 bg-gray-200"></div>
      </div>
    </div>
  );
}

export default SkeletonTrainItem;
