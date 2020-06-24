import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

import TableOfContents from '../index'
import mockData from './mockData'

export default {
  title: 'components/TableOfContents'
}

export const empty = () => {
  const props = { tableOfContents: '' }
  return (
    <Provider theme={theme}>
      <TableOfContents {...props} />
    </Provider>
  )
}

export const withData = () => {
  const props = {
    tableOfContents: mockData.regular
  }
  return (
    <Provider theme={theme}>
      <TableOfContents {...props} />
    </Provider>
  )
}

export const withDataStripH1 = () => {
  const props = {
    tableOfContents: mockData.regular,
    stripH1: true
  }
  return (
    <Provider theme={theme}>
      <TableOfContents {...props} />
    </Provider>
  )
}

export const withTwoH1s = () => {
  const props = {
    tableOfContents: mockData.twoH1s
  }
  return (
    <Provider theme={theme}>
      <TableOfContents {...props} />
    </Provider>
  )
}

withData.story = { name: 'With Data' }
