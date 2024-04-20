import data from "../Wine-Data.json";

const useGamma = () => {
  const Data = data;
  const output = Data.reduce((acc, curr) => {
    if (acc[curr.Alcohol]) {
      acc[curr.Alcohol].push((curr.Ash * curr.Hue) / curr.Magnesium);
    } else {
      acc[curr.Alcohol] = [(curr.Ash * curr.Hue) / curr.Magnesium];
    }
    return acc;
  }, {});
  const buildArr = Object.keys(output).map((key) => ({
    [key]: output[key],
  }));
  return buildArr;
};

export default useGamma;
