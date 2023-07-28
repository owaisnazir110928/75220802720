import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTrainDetails } from "./api";

function TrainDetails() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        setLoading(true);
        const data = await fetchTrainDetails(id);
        setTrain(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching train details:", error);
        setError("Failed to fetch train details. Please try again later.");
        setLoading(false);
      }
    };

    fetchTrainData();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        {loading && <div className="text-center">Loading...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        {train && (
          <>
            <h2 className="text-2xl font-bold mb-4">{train.trainName}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Train Number:</p>
                <p>{train.trainNumber}</p>
                <p className="text-gray-600 mt-2">Departure Time:</p>
                <p>
                  {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Delayed By:</p>
                <p>{train.delayedBy} minutes</p>
                <p className="text-gray-600 mt-2">Seats Available:</p>
                <p>
                  Sleeper: {train.seatsAvailable.sleeper}, AC:{" "}
                  {train.seatsAvailable.AC}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">Price:</p>
              <p>
                AC: ${train.price.AC}, Sleeper: ${train.price.sleeper}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TrainDetails;
