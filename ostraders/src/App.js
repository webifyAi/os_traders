import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './styles/styles.css'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Collection from './pages/Collection'
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import Scroll from "./components/SmoothScroll";
import Detail from "./pages/Detail";
import ScrollToTop from "./components/ScrollToTop";
// import NoPage from "./pages/NoPage";

function App() {

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const time = setTimeout(() => {
  //     setLoading(true);
  //   }, 2800);

  //   return () => {
  //     clearTimeout(time);
  // };
  // })




  return (
    <>
      <BrowserRouter>
        <Scroll/>
        <Navbar />
        <ScrollToTop/>
        <div className="smoothContainer">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="collection" element={<Collection />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="detail" element={<Detail />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
