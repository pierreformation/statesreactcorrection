import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <div className="myheader">HOME</div>
    </Link>
  );
};

export default Header;
