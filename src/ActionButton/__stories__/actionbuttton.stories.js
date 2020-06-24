import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

import ActionButton from '../index'

import Bug from '@spectrum-icons/workflow/Bug'

export default {
  title: 'components/ActionButton'
}

export const actionbuttons = () => {
  const props = {
    label: 'stable',
    url: '/path/to/file',
    icon: <Bug />
  }

  return (
    <Provider theme={theme}>
      <ActionButton {...props} />
    </Provider>
  )
}
