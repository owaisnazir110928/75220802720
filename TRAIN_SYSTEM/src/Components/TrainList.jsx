// TrainList.js
import React, { useState, useEffect } from "react";
import TrainListItem from "./TrainListItem";
import { fetchAllTrains } from "./api";

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [sortedTrains, setSortedTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  const sortTrains = (trains) => {
    return trains.sort((a, b) => {
      if (a.price.sleeper === b.price.sleeper) {
        if (a.seatsAvailable.sleeper === b.seatsAvailable.sleeper) {
          return (
            new Date(
              b.departureTime.Hours * 60 + b.departureTime.Minutes + b.delayedBy
            ) -
            new Date(
              a.departureTime.Hours * 60 + a.departureTime.Minutes + a.delayedBy
            )
          );
        }
        return b.seatsAvailable.sleeper - a.seatsAvailable.sleeper;
      }
      return a.price.sleeper - b.price.sleeper;
    });
  };

  const filterTrains = (trains) => {
    const currentTime = new Date();
    const thirtyMinutesFromNow = currentTime.getTime() + 30 * 60 * 1000;
    return trains.filter((train) => {
      const departureTimeInMinutes =
        train.departureTime.Hours * 60 +
        train.departureTime.Minutes +
        train.delayedBy;
      const departureTimeInMillis = departureTimeInMinutes * 60 * 1000;
      return (
        new Date(currentTime.getTime() + departureTimeInMillis) >=
        thirtyMinutesFromNow
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchAllTrains();
        console.log(data);
        const sortedTrains = sortTrains(data);
        const filteredTrains = filterTrains(sortedTrains);
        setTrains(filteredTrains);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trains:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {trains.map((train) => (
            <TrainListItem key={train.trainName} train={train} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TrainList;
