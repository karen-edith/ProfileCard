import React, { Component } from 'react';
import { DropdownButton, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
class NavigationBarTest extends Component{

  render(){

    return(
    <Navbar className="white-background">
      <Nav pullRight>
        <NavItem onClick={() => this.props.history.push('/home')}> HOME </NavItem>
        <NavItem onClick={() => this.props.history.push('/contact')}> CONTACT </NavItem>
        <NavDropdown id="" className="ddItem" title="USERNAME">
          <MenuItem eventKey = "1" onClick={() => this.props.history.push('/assets')}> Assets </MenuItem>
          <MenuItem eventKey = "2" onClick={() => this.props.history.push('/profile')}> Profile </MenuItem>
          <DropdownButton id = "" className ="ddbtn" title="Become a Partner">
            <MenuItem eventKey="3" onClick={() => this.props.history.push('/partnerLink1')}>Dropdown link 1</MenuItem>
            <MenuItem eventKey="4" onClick={() => this.props.history.push('/partnerLink2')}>Dropdown link 2</MenuItem>
          </DropdownButton>
          <MenuItem eventKey = "5" divider/>
          <MenuItem eventKey = "6" href="#"> Sign Out </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
  }
}

export default NavigationBarTest;
