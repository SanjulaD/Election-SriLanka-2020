import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { withRouter , Link } from 'react-router-dom';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">2020 Sri Lankan parliamentary election</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/parties">
                <NavLink>Political Parties</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/candidates">
                <NavLink>Candidates</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/SanjulaD">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(NavbarComponent);