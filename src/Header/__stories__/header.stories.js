import React from 'react'

import Header from '../index'

export default {
  title: 'components/Header'
}

export const header = () => {
  const props = {
    siteTitle: 'My Documentation Site'
  }

  return <Header {...props} />
}
