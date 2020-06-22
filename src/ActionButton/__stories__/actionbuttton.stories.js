import React from 'react'

import Provider from '@react/react-spectrum/Provider'

import ActionButton from '../index'

const ChevronRight = require('@react/react-spectrum/Icon/ChevronRight').default

export default {
  title: 'components/ActionButton'
}

export const actionbuttons = () => {
  const props = {
    label: 'stable',
    url: '/path/to/file',
    icon: <ChevronRight />
  }

  return (
    <Provider theme='lightest'>
      <ActionButton {...props} />
    </Provider>
  )
}
