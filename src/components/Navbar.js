import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {Authcontext} from '../context/AuthContext.js'
const Navbar = () => {
  const {isLogin} = useContext(Authcontext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          {!isLogin && <NavLink className="nav-link" aria-current="page" to="/signUp">Sign Up</NavLink>}
          {isLogin && <NavLink className="nav-link" aria-current="page" to="/profile">Profile</NavLink>}
          
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;



