import React, { useState } from "react";
import NavList from "./NavList";
import NavDesktop from "./NavDesktop";

import './Navigation.css';

const Hamburger = () => {
	
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	const burgerIcon = (
		<img
			className="icon burger-icon"
			src="/React-Single-Page-App/svg/hamburger.svg"
			alt="hamburger icon menu"
		/>
	);


	const closeIcon = (
		<img className="icon close-icon" src="/React-Single-Page-App/svg/close.svg" alt="close icon" />
	);

	return (
		<div>

			{navbarOpen && <NavList />} 
			<NavDesktop></NavDesktop>
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
