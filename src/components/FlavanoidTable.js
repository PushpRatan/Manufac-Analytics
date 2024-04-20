import useFlavanoid from "../utils/useFlavanoid";
import Tables from "./Tables";

const FlavanoidTable = () => {
  const flavanoidData = useFlavanoid();

  // console.log(statistics);
  return (
    <div>
      <Tables Data={flavanoidData} name={"Flavanoid"} />
    </div>
  );
};

export default FlavanoidTable;
