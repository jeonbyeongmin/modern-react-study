import { useParams } from "react-router-dom";

function Coin() {
  const { id } = useParams();

  return <h1>{id}</h1>;
}

export default Coin;
