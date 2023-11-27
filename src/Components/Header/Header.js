import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      MON HEADER
      <Link to="/">HOME</Link>
    </header>
  );
};

export default Header;
