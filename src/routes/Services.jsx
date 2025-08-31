import React from 'react'
import night from "../assets/1.jpg"
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'

function Services() {
  return (
    <>
      <Navbar />
      <Hero
       cName="hero-mid"
       heroImg={night}
       title="Services"
       url="/services"
        />
        <Trip />
                <Footer />
    </>
  )
}

export default Services
