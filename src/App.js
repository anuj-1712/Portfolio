
import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div style={{background:'linear-gradient(45deg, #0E2954, #0079FF)'}} id='home'>
    <Navbar />
    <Hero />
    </div>
    <About />
    <Skills />
    <Project />
    <Footer />
    </>
  );
}

export default App;
