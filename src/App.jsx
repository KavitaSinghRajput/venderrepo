import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
     <Router>
      <Navbar /> 
         <Routes>
         <Route path="/" element={<Home />} />
        </Routes>
        <Footer/> 
    </Router>
    </>
  )
}

export default App