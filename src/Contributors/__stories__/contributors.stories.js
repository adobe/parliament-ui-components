/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
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
    <Provider theme={theme} colorScheme='light'>
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
    <Provider theme={theme} colorScheme='light'>
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
    <Provider theme={theme} colorScheme='light'>
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
    <Provider theme={theme} colorScheme='light'>
      <Contributors {...props} />
    </Provider>
  )
}
