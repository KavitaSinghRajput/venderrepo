import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   
   
   
    <Link className="navbar-brand" to="/">
    <img src={logo} alt="Gnv logo" style={{height:"45px"}} />
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to='/' >About Us</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to='/' >Venue Booking</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to='/'  >Artist Booking</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to='/' >Event Rental</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to='/' >Event Planner</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to='/' >Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"   to='/' >Registration</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
