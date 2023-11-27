import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <span>HOME</span>
      <Link to="counters">COMPTEURS </Link>
      <Link to="selecters">SELECTERS </Link>
    </div>
  );
};

export default Home;
