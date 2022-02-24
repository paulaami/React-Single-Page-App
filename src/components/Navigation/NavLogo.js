import { Link } from "react-router-dom";

const NavLogo = () => {
	return (
		<div className="navigation__container-logo">
			<h1 className="navigation__container-logo-name">
				<Link to="/">Product Name</Link>
			</h1>
		</div>
	);
};

export default NavLogo;
