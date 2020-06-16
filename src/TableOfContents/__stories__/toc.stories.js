import React from 'react'

import TableOfContents from '../index'
import mockData from './mockData'

export default {
  title: 'components/TableOfContents'
}

export const empty = () => {
  const props = { tableOfContents: '' }
  return <TableOfContents {...props} />
}

export const withData = () => {
  const props = {
    tableOfContents: mockData
  }
  return <TableOfContents {...props} />
}

withData.story = { name: 'With Data' }
