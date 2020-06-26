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
