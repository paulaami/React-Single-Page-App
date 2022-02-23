import "./Navbar.css";
import NavLogo from "./NavLogo";
import Hamburger from "./Hamburger";

const Navbar = () => {
	return (
		<nav className="navigation">
			<div className="navigation__container">
				<NavLogo />
				<Hamburger />
				<button className="account">
					<img src="svg/account.svg" aria-hidden="true" alt="account icon" />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
