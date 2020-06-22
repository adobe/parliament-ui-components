import React from 'react'

import Provider from '@react/react-spectrum/Provider'

import Header from '../index'

export default {
  title: 'components/Header'
}

export const header = () => {
  const props = {
    siteTitle: 'My Documentation Site'
  }

  return (
    <Provider theme='lightest'>
      <Header {...props} />
    </Provider>
  )
}
