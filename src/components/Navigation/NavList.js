import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul
      className="navigation__container-list"

      // {`navigation__container-list ${props.navbarOpen ? "active" : ""}`}
    >
      <li className="navigation__container-list-item">
        <Link
          className="navigation__container-list-link text-style"
          to="/about.html"
        >
          About
        </Link>
      </li>
      <li className="navigation__container-list-item">
        <Link
          className="navigation__container-list-link text-style"
          to="/collection.html"
        >
          Collection
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
