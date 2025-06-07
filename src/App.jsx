import React from 'react'
import Learning from './components/Learning'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import CourseDetails from './pages/CourseDetails'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'


const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/learning" element={<Learning/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/courses" element={<Product/>} />
        <Route path="/courses/:id" element={<CourseDetails/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App