import { useEffect, useState } from "react";

const useOrganize = (statistics) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const organizedData = {
      mean: {},
      median: {},
      mode: {},
    };

    statistics.forEach((item) => {
      const key = Object.keys(item)[0];
      organizedData.mean[key] = item[key].mean;
      organizedData.median[key] = item[key].median;
      organizedData.mode[key] = item[key].mode;
    });
    const buildArr = Object.keys(organizedData).map((key) => ({
      [key]: organizedData[key],
    }));
    setTableData(buildArr);
  }, [statistics]);
  return tableData;
};

export default useOrganize;
