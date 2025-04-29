import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/SignUp'
import VendorRegistration from './pages/VendorRegistration/VendorRegistration'
import MyBoard from './pages/MyBoard/MyBoard'
import Indore from './ArtistBooking/Indore/Indore'
import IndoreCity from './VenueBooking/IndoreCity/IndoreCity'

import BasicDetail from './CreateArtistProfile/BasicDetail/BasicDetail'
import PrfoInfo from './CreateArtistProfile/PrfoInfo/PrfoInfo'
import AddInfo from './CreateArtistProfile/AddInfo/AddInfo'
import MediaUpload from './CreateArtistProfile/MediaUpload/MediaUpload'
import EditArtistProfile from './CreateArtistProfile/EditArtistProfile/EditArtistProfile'
function App() {
  return (
    <>
     <Router>
      <Navbar />     
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/Registration" element={<VendorRegistration />} />
         <Route path="/MyBoard" element={<MyBoard />} />
         <Route path="/Indore" element={<Indore />} />
         <Route path="/IndoreCity" element={<IndoreCity/>}/>
         
         <Route path="/BasicDetail" element={<BasicDetail />} />
         <Route path="/PrfoInfo" element={<PrfoInfo/>} />
          <Route path="/AddInfo" element={<AddInfo/>} />
         <Route path="/MediaUpload" element={<MediaUpload/>} /> 
         <Route path="/EditArtistProfile" element={<EditArtistProfile/>} /> 
     
        </Routes>
        <Footer/> 
    </Router>
    </>
  )
}

export default App