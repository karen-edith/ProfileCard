import React, { Component } from 'react';
import './navbar-container/NavigationBar.css';
import NavigationBar from './navbar-container/NavigationBar';
import '../styles/css/Home.css';
import { Link } from 'react-router-dom';
import {FormGroup, FormControl, Button, InputGroup, Glyphicon} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayName:'',
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      login:''
    }
  }

  retrieveUser(){
    const BASE_URL = 'api/users/get/';
    const FETCH_URL = BASE_URL + this.state.displayName + '&' + this.state.password;

    fetch(FETCH_URL, {
      method:'GET'
    })
    .then(response => {if (response.ok)
     {return response.json()
    .then(json => {
      console.log(json);
      if(json === null){
        this.setState({login:'fail'})
      } else if ((json.displayName === this.state.displayName) && (json.password === this.state.password)){
        this.setState({
          firstName:json.firstName,
          lastName:json.lastName,
          email:json.email
        })
        this.setState({login:'pass'})
      } else {
        this.setState({login: 'fail'})
      }
    })}})
    .catch(error => {return console.log(error)});
  }

  render(){
    return(
      <div className="Home-Container">
        <NavigationBar />

        <div className="Home-Form-Container">

          <div className="Home-Form-Img-Container">
            <img src={require('../circle-user.png')} alt=""/>
          </div>

          <div className="Home-Form-Login-Welcome-Container">
            <em> Welcome, Please Log in </em>
          </div>

          <div className="Home-Form-Boxes-Container">
            <form>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className='addon-btn-color'>
                  <Glyphicon className="usr" glyph="user"></Glyphicon>
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  value = {this.state.displayName}
                  placeholder = "username"
                  onChange={event => this.setState({displayName:event.target.value})}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className='addon-btn-color'>
                  <Glyphicon className="usr" glyph = "lock"/>
                </InputGroup.Addon>
                <FormControl
                  type="password"
                  value = {this.state.password}
                  placeholder = "password"
                  onChange={event => this.setState({password:event.target.value})}
                />
            </InputGroup>
            </FormGroup>
            </form>

            <div className="sub-but">
              <Button className="btn-sub" onClick = {()=>this.retrieveUser()}> Submit </Button>
            </div>

            <div className="Home-Link-Container">
              <Link to="/NewAccount"> Create Account </Link>
            </div>
            <div className="Home-Link-Div-Container">
              {
                ((this.state.login === 'fail') || (this.state.login === null)) ? <div className="pword-error"> Password and/or Username do not match our records! </div> :
                ((this.state.login === 'pass') ? <div> <Redirect to={
                  '/welcome/' + this.state.displayName + '&' + this.state.firstName + '&' + this.state.lastName + '&' + this.state.email
                }/> </div> : <div> </div>)
              }
            </div>
          </div>

        </div>

        </div>
    )
  }
}

export default Home;
