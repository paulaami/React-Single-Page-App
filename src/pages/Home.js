import Header from "../components/Header/Header";
import Navbar from "../components/Navigation/Navbar";
import HomeCollection from "../components/Sections/HomeCollection";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Header></Header>
      <HomeCollection></HomeCollection>
    </div>
  );
};

export default HomePage;
