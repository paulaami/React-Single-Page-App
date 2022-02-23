import "./Header.css";

const css = `
.header__container{
 background-image: url("images/lessons.png");
}
@media screen and (min-width: 1439px) {
 .header__container{
  background-image: url("images/lessons_large.png");
 }
}`;

const Header = () => {
  return (
    <header className="header">
      <style scoped>{css}</style>
      <div className="header__container">
        {/* <h2 className="header__container-title"></h2> */}
      </div>
    </header>
  );
};

export default Header;
