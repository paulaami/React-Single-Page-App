import Navbar from "../components/Navigation/Navbar";
import Header from "../components/Header/Header";
import Description from "../components/Sections/Description";

const AboutPage = () => {
 return (
  <div className="subpage about__page">
    <Navbar></Navbar>
    <Header title="About"></Header>
    <Description></Description>
  </div>
);
}

export default AboutPage;