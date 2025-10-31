import Navbar from "./componenet/Navbar";
import Hero from "./componenet/Hero";
import About from "./componenet/About";
import Projects from "./componenet/Projects";
import Contact from "./componenet/Contact";
import Footer from "./componenet/Footer";
// import Skills from "./componenet/Skills";
import Experience from "./componenet/Experience";
import Particles from "./componenet/Particles";

function App() {
  return (
    <div className="relative min-h-screen"> {/* Use min-h-screen to ensure the container is always at least the height of the viewport */}
      <Particles />

      <div className='max-w-7xl mx-auto relative z-10'>
        <Navbar />
        <Hero/>
        <About />
        {/* <Skills/> */}
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;