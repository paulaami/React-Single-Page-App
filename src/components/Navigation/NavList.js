const NavList = () => {
	return (
		<ul
			className="navigation__container-list"

			// {`navigation__container-list ${props.navbarOpen ? "active" : ""}`}
		>
			<li className="navigation__container-list-item">
				<a
					className="navigation__container-list-link text-style"
					href="about.html"
				>
					About
				</a>
			</li>
			<li className="navigation__container-list-item">
				<a
					className="navigation__container-list-link text-style"
					href="collection.html"
				>
					Collection
				</a>
			</li>
		</ul>
	);
};

export default NavList;
