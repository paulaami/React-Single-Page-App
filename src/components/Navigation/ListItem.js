const ListItem = (props) => {
	<li className="navigation__container-list-item">
		<a className="navigation__container-list-link text-style" href="about.html">{props.itemName}</a>
	</li>;
};

export default ListItem;
