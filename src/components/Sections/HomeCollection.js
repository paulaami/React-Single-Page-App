import "./HomeCollection.css";

const HomeCollection = () => {
  return (
    <section className="section__collection">
      <div className="container">
        <div className="section__collection-top">
          <h2 className="section__collection-top-header">Collection</h2>
          <button className="section__collection-top-btn">see all</button>
        </div>
        <div className="section__collection-bottom">
          <div className="section__collection-bottom-box">
            <a href="collection-item.html">
              <img
                className="img-responsive"
                src="images/book_large.png"
                alt="photo of books with a plant"
              />
            </a>
            <a href="collection-item.html">
              <img
                className="box-img"
                src="images/book.png"
                alt="photo of books with a plant"
              />
            </a>
            <p className="text-style">
              <a href="collection-item.html">Collection Item</a>
            </p>
          </div>
          <div className="section__collection-bottom-box">
            <a href="collection-item.html">
              <img
                className="img-responsive"
                src="images/book_large.png"
                alt="second photo of books with a plant"
              />
            </a>
            <a href="collection-item.html">
              <img
                className="box-img"
                src="images/book.png"
                alt="second photo of books with a plant"
              />
            </a>
            <p className="text-style">
              <a href="collection-item.html">Collection Item</a>
            </p>
          </div>
          <div className="section__collection-bottom-box">
            <a href="collection-item.html">
              <img
                className="img-responsive"
                src="images/book_large.png"
                alt="third photo of books with a plant"
              />
            </a>
            <a href="collection-item.html">
              <img
                className="box-img"
                src="images/book.png"
                alt="third photo of books with a plant"
              />
            </a>
            <p className="text-style">
              <a href="collection-item.html">Collection Item</a>
            </p>
          </div>
          <div className="section__collection-bottom-box">
            <a href="collection-item.html">
              <img
                className="img-responsive"
                src="images/book_large.png"
                alt="another photo of books with a plant"
              />
            </a>
            <a href="collection-item.html">
              <img
                className="box-img"
                src="images/book.png"
                alt="another photo of books with a plant"
              />
            </a>
            <p className="text-style">
              <a href="collection-item.html">Collection Item</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCollection; 
