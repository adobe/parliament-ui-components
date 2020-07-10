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

import Bug from '@spectrum-icons/workflow/Bug'

import SearchField from '../index'

export default {
  title: 'components/SearchField'
}

export const SearchFieldDefault = () => {
  const props = {}

  return (
    <Provider theme={theme} colorScheme='light' scale='medium'>
      <SearchField {...props} />
    </Provider>
  )
}

export const SearchFieldLabelAndPlaceholder = () => {
  const props = {
    label: 'Search',
    placeholder: 'search field'
  }

  return (
    <Provider theme={theme} colorScheme='light' scale='medium'>
      <SearchField {...props} />
    </Provider>
  )
}

export const SearchFieldReplaceIcon = () => {
  const props = {
    icon: <Bug size='S' />
  }

  return (
    <Provider theme={theme} colorScheme='light' scale='medium'>
      <SearchField {...props} />
    </Provider>
  )
}

export const SearchFieldDisabled = () => {
  const props = {
    isDisabled: true
  }

  return (
    <Provider theme={theme} colorScheme='light' scale='medium'>
      <SearchField {...props} />
    </Provider>
  )
}

export const SearchFieldQuiet = () => {
  const props = {
    isQuiet: true
  }

  return (
    <Provider theme={theme} colorScheme='light' scale='medium'>
      <SearchField {...props} />
    </Provider>
  )
}

export const SearchFieldWithValue = () => {
  const props = {
    value: 'my value'
  }

  return (
    <Provider theme={theme} colorScheme='light' scale='medium'>
      <SearchField {...props} />
    </Provider>
  )
}
