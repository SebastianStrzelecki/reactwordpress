import React,{ useState } from "react"
import { Navbar,NavbarToggler, Collapse, Nav, NavItem, Container } from "reactstrap"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faPhone,faMapMarker)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
return(
  <header>
    <Container>
      <div className="header-address">
        <div className="header">
       <address><FontAwesomeIcon icon="phone" />22 679 33 89 / 606-127-877
       <FontAwesomeIcon icon="map-marker" />Piekarnia Goszczyński ul. Rogowska 8, Warszawa</address>
       </div>
      </div>
     <Navbar light expand="md">
       <Link to="/"> <img src="http://ss.valkea.com/wp-content/uploads/2018/11/piekarnia-goszczynski-logo-png-small.png" alt="logo"/></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
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

export default Header
