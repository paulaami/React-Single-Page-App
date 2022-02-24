import "./CollectionItem.css";
import Description from "./Description";

const CollectionItem = () => {
  return (
    <section className="section__item">
      <div className="container">
        <h2>Collection item</h2>
        <div className="section__item-wrapper">
          <img
            className="section__item-img item-small"
            src="images/book_item.png"
            alt="books and plant"
          />
          <img
            className="section__item-img item-large"
            src="images/book_item_large.png"
            alt="books and plant"
          />
          <Description title="Section title"></Description>
        </div>
      </div>
    </section>
  );
};

export default CollectionItem;
