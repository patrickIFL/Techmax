import DescriptionSection from "./components/DescriptionSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
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


      </div>
    </div>
  )
}

export default App
