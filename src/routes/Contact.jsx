import React from 'react'
import night from "../assets/2.jpg"
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
       cName="hero-mid"
       heroImg={night}
       title="Contact"
       url="/contact"
        />
        <ContactUs />
        <Footer />
    </>
  )
}

export default Contact
