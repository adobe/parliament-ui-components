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

import { defaultTheme, Provider } from '@adobe/react-spectrum'

import Star from '@spectrum-icons/workflow/Star'

import SideNav from '../index'

const icon = <Star size='S' />

const Wrapper = (storyFn) => {
  return (
    <Provider theme={defaultTheme} colorScheme='light'>
      {storyFn()}
    </Provider>
  )
}

export default {
  title: 'components/SideNav',
  decorators: [Wrapper]
}

export const FlatItems = () => {
  const props = {
    items: [
      { name: 'Aardvark', path: 'aardvark' },
      { name: 'Kangaroo', path: 'kangaroo' },
      { name: 'Snake', path: 'snake' },
      { name: 'Hippo', path: 'hippo' }
    ],
    selectedKeys: ['Kangaroo'],
    disabledKeys: ['Snake']
  }
  return <SideNav {...props} />
}

export const FlatItemsWithIcon = () => {
  const props = {
    items: [
      { name: 'Aardvark', icon: icon },
      { name: 'Kangaroo', icon: icon },
      { name: 'Snake', icon: icon },
      { name: 'Hippo', icon: icon }
    ],
    selectedKeys: ['Kangaroo'],
    disabledKeys: ['Snake']
  }
  return <SideNav {...props} />
}

export const Multilevel = () => {
  const props = {
    items: [
      {
        name: 'Mammals',
        children: [
          { name: 'Aardvark' },
          { name: 'Kangaroo' },
          { name: 'Hippo' }
        ]
      },
      { name: 'Reptiles', children: [{ name: 'Snake' }] }
    ],
    selectedKeys: ['Kangaroo'],
    disabledKeys: ['Snake']
  }
  return <SideNav {...props} />
}
