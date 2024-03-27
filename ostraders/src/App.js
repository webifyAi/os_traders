import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './styles/styles.css'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Collection from './pages/Collection'
import Footer from "./components/Footer";
// import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="collection" element={<Collection /> } />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
