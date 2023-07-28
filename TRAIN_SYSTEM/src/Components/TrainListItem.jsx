import React from "react";
import { useNavigate } from "react-router-dom";

function TrainListItem({ train }) {
  const navigate = useNavigate();

  function handleTrainClick(trainNumber) {
    navigate(`/trains/${trainNumber}`);
  }

  return (
    <div
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer transition duration-300 transform hover:scale-105"
      onClick={() => handleTrainClick(train.trainNumber)}
    >
      <h2 className="text-xl font-semibold mb-2">{train.trainName}</h2>
      <p className="text-gray-600 mb-1">
        <i className="fas fa-train mr-2"></i> Train Number: {train.trainNumber}
      </p>
      <p className="text-gray-600 mb-1">
        <i className="far fa-clock mr-2"></i> Departure Time:{" "}
        {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}
      </p>
      <p className="text-gray-600 mb-2">
        <i className="fas fa-clock mr-2"></i> Delayed By: {train.delayedBy} minutes
      </p>
      <div className="flex justify-between">
        <p className="text-gray-700">
          <i className="fas fa-chair mr-2"></i> Seats Available: Sleeper = {train.seatsAvailable.sleeper}, AC ={" "}
          {train.seatsAvailable.AC}
        </p>
        <p className="text-gray-700">
          <i className="fas fa-dollar-sign mr-2"></i> Price: AC = ${train.price.AC}, Sleeper = ${train.price.sleeper}
        </p>
      </div>
    </div>
  );
}

export default TrainListItem;
