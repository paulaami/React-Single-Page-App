import "./HomeCollection.css";
// import Container from "../UI/Container";
import Box from "../UI/Box";

const HomeCollection = () => {
	return (
		<section className="section__collection">
			<div className="container">
				<div className="section__collection-top">
					<h2 className="section__collection-top-header">Collection</h2>
					<button className="section__collection-top-btn">see all</button>
				</div>
				<div className="section__collection-bottom">
					<Box collectionName='Collection Item' />
					<Box collectionName='Collection Item' />
					<Box collectionName='Collection Item' />
					<Box collectionName='Collection Item' />
				</div>
			</div>
		</section>
	);
};

export default HomeCollection;
