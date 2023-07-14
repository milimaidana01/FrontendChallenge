import { useState, useEffect } from "react";
import axios from "axios";

const useClimateData = () => {
  const [climateData, setClimateData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClimateData = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
        );
        setClimateData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching climate data:", error);
        setLoading(false);
      }
    };

    fetchClimateData();
  }, []);

  return { climateData, loading };
};

export default useClimateData;