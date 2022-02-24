import Navbar from "../components/Navigation/Navbar";
import Header from "../components/Header/Header";
import CollectionItem from "../components/Sections/CollectionItem";

const SinglePage = () => {
 return (
 <div className="subpage collection__page collection__item">
  <Navbar></Navbar>
  <Header title="Collection"></Header>
  <CollectionItem></CollectionItem>
  </div>
  )
}

export default SinglePage;