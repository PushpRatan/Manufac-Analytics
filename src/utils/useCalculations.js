import { useEffect, useState } from "react";

const useCalculations = (Data) => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const calculateStatistics = Data.map((obj) => {
      const key = Object.keys(obj)[0];
      const values = obj[key].map(Number).sort((a, b) => a - b);

      // Calculate mean
      const sum = values.reduce((acc, curr) => acc + curr, 0);
      const mean = parseFloat((sum / values.length).toFixed(3));

      // Calculate median
      const mid = Math.floor(values.length / 2);
      let median =
        values.length % 2 !== 0
          ? values[mid]
          : parseFloat((values[mid - 1] + values[mid]) / 2);
      median = median.toFixed(3);

      // Calculate mode
      const frequency = values.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
      let maxFreq = 0;
      let modes = [];
      for (const key in frequency) {
        if (frequency[key] > maxFreq) {
          maxFreq = frequency[key];
          modes = [parseFloat(key)];
        } else if (frequency[key] === maxFreq) {
          modes.push(parseFloat(key));
        }
      }
      // If all values are equally frequent, there is no mode
      if (modes.length === values.length) modes = [];

      return {
        [key]: {
          mean,
          median,
          mode: modes.map((mode) => parseFloat(mode.toFixed(3))),
        },
      };
    });
    setStatistics(calculateStatistics);
  }, []);

  return statistics;
};

export default useCalculations;
