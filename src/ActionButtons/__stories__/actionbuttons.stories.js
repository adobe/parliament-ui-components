import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

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
    <Provider theme={theme}>
      <ActionButtons {...props} />
    </Provider>
  )
}
