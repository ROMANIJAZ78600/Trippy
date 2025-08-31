import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import night from "../assets/night.jpg"
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

function About() {
  return (
    <>
      <Navbar />
      <Hero
       cName="hero-mid"
       heroImg={night}
       title="About"
       url="/about"
        />
     <AboutUs />
        <Footer />
    </>
  )
}

export default About
