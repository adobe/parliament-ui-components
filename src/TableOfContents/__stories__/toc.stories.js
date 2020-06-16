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
    tableOfContents: mockData.regular
  }
  return <TableOfContents {...props} />
}

export const withTwoH1s = () => {
  const props = {
    tableOfContents: mockData.twoH1s
  }
  return <TableOfContents {...props} />
}

withData.story = { name: 'With Data' }
