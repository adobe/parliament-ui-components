import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import ActionButton from '../ActionButton'

import Bug from '@spectrum-icons/workflow/Bug'
import Edit from '@spectrum-icons/workflow/Edit'

const Container = styled('div')`
  & > * {
    padding-right: 8px;
  }
  & > *:last-child {
    padding-right: 0px;
  }
`

const ActionButtons = ({ gitUrl, filePath, branch }) => {
  return (
    <Container>
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
    </Container>
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
