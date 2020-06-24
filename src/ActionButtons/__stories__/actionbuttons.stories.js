import React from 'react'

import { Provider } from '@react-spectrum/provider'
import LIGHT from '../../Themes'

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
    <Provider theme={LIGHT} colorScheme='dark'>
      <ActionButtons {...props} />
    </Provider>
  )
}
