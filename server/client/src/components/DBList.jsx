import React, { Component } from 'react';
import './navbar-container/NavigationBar.css';
import NavigationBar from './navbar-container/NavigationBar';
import "../styles/css/DBList.css";
import { Table, Button } from 'react-bootstrap';

class List extends Component {

  constructor(props){
    super(props)
    this.state = {
      test:[]
    }
  }

  dblist(){
    const FETCH_URL = '/api/users/list/';
    fetch(FETCH_URL, {
      method:'GET'
    })
    .then(response => {if (response.ok)
     {return response.json()
    .then(json => {
      //console.log(json)
      json.map((usr) => {
        return this.setState({
          test: [...this.state.test, usr]
        })
      })

    })}})
    .catch(error => {return console.log(error)});
  }

handleClick(){
  window.location.href= 'http://localhost:3000/profile/'+ this.props.match.params.displayName + '&' +
                this.props.match.params.firstName + '&' + this.props.match.params.lastName +
                '&' + this.props.match.params.email
}

  render(){
    return(
      <div className="overall-container">
        <NavigationBar />
        <div className="instructions">
          <div className="instructions-container">
            <div className="instruction-0">
              <div className="instruction-1">
                <img alt ='' src={require('../profile-pic.png')}/>
              </div>
              <div className="instruction-2">
                <div></div>
                <b>{this.props.match.params.firstName}</b> to see a list of individuals also using this app,
                please click the userlist button!
                <div className="last-div"></div>
              </div>
            </div>
          </div>
          {
            this.state.test.length !== 0 ?
            (
              <div className = "info-table">
                <div> <h4> User List </h4></div>
              <Table striped bordered>
              <thead>
                <tr className = "info-table-row">
                  <th> Last Name </th>
                  <th> First Name </th>
                  <th> Display Name </th>
                  <th> Email Address</th>
                </tr>
              </thead>
              <tbody>
                {
                this.state.test.map((usr, index) =>{
                  return(
                          <tr className=" info-table-row" key={index}>
                            <th> {usr.lastName} </th>
                            <th> {usr.firstName} </th>
                            <th> {usr.displayName} </th>
                            <th> {usr.email} </th>
                          </tr>
                  )
                })
              }
              </tbody>
              </Table>
            </div>
            ): <div> </div>
          }

          <div className="list-button">
            <Button className="ul-btn" onClick={() => this.dblist()}> User List </Button>
            <Button className="ul-btn" onClick={() => this.handleClick()}> Back to Profile </Button>
          </div>

        </div>


      </div>
    )
  }
}

export default List;
