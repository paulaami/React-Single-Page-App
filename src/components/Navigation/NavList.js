import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="navigation__container-list">
      <li className="navigation__container-list-item">
        <Link
          className="navigation__container-list-link text-style"
          to="/React-Single-Page-App/about.html/"
        >
          About
        </Link>
      </li>
      <li className="navigation__container-list-item">
        <Link
          className="navigation__container-list-link text-style collection-link"
          to="/React-Single-Page-App/collection.html/"
        >
          Collection
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
