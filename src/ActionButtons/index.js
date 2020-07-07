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
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ActionButton from '../ActionButton'

import Bug from '@spectrum-icons/workflow/Bug'
import Edit from '@spectrum-icons/workflow/Edit'

const ActionButtons = ({ gitUrl, filePath, branch }) => {
  return (
    <Fragment>
      <ActionButton
        label='Edit this page'
        onClick={() => {
          document.location.href = `${gitUrl}/edit/${branch}/${filePath}`
        }}
        icon={<Edit size='S' />}
      />
      <ActionButton
        label='Log an issue'
        onClick={() => {
          document.location.href = `${gitUrl}/issues/new?body=Issue%20in%20${filePath}`
        }}
        icon={<Bug size='S' />}
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
