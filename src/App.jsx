import {Link, Route, Routes} from "react-router-dom";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Body from "./components/body";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return(
    <>
  <Header />
  <Navbar />

  <br/>
  <Body />
  <About />
  <br/><br/>
  <Skills />
  <Project />
  <br/><br/>
  <Contact />
  <br/><br/>  
  <Footer />
  
  </>
);
}
export default App;