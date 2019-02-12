import React, { Component } from 'react';
import './css/sb-admin-2.css';
import './App.css';

// Component
import Menuizq from './comp/Menuizq';
import Content from './comp/Content';
// import Footer from './comp/Footer';
class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Menuizq />
        <Content />
      </div>
    );
  }
}

export default App;
