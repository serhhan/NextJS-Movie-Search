import { useAppContext } from "../../context/state";
import Movies from "../../components/movies";
const Result = () => {
  const state = useAppContext();
  return (
    <>
      <Movies state={state} />
    </>
  );
};

export default Result;
