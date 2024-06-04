import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Features from "./Components/Features"
import Advantages from "./Components/Advantages"
import Testimonials from "./Components/Testimonials"
import FAQ from "./Components/FAQ"
import banner from "./assets/banner.svg"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <div className="w-full h-[15vh]"></div>
      <Hero />
      <Features />
      <Advantages />
      <Testimonials />
      <FAQ />
      <div className="w-full flex justify-center pb-10">
        <div className="w-[80%] p-4 flex justify-center relative">
        <div className="bg-gradient-to-b from-red-400 vai-gradient-to-t to-yellow-300 absolute rounded-full left-32 z-[-1000] shadow-custom md:hidden"></div>
          <img src={banner} alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
