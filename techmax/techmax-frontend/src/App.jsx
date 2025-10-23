import DescriptionSection from "./components/DescriptionSection/DescriptionSection"
import Features from "./components/Features"
import HeroSection from "./components/HeroSection/HeroSection"
import Navbar from "./components/NavBar/Navbar"
import WhoWeAre from "./components/WhoWeAre"

function App() {


  return (
    //Main wrapper
    <div className="h-screen bg-gray-900">
      <div className="h-screen">
        <Navbar />
        <HeroSection />
        <DescriptionSection />
        <WhoWeAre />
        <Features />


      </div>
    </div>
  )
}

export default App
