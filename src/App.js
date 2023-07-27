import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Blog } from "./components/Blog";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { Contact22 } from "./components/Contact221";
import { About } from "./components/About";
import { NoPage } from "./components/NoPage";
import { Unsubscribe } from "./components/Unsubscribe";
import { TermsOfUse } from "./components/TermsOfUse";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/avi/react12/">
        {/* <Accor /> */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
            title="Business opportunities are like buses"
          />
          <Route path="about" element={<About />} title="About" />
          <Route path="blog" element={<Blog />} title="Blog" />
          <Route
            path="unsubscribe"
            element={<Unsubscribe />}
            title="Unsubscribe"
          />
          <Route path="contact-us" element={<Contact22 />} title="Contact US" />
          <Route
            path="privacy-policy"
            element={<PrivacyPolicy />}
            title="Privacy Policy"
          />
          <Route
            path="terms-of-use"
            element={<TermsOfUse />}
            title="Terms of Use"
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
