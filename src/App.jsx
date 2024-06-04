import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Features from "./Components/Features"
import Advantages from "./Components/Advantages"
import Testimonials from "./Components/Testimonials"

function App() {

  return (
    <>
      <Navbar />
      <div className="w-full h-[15vh]"></div>
      <Hero />
      <Features />
      <Advantages />
      <Testimonials />
    </>
  )
}

export default App
