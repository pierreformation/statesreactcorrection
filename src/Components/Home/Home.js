import { Link } from "react-router-dom";
import "./home.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="title">EXERCICES STATES</div>
      <div>
        <Link className="menuEl" to="counters">
          COMPTEURS
        </Link>
        <Link className="menuEl" to="selecters">
          SELECTERS
        </Link>
        <Link className="menuEl" to="converters">
          CONVERTERS
        </Link>
      </div>
    </div>
  );
};
export default Menu;
