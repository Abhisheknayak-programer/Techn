import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
    <NavLink className="navbar-brand" to="/">Technical Abhishek</NavLink>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
   
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
       <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;