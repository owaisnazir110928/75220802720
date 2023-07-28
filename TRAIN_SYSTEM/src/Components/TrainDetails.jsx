import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTrainDetails } from "./api";

function TrainDetails() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        setLoading(true);
        const data = await fetchTrainDetails(id);
        setTrain(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching train details:", error);
        setLoading(false);
      }
    };

    fetchTrainData();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div>Loading...</div>
      ) : train ? (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">{train.trainName}</h2>
            <p className="text-gray-600">Train Number: {train.trainNumber}</p>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <p className="text-lg">Delayed By: {train.delayedBy} minutes</p>
            <p className="mt-2">
              Departure Time:{" "}
              {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}
            </p>
            <p className="mt-2">
              Seats Available: Sleeper = {train.seatsAvailable.sleeper}, AC ={" "}
              {train.seatsAvailable.AC}
            </p>
            <p className="mt-2">
              Price: AC = ${train.price.AC}, Sleeper = ${train.price.sleeper}
            </p>
          </div>
        </div>
      ) : (
        <div>Train not found</div>
      )}
    </div>
  );
}

export default TrainDetails;
