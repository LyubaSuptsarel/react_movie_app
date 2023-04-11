import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import BackToTop from "./components/BackToTop";
import { Home } from "./pages/Home";
import { Latest } from "./pages/Latest";
import { TopRated } from "./pages/TopRated";
import { Popular } from "./pages/Popular";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Profile } from "./pages/Profile";


function App() {
  
  return (
  <>
     <Header />
     <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/latest" element={ <Latest /> } />
      <Route path="/topRated" element={ <TopRated /> } />
      <Route path="/popular" element={ <Popular /> } />
      <Route path="*" element={ <NotFoundPage /> } />
      <Route path="/profile" element={ <Profile /> } />
    </Routes>
     <Footer />
     <BackToTop />
  </>
  );
}

export default App;
