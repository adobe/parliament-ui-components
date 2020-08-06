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

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import '@spectrum-css/label'

const Verb = ({ label = 'get' }) => {
  let color = '--spectrum-global-color-blue-400'
  switch (label) {
    case 'patch':
      color = '--spectrum-global-color-seafoam-400'
      break
    case 'put':
      color = '--spectrum-global-color-orange-400'
      break
    case 'post':
      color = '--spectrum-global-color-green-400'
      break
    case 'head':
      color = '--spectrum-global-color-fuchsia-400'
      break
    case 'delete':
      color = '--spectrum-global-color-red-400'
      break
    case 'get':
    default:
      color = '--spectrum-global-color-blue-400'
      break
  }

  return (
    <strong
      css={css`
        text-transform: uppercase;
        border: 2px solid var(${color});
        border-radius: var(--spectrum-global-dimension-size-50);
        color: var(${color});
        font-size: var(--spectrum-global-dimension-size-125);
        margin-right: var(
          --spectrum-global-dimension-size-100,
          var(--spectrum-alias-size-100)
        );
        padding: var(--spectrum-global-dimension-size-50)
          var(--spectrum-global-dimension-size-125);
      `}
    >
      {label}
    </strong>
  )
}

Verb.propTypes = {
  label: PropTypes.string
}

export default Verb
