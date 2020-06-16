import React from 'react'

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

  return <ActionButton {...props} />
}
