import React from 'react'

import '@spectrum-css/vars/dist/spectrum-global.css'
import '@spectrum-css/vars/dist/spectrum-medium.css'
import '@spectrum-css/vars/dist/spectrum-large.css'
import '@spectrum-css/vars/dist/spectrum-light.css'
import '@spectrum-css/typography'
import '@adobe/focus-ring-polyfill'

export const Provider = ({ children, ...props }) => (
  <div
    className='spectrum spectrum--light spectrum--medium'
    dir='ltr'
    {...props}
  >
    {children}
  </div>
)
