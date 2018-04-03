import React, { Component } from 'react';
import './navbar-container/NavigationBar.css';
import NavigationBar from './navbar-container/NavigationBar';
import "../styles/css/Profile.css";
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

class Profile extends Component {

  constructor(props){
    super(props)
    this.state = {
      test:[]
    }
  }

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
      <div className="overall-container">
        <NavigationBar />

        <div className="profile-pic-info-container">

          <div className="info-container">
            <div> <h3> {this.props.match.params.firstName} {this.props.match.params.lastName} </h3></div>
            <div className="info-icon"> <Glyphicon glyph ='user' className="user-icon"/> About </div>
            <div className="contact-info"> Profile Information</div>
            <div> <div className="info-box"> Username: </div> <div className="info-box2">{this.props.match.params.displayName} </div></div>
            <div> <div className="info-box"> Email: </div> <div className="info-box2"> {this.props.match.params.email}</div></div>
          </div>

          <div className="profile-pic-container">
            <div>
              <img alt ='' src={require('../profile-pic.png')}/>
            </div>

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

            <div className="link">
              <Link to= {"/welcome/" + this.props.match.params.displayName + '&' +
                this.props.match.params.firstName + '&' + this.props.match.params.lastName +
                '&' + this.props.match.params.email}>
                Welcome Page
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

export default Profile;
