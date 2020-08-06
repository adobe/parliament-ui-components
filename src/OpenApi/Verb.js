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
import classNames from 'classnames'

import '@spectrum-css/label'

const Verb = ({ label = 'get' }) => {
  return (
    <span
      className={classNames([
        'spectrum-Label',
        { 'spectrum-Label--blue': label === 'get' },
        { 'spectrum-Label--seafoam': label === 'patch' },
        { 'spectrum-Label--orange': label === 'put' },
        { 'spectrum-Label--green': label === 'post' },
        { 'spectrum-Label--fuchsia': label === 'head' },
        { 'spectrum-Label--red': label === 'delete' }
      ])}
      css={css`
        margin-right: var(
          --spectrum-global-dimension-size-100,
          var(--spectrum-alias-size-100)
        );
      `}
    >
      {label}
    </span>
  )
}

Verb.propTypes = {
  label: PropTypes.string
}

export default Verb
