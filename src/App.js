import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CollectionPage from "./pages/Collection";
import SinglePage from "./pages/CollectionItem";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/React-Single-Page-App/" element={<HomePage />} />
      <Route path="/React-Single-Page-App/about.html" element={<AboutPage />} />
      <Route path="/React-Single-Page-App/collection.html" element={<CollectionPage />} />
      <Route path="/React-Single-Page-App/collection-item.html" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
