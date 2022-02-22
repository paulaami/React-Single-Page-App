import './Navbar.css';

const Navbar = () => {
 return (
  <nav className="navigation">
   <div className="navigation__container">
    <div className="navigation__container-logo">
     <h1 className="navigation__container-logo-name"><a href="#">Product Name</a></h1>
    </div>
    <ul className="navigation__container-list" id="navList">
     <li className="navigation__container-list-item">
      <a className="navigation__container-list-link text-style" href="about.html">About</a>
     </li>
     <li className="navigation__container-list-item">
      <a className="navigation__container-list-link text-style" href="collection.html">Collection</a>
     </li>
    </ul>
    <button className="navigation__container-hamburger" aria-expanded="false" id="burgerBtn">
     <img className="icon burger-icon" id="burgerIcon" src="svg/hamburger.svg" alt="hamburger icon menu" />
     <img className="icon close-icon" id="closeIcon" src="svg/close.svg" alt="close icon" />
    </button>
    <button className="account"><img src="svg/account.svg" aria-hidden="true" alt="account icon" /></button>
   </div>
  </nav> 
 )
}

export default Navbar;
