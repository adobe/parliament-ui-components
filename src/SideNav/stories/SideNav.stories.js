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
import Star from '@spectrum-icons/workflow/Star'
import { SideNav } from '../index'

const icon = <Star size='S' />

export default {
  title: 'components/SideNav'
}

export const FlatItems = () => {
  const props = {
    items: [
      { title: 'Aardvark', path: 'aardvark' },
      { title: 'Kangaroo', path: 'kangaroo' },
      { title: 'Snake', path: 'snake' },
      { title: 'Hippo', path: 'hippo' }
    ],
    selectedKeys: ['Kangaroo'],
    disabledKeys: ['Snake']
  }
  return <SideNav {...props} />
}

export const FlatItemsWithIcon = () => {
  const props = {
    items: [
      { title: 'Aardvark', icon: icon },
      { title: 'Kangaroo', icon: icon },
      { title: 'Snake', icon: icon },
      { title: 'Hippo', icon: icon }
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
        title: 'Mammals',
        children: [
          { title: 'Aardvark' },
          { title: 'Kangaroo' },
          { title: 'Hippo' }
        ]
      },
      { title: 'Reptiles', children: [{ title: 'Snake' }] }
    ],
    selectedKeys: ['Kangaroo'],
    disabledKeys: ['Snake']
  }
  return <SideNav {...props} />
}
