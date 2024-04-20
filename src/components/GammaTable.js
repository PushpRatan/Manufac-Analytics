import useGamma from "../utils/useGamma";
import Tables from "./Tables";

const GammaTable = () => {
  const gammaData = useGamma();

  // console.log(statistics);
  return (
    <div>
      <Tables Data={gammaData} name={"Gamma"} />
    </div>
  );
};

export default GammaTable;
