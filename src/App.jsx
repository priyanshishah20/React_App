import React from 'react'
import Learning from './Learning'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import CourseDetails from './pages/CourseDetails'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/learning" element={<Learning/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/courses" element={<Product/>} />
        <Route path="/course/:id" element={<CourseDetails/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App