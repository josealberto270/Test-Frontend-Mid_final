import React, { Component } from 'react';
import logomin from '../images/ico.png';
import logonom from '../images/logotipo_normal950.png';
import logoneg from '../images/logotipo_neg.png';
import '../css/menu.css';


class Menuizq extends Component {
  render() {
    return (
      <div className="Menuizq">
        <ul className="navbar-nav primary sidebar sidebar-dark accordion">
          <img src={logoneg} alt="logotipo" className="logoneg"/>
          <li className="nav-item">
            <a className="nav-link" >
              <i className="fas fa-fw fa-circle"></i>
              <span>Todos los prospctos</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              <i className="fas fa-fw fa-circle"></i>
              <span>Rendimiento de campaña</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              <i className="fas fa-fw fa-circle"></i>
              <span>Lead Scoring</span></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menuizq;
