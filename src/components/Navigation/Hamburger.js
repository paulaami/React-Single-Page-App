import { useState } from "react";
import NavList from "./NavList";

const Hamburger = () => {
	
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	const burgerIcon = (
		<img
			className="icon burger-icon"
			src="svg/hamburger.svg"
			alt="hamburger icon menu"
		/>
	);

	const closeIcon = (
		<img className="icon close-icon" src="svg/close.svg" alt="close icon" />
	);

	return (
		<div>
			{/* add media */}
			{navbarOpen && <NavList />} 
			<button
				className="navigation__container-hamburger"
				aria-expanded="false"
				onClick={handleToggle}
			>
				{navbarOpen ? closeIcon : burgerIcon}
			</button>
		</div>
	);
};

export default Hamburger;
