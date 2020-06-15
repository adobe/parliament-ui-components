import React from 'react'

import Feedback from '../index'

export default {
  title: 'components/Feedback'
}

export const feedback = () => {
  const props = {
    branch: 'stable',
    filePath: '/path/to/file',
    gitUrl: 'github.url'
  }

  return <Feedback {...props} />
}
