import React from 'react'
import Learning from './Learning'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/learning" element={<Learning/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App