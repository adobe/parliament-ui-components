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

import OpenApi from '../index'
import spec2 from './openapi2'
import spec3 from './openapi3'

const Wrapper = (storyFn) => {
  return (
    <Provider theme={theme} colorScheme='light'>
      {storyFn()}
    </Provider>
  )
}

export default {
  title: 'components/OpenApi',
  decorators: [Wrapper]
}

export const OpenApi2 = () => {
  const props = {
    spec: spec2
  }

  return <OpenApi {...props} />
}

export const OpenApi3 = () => {
  const props = {
    spec: spec3
  }

  return <OpenApi {...props} />
}
