import React from "react";
import useClimateData from "./useClimateData";
import "./Weather.css"; 

function Weather() {
  const { climateData, loading } = useClimateData();

  if (loading) {
    return <div>Loading...</div>;
  }

  const { hourly } = climateData;
  const currentHourData = hourly.temperature_2m[0];

  return (
    <div className="weather-container">
      <h2 className="weather-title">Weather</h2>
      <div className="weather-info">
        <p className="weather-text">Max Temperature: {currentHourData} °C</p>
        <p className="weather-text">Min Temperature: {currentHourData} °C</p>
      </div>
    </div>
  );
}

export default Weather;