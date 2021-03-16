import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from "./images/logo.png"


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <>

<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <a className="navbar-brand" href="#">

      <img src={logo} />


  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/movies">Movies <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/tv">Tv <span className="sr-only">(current)</span></NavLink>
      </li>


      {/* <li className="nav-item active">
        <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li> */}
      
    </ul>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/login">login <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/register">register <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/logout">logout <span className="sr-only">(current)</span></NavLink>
      </li>
    
      </ul>
    
  </div>
</nav>


            </>
         );
    }
}
 
export default Navbar;