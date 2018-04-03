import React, { Component } from 'react';
import './navbar-container/NavigationBar.css';
import NavigationBar from './navbar-container/NavigationBar';
import {Link} from 'react-router-dom';
import '../styles/css/Welcome.css';

class Welcome extends Component{

  deleteUser(){
    const BASE_URL = '/api/users/delete/';
    const FETCH_URL = BASE_URL + this.props.match.params.displayName;

    fetch(FETCH_URL, {
      method:'DELETE'
    })
    .then(response => {if (response.ok)
     {return response.json()
    .then(json => {console.log(json);
      window.location.href='http://localhost:3000/home'
    })}})
    .catch(error => {return console.log(error)});
  }

  render(){
    return(
      <div>
        <NavigationBar />

          <div className="body-container">

            <div className="left-body-container">
              <h3>Welcome {this.props.match.params.firstName}!</h3>
            </div>

            <div className="right-body-container">
              <img alt= '' src={require('../profile-pic.png')}/>
              <Link to={
              '/profile/'+ this.props.match.params.displayName + '&' +
              this.props.match.params.firstName + '&' + this.props.match.params.lastName +
              '&' + this.props.match.params.email
            }> View Profile </Link>

            <div className="link">
              <Link to= {"/editProfile/"+ this.props.match.params.displayName + '&' +
                this.props.match.params.firstName + '&' + this.props.match.params.lastName +
                '&' + this.props.match.params.email}>
                Edit Profile
              </Link>
            </div>

            <div className="link">
              <Link to= {"/lists/" + this.props.match.params.displayName + '&' +
                this.props.match.params.firstName + '&' + this.props.match.params.lastName +
                '&' + this.props.match.params.email}>
                User Lists
              </Link>
            </div>

            <div>
              <button className="button-del" onClick={() => this.deleteUser()}> Delete Account </button>
            </div>

            </div>

        </div>
      </div>
    )
  }
}

export default Welcome;
