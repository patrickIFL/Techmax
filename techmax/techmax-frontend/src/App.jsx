import Achievements from "./components/Achievements"
import DescriptionSection from "./components/DescriptionSection/DescriptionSection"
import Experience from "./components/Experience"
import Features from "./components/Features"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection/HeroSection"
import Navbar from "./components/NavBar/Navbar"
import WhoWeAre from "./components/WhoWeAre"
import Team from "./components/Team"
import Testimonies from "./components/Testimonies"
import Blogposts from "./components/Blogposts"

function App() {


  return (
    //Main wrapper
    <div className="h-screen bg-gray-900">
      <Navbar />

      <div className="h-screen">
        <HeroSection />
        <DescriptionSection />
        <WhoWeAre />
        <Experience />
        <Achievements />
        <Features />
        <Team />
        <Testimonies />
        <Blogposts />
        <Footer />


      </div>
    </div>
  )
}

export default App
