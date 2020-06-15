import React from 'react'

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
  return <Nav {...props} />
}

export const withData = () => {
  const props = {
    data: mockData,
    gitInfo: baseGitInfo,
    selected: 'test/path/test.md'
  }
  return <Nav {...props} />
}

withData.story = { name: 'With Data' }
