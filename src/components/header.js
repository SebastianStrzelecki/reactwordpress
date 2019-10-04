import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
          <Link to="/">Strona Główna</Link>
          <Link to="/about">O nas</Link>
          <Link to="/shop">Sklepy Firmowe</Link>
          <Link to="/offers">Oferta</Link>
          <Link to="/contact">Kontakt</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
