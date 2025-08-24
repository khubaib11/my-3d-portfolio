import Navbar from "./componenet/Navbar"
import Hero from "./componenet/Hero"
import About from "./componenet/About"
import Projects from "./componenet/Projects"
import Contact from "./componenet/Contact"
import Footer from "./componenet/Footer"
import Experience from "./componenet/Experience"
function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto '>
        <Navbar />
        <Hero/>
        <About />
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
     
    </>
  )
}

export default App

