import React from "react";
import { useNavigate } from "react-router-dom";

function TrainListItem({ train }) {
  const navigate = useNavigate();

  function handleTrainClick(trainNumber) {
    navigate(`/trains/${trainNumber}`);
  }

  return (
    <div
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer transition duration-300"
      onClick={() => handleTrainClick(train.trainNumber)}
    >
      <h2 className="text-xl font-semibold mb-2">{train.trainName}</h2>
      <p className="text-gray-500 mb-1">Train Number: {train.trainNumber}</p>
      <p className="text-gray-500 mb-1">
        Departure Time:{" "}
        {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}
      </p>
      <p className="text-gray-500 mb-2">
        Delayed By: {train.delayedBy} minutes
      </p>
      <div className="flex justify-between">
        <p className="text-gray-700">
          Seats Available: Sleeper = {train.seatsAvailable.sleeper}, AC ={" "}
          {train.seatsAvailable.AC}
        </p>
        <p className="text-gray-700">
          Price: AC = ${train.price.AC}, Sleeper = ${train.price.sleeper}
        </p>
      </div>
    </div>
  );
}

export default TrainListItem;
