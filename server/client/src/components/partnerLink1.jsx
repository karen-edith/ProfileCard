import React, { Component } from 'react';
import './navbar-container/NavigationBar.css';
import NavigationBar from './navbar-container/NavigationBar';
import "./partnerLink1.css";

class partnerLink1 extends Component {
  render(){
    return(
      <div>
        <NavigationBar />
        <p className="container-partnerLink1"> Link 1 page </p>
      </div>
    )
  }
}

export default partnerLink1;
