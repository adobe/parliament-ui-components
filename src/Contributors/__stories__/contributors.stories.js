import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

import Contributors from '../index'

export default {
  title: 'components/Contributors'
}

export const oneCommitter = () => {
  const props = {
    committers: [
      'https://avatars3.githubusercontent.com/u/353180?s=460&u=0b019002d891c7a1eaa469c18574f4a7a1b6e4a5&v=4'
    ],
    date: 'May 20, 2020',
    gitUrl: ''
  }

  return (
    <Provider theme={theme}>
      <Contributors {...props} />
    </Provider>
  )
}

export const threeCommitter = () => {
  const props = {
    committers: [
      'https://avatars3.githubusercontent.com/u/353180?s=460&u=0b019002d891c7a1eaa469c18574f4a7a1b6e4a5&v=4',
      'https://avatars3.githubusercontent.com/u/125516?s=460&v=4',
      'https://avatars1.githubusercontent.com/u/25260?s=460&v=4'
    ],
    date: 'May 20, 2020',
    gitUrl: ''
  }

  return (
    <Provider theme='lightest'>
      <Contributors {...props} />
    </Provider>
  )
}

export const fiveCommitter = () => {
  const props = {
    committers: [
      'https://avatars3.githubusercontent.com/u/353180?s=460&u=0b019002d891c7a1eaa469c18574f4a7a1b6e4a5&v=4',
      'https://avatars3.githubusercontent.com/u/125516?s=460&v=4',
      'https://avatars1.githubusercontent.com/u/25260?s=460&v=4',
      'https://avatars3.githubusercontent.com/u/37266?s=460&v=4',
      'https://avatars3.githubusercontent.com/u/164498?s=460&v=4'
    ],
    date: 'May 20, 2020',
    gitUrl: ''
  }

  return (
    <Provider theme='lightest'>
      <Contributors {...props} />
    </Provider>
  )
}

export const dontShowSixCommitter = () => {
  const props = {
    committers: [
      'https://avatars3.githubusercontent.com/u/353180?s=460&u=0b019002d891c7a1eaa469c18574f4a7a1b6e4a5&v=4',
      'https://avatars3.githubusercontent.com/u/125516?s=460&v=4',
      'https://avatars1.githubusercontent.com/u/25260?s=460&v=4',
      'https://avatars3.githubusercontent.com/u/37266?s=460&v=4',
      'https://avatars3.githubusercontent.com/u/164498?s=460&v=4',
      'https://avatars1.githubusercontent.com/u/65071?s=460&u=98da53a69859351bf94928a7236681414e84f5f9&v=4'
    ],
    date: 'May 20, 2020',
    gitUrl: ''
  }

  return (
    <Provider theme='lightest'>
      <Contributors {...props} />
    </Provider>
  )
}
