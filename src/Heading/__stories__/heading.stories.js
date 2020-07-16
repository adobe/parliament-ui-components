/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
} from '../index'

const Wrapper = (storyFn) => {
  return (
    <Provider theme={theme} colorScheme='light'>
      {storyFn()}
    </Provider>
  )
}

export default {
  title: 'components/Heading',
  decorators: [Wrapper]
}

export const heading1 = () => <Heading1>Heading 1</Heading1>

export const heading2 = () => <Heading2>Heading 2</Heading2>

export const heading3 = () => <Heading3>Heading 3</Heading3>

export const heading4 = () => <Heading4>Heading 4</Heading4>

export const heading5 = () => <Heading5>Heading 5</Heading5>

export const heading6 = () => <Heading6>Heading 6</Heading6>
