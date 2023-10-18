import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
 <div className="nav1">
 <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><i className="fa-solid fa-leaf fa-2xl leaf"></i>  ORGANIC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-5 mb-lg-0">
        <li className="nav-item mx-3">
          <Link className="nav-link active " aria-current="page" to="./Home ">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/Contact_us">Contact Us</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/Order">Order Now</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/Signin">Sign in</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </div>
   </>
  )
}

export default Navbar
