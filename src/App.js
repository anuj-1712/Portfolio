import "./App.css";
import About from "./Components/About";
import Explorer from "./Components/Explorer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";

function App() {
  const openExplorer = () =>{
    document.getElementById("explorer").style.display = "flex"
  }

  const closeExplorer = () =>{
    document.getElementById("explorer").style.display ="none"
  }
  return (
    <>
    <Header />
    <Navbar openExplorer={openExplorer}/>
    <Explorer closeExplorer={closeExplorer}/>
    <Hero />
    <About />
    <Project />
    <Footer />
    </>
  );
}

export default App;
