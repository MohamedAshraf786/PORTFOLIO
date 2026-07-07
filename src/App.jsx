import Header from "./components/header";
import Navbar from "./components/navbar";
import Body from "./components/body";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
function topic() {
  return(
    <div>
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
  </div>
);
}
export default topic;