import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import the useParams hook
import { fetchTrainDetails } from "./api";

function TrainDetails() {
  const { id } = useParams(); // Access the trainId from the URL parameters
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
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : train ? (
        <>
          <div>Train Number: {train.trainNumber}</div>
          <div>Delayed By: {train.delayedBy}</div>
          <div>Train Name: {train.trainName}</div>
          <div>
            Departure Time:{" "}
            {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}
          </div>
          <div>
            Seats Available: Sleeper = {train.seatsAvailable.sleeper}, AC ={" "}
            {train.seatsAvailable.AC}
          </div>
          <div>
            Price: AC = ${train.price.AC}, Sleeper = ${train.price.sleeper}
          </div>
        </>
      ) : (
        <div>Train not found</div>
      )}
    </div>
  );
}

export default TrainDetails;
