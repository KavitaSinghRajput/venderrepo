import React from 'react'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


import "./App.css"

import EventPopup from './components/EventPopup/EventPopup';

import AboutUs from './pages/AboutUs/About';

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/SignUp'
import VendorRegistration from './pages/VendorRegistration/VendorRegistration'
import MyBoard from './pages/MyBoard/MyBoard'
import Indore from './ArtistBooking/Indore/Indore'
import Bhopal from './ArtistBooking/Bhopal/Bhopal';
import Gwalior from './ArtistBooking/Gwalior/Gwalior';
import Jabalpur from './ArtistBooking/Jabalpur/Jabalpur';
import Ujjain from './ArtistBooking/Ujjain/Ujjain';
import Comedians from './ArtistBooking/Bhopal/Comedians';  
import ArtistDetail from './ArtistBooking/Bhopal/ArtistDetail';

import IndoreCity from './VenueBooking/IndoreCity/IndoreCity';
import BhopalCity from './VenueBooking/BhopalCity/BhopalCity';
 import JabalpurCity from './VenueBooking/JabalpurCity/JabalpurCity';
import GwaliorCity from './VenueBooking/GwaliorCity/GwaliorCity';
import UjjainCity from './VenueBooking/UjjainCity/UjjainCity';





import BasicDetail from './CreateArtistProfile/BasicDetail/BasicDetail'
import PrfoInfo from './CreateArtistProfile/PrfoInfo/PrfoInfo'
import AddInfo from './CreateArtistProfile/AddInfo/AddInfo'
import MediaUpload from './CreateArtistProfile/MediaUpload/MediaUpload'
import EditArtistProfile from './CreateArtistProfile/EditArtistProfile/EditArtistProfile'
import TopNavbar from './components/TopNavbar/TopNavbar'
import SocialSidebar from './components/SocialSidebar/SocialSidebar'
import ContactWidget from './components/ContactWidget/ContactWidget'
import SearchArtistButton from './components/SearchArtistButton/SearchArtistButton'
import ScrollUpBar from './components/ScrollUpBar/ScrollUpBar'
import Services from './pages/Services/Services';
import Eventrental from './pages/Event Rental/Eventrental';
import EventPlanner from './pages/Event Planner/Eventplanner';
import ContactUs from './pages/Contact Us/ContactUs';


function App() {
  return (
     <>
     <Router>  
     <TopNavbar />    
      <Navbar />     
      <SocialSidebar />
      <ContactWidget />
      <SearchArtistButton />
      <ScrollUpBar />
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Services" element={<Services/>}/>
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />

         <Route path="/ContactUs" element={<ContactUs/>}/>
         <Route path="/Eventrental" element={<Eventrental/>}/>
         <Route path="/EventPlanner" element={<EventPlanner/>}/>

       
         <Route path="/Registration" element={<VendorRegistration />} />
         <Route path="/MyBoard" element={<MyBoard />} />
         <Route path="/Indore" element={<Indore />} />
         <Route path="/Bhopal" element={<Bhopal/>}/>
         <Route path="/Gwalior" element={<Gwalior/>}/>
         <Route path="/Jabalpur" element={<Jabalpur/>}/>
         <Route path="/Ujjain" element={<Ujjain/>}/>

         <Route path="/Comedians" element={<Comedians/>}/>
         <Route path="/ArtistDetail" element={<ArtistDetail/>}/>
        
         <Route path="/IndoreCity" element={<IndoreCity/>}/>
         <Route path="/BhopalCity" element={<BhopalCity/>}/>
         <Route path="/GwaliorCity" element={<GwaliorCity/>}/>
         <Route path="/JabalpurCity" element={<JabalpurCity/>}/> 
         <Route path="/UjjainCity" element={<UjjainCity/>}/>  
         <Route path="/EventPopup" element={<EventPopup/>}/>

         
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