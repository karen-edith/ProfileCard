import React, { Component } from 'react';
import {FormGroup, FormControl, Button, Glyphicon, InputGroup} from 'react-bootstrap';
import '../styles/css/newAccount.css';
import './navbar-container/NavigationBar.css';
import NavigationBar from './navbar-container/NavigationBar'

class newAccount extends Component {

  constructor (props){
    super(props);
    this.state = {
      displayName:'',
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      conPassword:'',
      userID:''
    }
  }

  createNewUser(){
    const BASE_URL = 'api/users/post/';
    const FETCH_URL = BASE_URL + this.state.displayName + '&' + this.state.firstName
    + '&' + this.state.lastName + '&' + this.state.email + '&' + this.state.password;

    fetch(FETCH_URL, {
      method:'POST'
    })
    .then(response => {if (response.ok)
     {return response.json()
    .then(json => {
      window.location.href = 'http://localhost:3000/welcome/' + json.displayName + '&' + json.firstName + '&' + json.lastName
      + '&' + json.email
    })}})
    .catch(error => {return console.log(error)});
  }

  valStateDisplayName(){
    const lengthDN = this.state.displayName.length;
    let val = lengthDN === 0 ? null : (lengthDN < 10 ? 'error':
    (lengthDN >= 10 ? 'success':'') );
    return val
  }

  valStateEmail(){
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let val = this.state.email === '' ? null:( re.test(this.state.email) ?
    'success': 'error' );
    return val;
  }

  valStatePassword(){
    const npword = this.state.password;
    const cnpword = this.state.conPassword;
   let val = ((npword === '') || (cnpword === '')) ? null : (
     ((npword !== cnpword)&& (npword !== '') && (cnpword !== '')) ? 'error' :
     (((npword === cnpword) && (npword !== '') && (cnpword !== '')) ? 'success': '')
   );
   return val;
  }

  cancelChanges(){
    this.setState({
      displayName: '',
      email:'',
      firstName:'',
      lastName:'',
      password:'',
      conPassword:''
    });
  }

  render() {

    return(

      <div className="app-container">

        <div className="app-container-nav">
          <NavigationBar />
        </div>

        <div className="form-img-container">

        <div className="app-container-profile">
          <div className="app-container-profile-div">
            <div className="app-container-profile-img">
              <img alt=""/>
            </div>
            <div className="app-container-profile-btn">
              <label className="btn btn-default pcolor">
                <input type="file" id = "test" className="hides"/><Glyphicon glyph = "circle-arrow-up"> </Glyphicon> Upload Image
              </label>
            </div>
          </div>
        </div>

        <div className="app-container-form">
          <div className="app-container-form-title">
            <h4> Create Account </h4>
          </div>

          <div className="app-container-form-boxes">
            <form>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className='addon-btn-color'>
                  <Glyphicon glyph="user" className="usr"></Glyphicon>
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  placeholder ="Display Name"
                  className = "app-container-input-box"
                  value={this.state.displayName}
                  onChange={event => {this.setState({displayName:event.target.value})}}
                />
              </InputGroup>
              <div className="app-container-form-valCheck">
                {
                  (this.valStateDisplayName() === "error") ?
                  <div> Display Name must contain 10 characters!</div>
                  : <div> </div>
                }
              </div>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className='addon-btn-color'>
                  <Glyphicon glyph="user" className="usr"></Glyphicon>
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  placeholder ="First Name"
                  className = "app-container-input-box"
                  value={this.state.firstName}
                  onChange={event => {this.setState({firstName:event.target.value})}}
                />
              </InputGroup>
              <div className="app-container-form-valCheck"> </div>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className='addon-btn-color'>
                  <Glyphicon glyph="user" className="usr"></Glyphicon>
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  placeholder ="Last Name"
                  className = "app-container-input-box"
                  value={this.state.lastName}
                  onChange={event => {this.setState({lastName:event.target.value})}}
                />
              </InputGroup>
              <div className="app-container-form-valCheck"> </div>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className='addon-btn-color'>
                  <Glyphicon glyph="envelope" className="usr"></Glyphicon>
                </InputGroup.Addon>
                <FormControl
                  type = "text"
                  placeholder= "Email Address"
                  className = "app-container-input-box"
                  value={this.state.email}
                  onChange={event => {this.setState({email:event.target.value})}}
                />
              </InputGroup>
              <div className="app-container-form-valCheck">
                {
                  (this.valStateEmail() === "error") ?
                  <div> Email is not valid!</div>
                  : <div> </div>
                }
              </div>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className='addon-btn-color'>
                  <Glyphicon glyph="lock" className="usr"></Glyphicon>
                </InputGroup.Addon>
                <FormControl
                  type = "password"
                  placeholder ="Enter Password"
                  className = "app-container-input-box"
                  value={this.state.password}
                  onChange={event => {this.setState({password:event.target.value})}}
                />
                <FormControl.Feedback />
              </InputGroup>
              <div className="app-container-form-valCheck"></div>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon className='addon-btn-color'>
                  <Glyphicon glyph="lock" className="usr"></Glyphicon>
                </InputGroup.Addon>
                <FormControl
                  type = "password"
                  placeholder ="Confirm Password"
                  className = "app-container-input-box"
                  value={this.state.conPassword}
                  onChange={event => {this.setState({conPassword:event.target.value})}}
                />
              </InputGroup>
              <div className="app-container-form-valCheck">
                {
                  (this.valStatePassword() === "error") ?
                  <div> passwords do not match!</div>
                  : <div> </div>
                }
              </div>
            </FormGroup>

            <div className="app-container-form-buttons">
                <Button
                  bsSize="small"
                  onClick={() => this.cancelChanges()}
                  className = "purple-background"
                >
                  CLEAR
                </Button>

                <Button
                  className="purple-background" bsSize="small"
                  onClick={() => this.createNewUser()}
                >
                  SUBMIT
                </Button>
            </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default newAccount;
