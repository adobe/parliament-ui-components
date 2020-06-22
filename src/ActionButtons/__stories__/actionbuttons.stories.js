import React from 'react'

import Provider from '@react/react-spectrum/Provider'

import ActionButtons from '../index'

export default {
  title: 'components/ActionButtons'
}

export const actionbuttons = () => {
  const props = {
    branch: 'stable',
    filePath: '/path/to/file',
    gitUrl: 'github.url'
  }

  return (
    <Provider theme='lightest'>
      <ActionButtons {...props} />
    </Provider>
  )
}
