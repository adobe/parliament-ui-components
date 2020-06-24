import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

import Nav from '../index'

import mockData from './mockData'

export default {
  title: 'components/Nav'
}

const baseGitInfo = {
  org: 'adobedocs',
  name: 'adobeio-events',
  branch: 'master'
}

export const empty = () => {
  const props = {
    data: [],
    gitInfo: baseGitInfo,
    selected: 'selected/path/index.md'
  }
  return (
    <Provider theme='lightest'>
      <Nav {...props} />
    </Provider>
  )
}

export const withData = () => {
  const props = {
    data: mockData,
    gitInfo: baseGitInfo,
    selected: 'test/path/test.md'
  }
  return (
    <Provider theme={theme}>
      <Nav {...props} />
    </Provider>
  )
}

withData.story = { name: 'With Data' }
