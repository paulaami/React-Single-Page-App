import Navbar from "../components/Navigation/Navbar";
import Header from "../components/Header/Header";
import HomeCollection from "../components/Sections/HomeCollection";

const CollectionPage = () => {
 return (
  <div className="subpage collection__page">
   <Navbar></Navbar>
   <Header title="Collection"></Header>
   <HomeCollection></HomeCollection>
  </div>
  )
}

export default CollectionPage;