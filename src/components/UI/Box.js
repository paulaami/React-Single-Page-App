import { Link } from "react-router-dom";
import "./Box.css";

const Box = (props) => {
  return (
    <div className="section__collection-bottom-box">
      <Link to="/React-Single-Page-App/collection-item.html">
        <img
          className="img-responsive"
          src="images/book_large.png"
          alt="books with a plant"
        />
      </Link>
      <Link to="/React-Single-Page-App/collection-item.html">
        <img
          className="box-img"
          src="images/book.png"
          alt="books with a plant"
        />
      </Link>
      <p className="text-style">
        <Link to="/React-Single-Page-App/collection-item.html">{props.collectionName}</Link>
      </p>
    </div>
  );
};

export default Box;
