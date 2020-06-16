import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ActionButton from '../ActionButton'

const Bug = require('@react/react-spectrum/Icon/Bug').default
const Edit = require('@react/react-spectrum/Icon/Edit').default

const ActionButtons = ({ gitUrl, filePath, branch }) => {
  return (
    <Fragment>
      <ActionButton
        label='Edit this page'
        url={`${gitUrl}/edit/${branch}/${filePath}`}
        icon={<Edit />}
      />
      <ActionButton
        label='Log an issue'
        url={`${gitUrl}/issues/new?body=Issue%20in%20${filePath}`}
        icon={<Bug />}
      />
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
