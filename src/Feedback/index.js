import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Heading = require('@react/react-spectrum/Heading').default
const Link = require('@react/react-spectrum/Link').default

const Feedback = ({ gitUrl }) => {
  return (
    <Fragment>
      <Heading variant='subtitle3'>Improve this page</Heading>
      <Link style={{ display: 'block' }} href={`${gitUrl}`}>
        Edit this page
      </Link>
      <Link style={{ display: 'block' }} href={`${gitUrl}/issues/new`}>
        Log an issue
      </Link>
    </Fragment>
  )
}

Feedback.propTypes = {
  gitUrl: PropTypes.string
}

Feedback.defaultProps = {
  gitUrl: ``
}

export default Feedback
