import { useState, useEffect } from "react";
import data from "../Wine-Data.json";

const useFlavanoid = () => {
  const Data = data;
  const output = Data.reduce((acc, curr) => {
    if (acc[curr.Alcohol]) {
      acc[curr.Alcohol].push(curr.Flavanoids);
    } else {
      acc[curr.Alcohol] = [curr.Flavanoids];
    }
    return acc;
  }, {});
  const buildArr = Object.keys(output).map((key) => ({
    [key]: output[key],
  }));
  //   console.log(buildArr);
  return buildArr;
};

export default useFlavanoid;
