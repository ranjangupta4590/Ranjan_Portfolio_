import About from "./components/About";
// import Card from "./components/Card";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SideNavbar from "./components/SideNavbar";
import Skills from "./components/Skills";
import Startup from "./components/Startup";
import Certificate from "./components/Certificate";
// import './App.css'

function App() {

  return (

    <div className=" ">
      <SideNavbar/>
      <Navbar />
    <div className="">
      <Home />
      <About />
      {/* <Card/> */}
      <Startup />
      <Skills />
      <Projects/>
      <Certificate />
      <Contact />
      <Footer />
    </div>
    </div>

  )
}

export default App
