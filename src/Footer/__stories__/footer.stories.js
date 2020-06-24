import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

import Footer from '../index'

export default {
  title: 'components/Footer'
}

export const footer = () => {
  return (
    <Provider theme={theme}>
      <Footer />
    </Provider>
  )
}
