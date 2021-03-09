import { defaultTheme, Provider as RSProvider } from "@adobe/react-spectrum"

export const Provider = ({ children, ...props }) => (
  <RSProvider
    theme={defaultTheme}
    colorScheme="light"
    scale="medium"
  >
    <div
      className='spectrum spectrum--light spectrum--medium'
      dir='ltr'
      {...props}
    >
      {children}
    </div>
  </RSProvider>
  )