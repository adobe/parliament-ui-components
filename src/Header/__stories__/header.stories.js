import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

import Header from '../index'

export default {
  title: 'components/Header'
}

export const header = () => {
  const props = {
    siteTitle: 'My Documentation Site'
  }

  return (
    <Provider theme={theme} colorScheme='light'>
      <Header {...props} />
    </Provider>
  )
}
