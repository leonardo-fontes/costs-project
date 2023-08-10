import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
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
          <Route  path="/company" element={<Company />}></Route>
          <Route  path="/contact" element={<Contact />}></Route>
          <Route  path="/projects" element={<Projects />}></Route>
          <Route  path="/newproject" element={<NewProject />}></Route>
          <Route path="/projects/:id" element={<Project/>}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
