import PropTypes from "prop-types"
import React from "react"
import { Navbar, NavbarBrand,NavbarToggler, Collapse, Nav, NavItem, Container } from "reactstrap"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [isOpen, toggle] = React.useState(false);
return(
  <header>
    <Container>
      <div class="header-address">
       <address>22 679 33 89 / 606-127-877
 Piekarnia Goszczyński ul. Rogowska 8, Warszawa</address>
      </div>
     <Navbar light expand="md">
       <Link to="/"> <img src="http://ss.valkea.com/wp-content/uploads/2018/11/piekarnia-goszczynski-logo-png-small.png"/></Link>
          <NavbarToggler onClick={() => isOpen(true)} />
          <Collapse isOpen={toggle} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Strona Główna</Link>
                <Link to="/about">O nas</Link>
                <Link to="/shops">Sklepy Firmowe</Link>
                <Link to="/offers">Oferta</Link>
                <Link to="/contact">Kontakt</Link>
              </NavItem> 
            </Nav>
          </Collapse>
        </Navbar>
        </Container>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
