import React, { useState, useEffect } from "react";
import TrainListItem from "./TrainListItem";
import { fetchAllTrains } from "./api";

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("price");

  const sortTrains = (trains, option) => {
    return trains.sort((a, b) => {
      if (option === "price") {
        return a.price.sleeper - b.price.sleeper;
      } else if (option === "seatsAvailable") {
        return (
          b.seatsAvailable.sleeper +
          b.seatsAvailable.AC -
          (a.seatsAvailable.sleeper + a.seatsAvailable.AC)
        );
      } else if (option === "departureTime") {
        return (
          new Date(
            b.departureTime.Hours * 60 + b.departureTime.Minutes + b.delayedBy
          ) -
          new Date(
            a.departureTime.Hours * 60 + a.departureTime.Minutes + a.delayedBy
          )
        );
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
        const sortedTrains = sortTrains(data, sortOption);
        const filteredTrains = filterTrains(sortedTrains);
        setTrains(filteredTrains);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trains:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="sortOption" className="mr-2">
          Sort by:
        </label>
        <select
          id="sortOption"
          value={sortOption}
          onChange={handleSortChange}
          className="border p-2 rounded"
        >
          <option value="price">Price</option>
          <option value="seatsAvailable">Seats Available</option>
          <option value="departureTime">Departure Time</option>
        </select>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="space-y-4">
          {trains.map((train) => (
            <TrainListItem key={train.trainName} train={train} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TrainList;
