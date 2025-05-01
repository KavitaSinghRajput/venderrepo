import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Gnv logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                VenueBooking
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/IndoreCity">IndoreCity</Link></li>
                <li><Link className="dropdown-item" to="#">BhopalCity</Link></li>
                <li><Link className="dropdown-item" to="#">UjjainCity</Link></li>
                <li><Link className="dropdown-item" to="#">JabalpurCity</Link></li>
                <li><Link className="dropdown-item" to="#">GwaliorCity</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                ArtistBooking
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Indore">Indore</Link></li>
                <li><Link className="dropdown-item" to="#">Bhopal</Link></li>
                <li><Link className="dropdown-item" to="#">Ujjain</Link></li>
                <li><Link className="dropdown-item" to="#">Jabalpur</Link></li>
                <li><Link className="dropdown-item" to="#">Gwalior</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/rental">Event Rental</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planner">Event Planner</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Account
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
                <li><Link className="dropdown-item" to="/Registration">Vendor Registration</Link></li>
                <li><Link className="dropdown-item" to="/MyBoard">MyDashboard</Link></li>
                <li><Link className="dropdown-item" to="/BasicDetail">CreateArtistProfile</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
