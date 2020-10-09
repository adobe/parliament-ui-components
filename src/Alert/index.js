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

import Info from '@spectrum-icons/workflow/Info'
import Help from '@spectrum-icons/workflow/Help'
import AlertIcon from '@spectrum-icons/workflow/Alert'

import '@spectrum-css/alert'

const Alert = ({ variant, children, ...props }) => {
  const styles = {
    width: 'var(--spectrum-global-dimension-size-175)',
    height: 'var(--spectrum-global-dimension-size-175)',
    float: 'right'
  }
  let icon = <Info UNSAFE_style={styles} />
  switch (variant) {
    case 'help':
      icon = <Help UNSAFE_style={styles} />
      break
    case 'error':
      icon = <AlertIcon UNSAFE_style={styles} />
      break
    case 'warning':
      icon = <AlertIcon UNSAFE_style={styles} />
      break
    case 'info':
    default:
      break
  }
  return (
    <div className={`spectrum-Alert spectrum-Alert--${variant}`} {...props}>
      <div
        className='spectrum-Icon spectrum-UIIcon-InfoLarge spectrum-Alert-icon'
        css={css`
          display: inline;
          position: unset;
        `}
      >
        {icon}
      </div>
      <div className='spectrum-Alert-content' style={{ margin: '0' }}>
        {children}
      </div>
    </div>
  )
}

export { Alert }
