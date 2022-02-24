import NavLogo from "./NavLogo";
import Hamburger from "./Hamburger";

import './Navigation.css';

const Navbar = (props) => {
	return (
		<nav className='navigation'>
			<div className="navigation__container">
				<NavLogo/>
				<Hamburger />
				<button className="account">
					<img src="/React-Single-Page-App/svg/account.svg" aria-hidden="true" className="account-icon" alt="account icon" />
					<img src="/React-Single-Page-App/svg/account-white.svg" aria-hidden="true" className="account-icon-white" alt="account icon" />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
