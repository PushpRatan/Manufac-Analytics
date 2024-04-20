import { useState, useEffect } from "react";
import Data from "../Wine-Data.json";

const useData = () => {
  const [distAlcoholCount, setDistAlcoholCount] = useState([]);

  useEffect(() => {
    const distinctValue = [...new Set(Data.map((item) => item.Alcohol))];
    setDistAlcoholCount(distinctValue);
  }, []);

  return distAlcoholCount;
};

export default useData;
