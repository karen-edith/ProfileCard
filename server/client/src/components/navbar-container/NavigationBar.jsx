import React, { Component } from 'react';
import { DropdownButton, Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class NavigationBar extends Component{

  render(){

    return(
    <Navbar>
      <Nav pullRight>
        <LinkContainer to="/home">
          <NavItem> HOME </NavItem>
        </LinkContainer>

        <LinkContainer to="/contact">
          <NavItem> CONTACT </NavItem>
        </LinkContainer>

        <NavDropdown id="ddbtn" className="ddItem" title="USERNAME">
          <LinkContainer to="/assets" activeClassName="none">
            <MenuItem eventKey = "1"> Assets </MenuItem>
          </LinkContainer>

          <LinkContainer to="/home" activeClassName="none">
            <MenuItem eventKey = "2"> Profile </MenuItem>
          </LinkContainer>

          <ButtonGroup justified>
          <DropdownButton id = "test" bsSize ="sm" title="Become a Partner">
            <LinkContainer to="/partnerLink1" activeClassName="none">
              <MenuItem eventKey="3"> Dropdown link 1 </MenuItem>
            </LinkContainer>

            <LinkContainer to="/partnerLink2" activeClassName="none">
              <MenuItem eventKey="3"> Dropdown link 2 </MenuItem>
            </LinkContainer>
          </DropdownButton>
        </ButtonGroup>

          <MenuItem eventKey = "5" divider/>
          <MenuItem eventKey = "6" href="#"> Sign Out </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
  }
}

export default NavigationBar;
