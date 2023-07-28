import React from "react";
import { useNavigate } from "react-router-dom";

function TrainListItem({ train }) {
    const navigate = useNavigate();
  function handleTrainClick(trainNumber) {
    navigate(`/trains/${trainNumber}`);
  }
  return (
    <li onClick={() => handleTrainClick(train.trainNumber)}>
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
    </li>
  );
}

export default TrainListItem;
