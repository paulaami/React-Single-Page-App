import "./Box.css";

const Box = (props) => {
  return (
	<div className="section__collection-bottom-box">
		<a href="collection-item.html">
			<img
				className="img-responsive"
				src="images/book_large.png"
				alt="books with a plant"
			/>
		</a>
		<a href="collection-item.html">
			<img className="box-img" src="images/book.png" alt="books with a plant" />
		</a>
		<p className="text-style">
			<a href="collection-item.html">{props.collectionName}</a>
		</p>
	</div>
  )
};

export default Box;
