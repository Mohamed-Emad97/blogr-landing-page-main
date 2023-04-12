import React from 'react';
import Logo from "../../assets/images/logo.svg";

export default function Navbar() {

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('#header');
    const threshold = 100;
  
    if (window.scrollY >= threshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  return (
    <>
      <header id='header' className="fixed-top w-100">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Logo" className="w-75" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Product
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Main Products</a></li>
                    <li><a className="dropdown-item" href="#">Our Products Lines</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Our Partners</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Company
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">ABout Us</a></li>
                    <li><a className="dropdown-item" href="#">Our Message</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Best Employees</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contact
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Contact</a></li>
                    <li><a className="dropdown-item" href="#">Newsletter</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Linkedin</a></li>
                  </ul>
                </li>
              </ul>
              <div className="btns d-flex align-items-center flex-lg-row flex-md-column flex-column flex-sm-column gap-2 p-1">
                <a href="#" className="btn btnMain px-2 rounded-pill p-2">Login</a>
                <a href="#" className="btn btnSec px-2 rounded-pill p-2">Sign Up</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
