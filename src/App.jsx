import { useState } from 'react'
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
    <div className="App">
           <Router>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/services' element={<Services />} />
               <Route path='/contact' element={<Contact />} />
            </Routes>
           </Router>
           
    </div>

    </>
  )
}

export default App
