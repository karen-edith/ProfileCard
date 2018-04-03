import React, { Component } from 'react';
import './navbar-container/NavigationBar.css';
import NavigationBar from './navbar-container/NavigationBar'
import "./Contact.css";

class Contact extends Component {
  render(){
    return(
      <div>
        <NavigationBar />
        <p className="container-contact"> Contact Page </p>
      </div>
    )
  }
}

export default Contact;
