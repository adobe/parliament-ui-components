import React from 'react'
import { defaultTheme, Provider as RSProvider } from '@adobe/react-spectrum'

export const Provider = ({
  colorScheme = 'light',
  scale = 'medium',
  children,
  ...props
}) => (
  <RSProvider theme={defaultTheme} colorScheme={colorScheme} scale={scale}>
    <div
      className={`spectrum spectrum--${colorScheme} spectrum--${scale}`}
      dir='ltr'
      {...props}
    >
      {children}
    </div>
  </RSProvider>
)
