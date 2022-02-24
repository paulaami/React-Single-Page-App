import { Link } from "react-router-dom";
import "./HeaderNav.css";

const HeaderNav = (props) => {
  return (
    <nav className="header__nav">
      <div className="container">
        <span className="header__nav-home text-style">
          <Link
            to="/React-Single-Page-App/"
          >
            Home
          </Link>
        </span>
        <span className="slash">/</span>
        <span className="header__nav-current text-style">{props.title}</span>
      </div>
    </nav>
  );
};

export default HeaderNav;
