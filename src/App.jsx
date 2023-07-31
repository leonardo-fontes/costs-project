import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
