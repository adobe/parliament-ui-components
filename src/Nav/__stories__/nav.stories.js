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
    <Provider theme={theme} colorScheme='light'>
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
    <Provider theme={theme} colorScheme='light'>
      <Nav {...props} />
    </Provider>
  )
}

withData.story = { name: 'With Data' }
