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

import { Button } from '../index'

export default {
  title: 'components/Button'
}

export const PrimaryButton = () => {
  const props = {
    variant: 'primary'
  }

  return (
    <Provider theme={theme} colorScheme='light'>
      <Button {...props}>Primary Button</Button>
    </Provider>
  )
}

export const SecondaryButton = () => {
  const props = {
    variant: 'secondary'
  }

  return (
    <Provider theme={theme} colorScheme='light'>
      <Button {...props}>Secondary Button</Button>
    </Provider>
  )
}

export const QuietPrimaryButton = () => {
  const props = {
    variant: 'primary',
    isQuiet: true
  }

  return (
    <Provider theme={theme} colorScheme='light'>
      <Button {...props}>Quiet Primary Button</Button>
    </Provider>
  )
}
