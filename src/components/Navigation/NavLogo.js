import { Link } from "react-router-dom";

const NavLogo = () => {
	return (
		<div className="navigation__container-logo">
			<h1 className="navigation__container-logo-name">
				<Link to="/React-Single-Page-App/">Product Name</Link>
			</h1>
		</div>
	);
};

export default NavLogo;
