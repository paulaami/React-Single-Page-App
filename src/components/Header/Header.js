import "./Header.css";
import HeaderNav from "./HeaderNav";

const css = `
.header__container{
 background-image: url("images/lessons.png");
}
.subpage .header__container {
  background-image: url("images/lessons_about.png");
}
@media screen and (min-width: 1439px) {
 .header__container{
  background-image: url("images/lessons_large.png");
 }
 .subpage .header__container {
  background-image: url("images/lessons_about_large.png");
}
}`;

const Header = (props) => {
  return (
    <header className="header">
      <style scoped>{css}</style>
      <div className="header__container">
        <h2 className="header__container-title">{props.title}</h2>
      </div>
      <HeaderNav title={props.title}></HeaderNav>
    </header>
  );
};

export default Header;
