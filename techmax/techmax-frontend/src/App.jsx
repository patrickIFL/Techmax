import DescriptionSection from "./components/DescriptionSection/DescriptionSection"
import Features from "./components/Features"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection/HeroSection"
import Navbar from "./components/NavBar/Navbar"
import WhoWeAre from "./components/WhoWeAre"
import Team from "./Team"

function App() {


  return (
    //Main wrapper
    <div className="h-screen bg-gray-900">
        <Navbar />

      <div className="h-screen">
        <HeroSection />
        <DescriptionSection />
        <WhoWeAre />
        <Features />
        <Team />
        <Footer />


      </div>
    </div>
  )
}

export default App
