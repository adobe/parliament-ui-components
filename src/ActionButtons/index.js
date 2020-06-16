import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Heading = require('@react/react-spectrum/Heading').default
const Link = require('@react/react-spectrum/Link').default

const ActionButtons = ({ gitUrl, filePath, branch }) => {
  return (
    <Fragment>
      <Heading variant='subtitle3'>Improve this page</Heading>
      <Link
        style={{ display: 'block' }}
        href={`${gitUrl}/edit/${branch}/${filePath}`}
      >
        Edit this page
      </Link>
      <Link
        style={{ display: 'block' }}
        href={`${gitUrl}/issues/new?body=Issue%20in%20${filePath}`}
      >
        Log an issue
      </Link>
    </Fragment>
  )
}

ActionButtons.propTypes = {
  branch: PropTypes.string,
  filePath: PropTypes.string,
  gitUrl: PropTypes.string
}

ActionButtons.defaultProps = {
  branch: '',
  filePath: '',
  gitUrl: ''
}

export default ActionButtons
