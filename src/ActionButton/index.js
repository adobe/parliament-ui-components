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

// import { Text } from '@react-spectrum/text'
import '@spectrum-css/button'
// import '@spectrum-css/typography'

const ActionButton = ({ label, url, icon }) => {
  return (
    <button
      className='spectrum-ActionButton spectrum-ActionButton--quiet'
      onClick={() => {
        document.location.href = url
      }}
    >
      {icon}
      <span
        className='spectrum-ActionButton-label'
        css={css`
          padding-left: var(
            --spectrum-actionbutton-icon-padding-x,
            var(--spectrum-global-dimension-size-85)
          );
          padding-right: calc(
            var(
                --spectrum-actionbutton-text-padding-x,
                var(--spectrum-global-dimension-size-150)
              ) -
              var(
                --spectrum-actionbutton-icon-padding-x,
                var(--spectrum-global-dimension-size-85)
              )
          );
        `}
      >
        {label}
      </span>
    </button>
  )
}

ActionButton.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string
}

ActionButton.defaultProps = {
  label: '',
  url: ''
}

export default ActionButton
