import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTrainDetails } from "./api";
import SkeletonTrainItem from "./SkeletonTrainItem";

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
    <div className="container mx-auto p-4 my-24">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {loading && <SkeletonTrainItem />}
        {error && <div className="text-center text-red-500">{error}</div>}
        {train && (
          <>
            <h2 className="text-3xl font-semibold mb-4">{train.trainName}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-lg">
                  <i className="fas fa-train text-blue-600 mr-2"></i> Train
                  Number:
                </p>
                <p className="text-xl font-semibold">{train.trainNumber}</p>
                <p className="text-gray-600 mt-2 text-lg">
                  <i className="far fa-clock text-blue-600 mr-2"></i> Departure
                  Time:
                </p>
                <p className="text-xl font-semibold">
                  {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-lg">
                  <i className="fas fa-clock text-blue-600 mr-2"></i> Delayed
                  By:
                </p>
                <p className="text-xl font-semibold">
                  {train.delayedBy} minutes
                </p>
                <p className="text-gray-600 mt-2 text-lg">
                  <i className="fas fa-chair text-blue-600 mr-2"></i> Seats
                  Available:
                </p>
                <p className="text-xl font-semibold">
                  Sleeper: {train.seatsAvailable.sleeper}, AC:{" "}
                  {train.seatsAvailable.AC}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 text-lg">
                <i className="fas fa-dollar-sign text-blue-600 mr-2"></i> Price:
              </p>
              <p className="text-xl font-semibold">
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
