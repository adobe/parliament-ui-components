import React from 'react'

import Provider from '@react/react-spectrum/Provider'

import Footer from '../index'

export default {
  title: 'components/Footer'
}

export const footer = () => {
  return (
    <Provider theme='lightest'>
      <Footer />
    </Provider>
  )
}
