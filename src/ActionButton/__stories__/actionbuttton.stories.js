import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'
// import LIGHT from '../../Themes'

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

  console.log(theme)

  return (
    <Provider theme={theme} colorScheme='light'>
      <ActionButton {...props} />
    </Provider>
  )
}
