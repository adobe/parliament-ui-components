import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Heading = require('@react/react-spectrum/Heading').default

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `#2f2c2c`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <Heading style={{ margin: 0 }}>
          <Link
            to='/'
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
