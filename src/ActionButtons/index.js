/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
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
