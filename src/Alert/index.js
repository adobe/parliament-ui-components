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

import Info from '@spectrum-icons/workflow/Info'
import Help from '@spectrum-icons/workflow/Help'
import AlertIcon from '@spectrum-icons/workflow/Alert'

import '@spectrum-css/alert'

const Alert = ({ header, variant, children }) => {
  let variantClassName = 'spectrum-Alert--info'
  let icon = <Info />
  switch (variant) {
    case 'help':
      variantClassName = 'spectrum-Alert--help'
      icon = <Help />
      break
    case 'error':
      variantClassName = 'spectrum-Alert--error'
      icon = <AlertIcon />
      break
    case 'warning':
      variantClassName = 'spectrum-Alert--warning'
      icon = <AlertIcon />
      break
    case 'info':
    default:
      variantClassName = 'spectrum-Alert--info'
      icon = <Info />
      break
  }
  return (
    <div className={`spectrum-Alert ${variantClassName}`}>
      <div className='spectrum-Icon spectrum-UIIcon-InfoLarge spectrum-Alert-icon'>
        {icon}
      </div>
      <div className='spectrum-Alert-header'>{header}</div>
      <div className='spectrum-Alert-content'>{children}</div>
    </div>
  )
}

export default Alert
