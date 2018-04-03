import React, { Component } from 'react';
import './navbar-container/NavigationBar.css';
import NavigationBar from './navbar-container/NavigationBar';
import "./partnerLink2.css";

class partnerLink2 extends Component {
  render(){
    return(
      <div>
        <NavigationBar />
        <p className="container-partnerLink2"> Link 2 Page </p>
      </div>
    )
  }
}

export default partnerLink2;
