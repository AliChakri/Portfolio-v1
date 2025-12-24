import Starfield from "./Components/Hero/Starfield"
import SectionSeparator from "./Components/SectionSeparator"
import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import About from "./Pages/About"
import HeroSection from "./Pages/HeroSection"
import MissionControl from "./Pages/MissionControl"
import Projects from "./Pages/Projects"
import Stack from "./Pages/Stack"
import Techs from "./Pages/Techs"
import ClientReviews from "./Pages/Testimonials"

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900  ">
      <Header />

      {/* Hero Section with Starfield */}
    <HeroSection />

      <SectionSeparator />

      {/* Other sections */}
      <About />

      <SectionSeparator />

      <Projects />

      <SectionSeparator />
      
      <Techs />

      {/* <SectionSeparator />

      <ClientReviews /> */}

      <SectionSeparator />

      <MissionControl />
  

      <SectionSeparator />

      <Footer />

    </div>
  )
}

export default App
