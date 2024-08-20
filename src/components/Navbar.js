import React from 'react';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Sigortam.net Logo" width="120" />
        </a>
        <button className="btn btn-primary">Giriş Yap</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
