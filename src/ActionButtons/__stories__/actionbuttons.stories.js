import React from 'react'

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

  return <ActionButtons {...props} />
}
