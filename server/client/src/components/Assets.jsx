import React, { Component } from 'react';
import NavigationBar from './navbar-container/NavigationBar'
import "./Assets.css";

class Assets extends Component {
  render(){
    return(
      <div>
        <NavigationBar />
        <p className="container-assets"> Assets Page </p>
      </div>
    )
  }
}

export default Assets;
