import React, { Component } from 'react';
import '../css/header.css';

// Component
class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>
        <div>
          <h2>Torres Cataliña</h2>
          <p>Paquete: <u>Lead Scoring</u></p>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-envelope fa-fw"></i>
            </a>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-bell fa-fw"></i>
            </a>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-cog fa-fw"></i>
            </a>
          </li>
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link" href="#" id="userDropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Hola, Carlos Ruiz</span>
              <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;