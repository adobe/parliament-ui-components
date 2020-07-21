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
import { Text } from '@react-spectrum/text'

import Alert from '../index'

const Wrapper = (storyFn) => {
  return (
    <Provider theme={theme} colorScheme='light'>
      {storyFn()}
    </Provider>
  )
}

export default {
  title: 'components/Alert',
  decorators: [Wrapper]
}

export const AlertInfo = () => {
  const props = {
    variant: 'info'
  }

  return (
    <Alert {...props}>
      <Text>This is the Info alert component</Text>
    </Alert>
  )
}

export const AlertInfoHeader = () => {
  const props = {
    header: 'Info',
    variant: 'info'
  }

  return (
    <Alert {...props}>
      <Text>This is the Info alert component</Text>
    </Alert>
  )
}

export const AlertHelp = () => {
  const props = {
    variant: 'help'
  }

  return (
    <Alert {...props}>
      <Text>This is the Help alert component</Text>
    </Alert>
  )
}

export const AlertHelpHeader = () => {
  const props = {
    header: 'Help',
    variant: 'help'
  }

  return (
    <Alert {...props}>
      <Text>This is the Help alert component</Text>
    </Alert>
  )
}

export const AlertWarning = () => {
  const props = {
    variant: 'warning'
  }

  return (
    <Alert {...props}>
      <Text>This is the Warning alert component</Text>
    </Alert>
  )
}

export const AlertWarningHeader = () => {
  const props = {
    header: 'Warning',
    variant: 'warning'
  }

  return (
    <Alert {...props}>
      <Text>This is the Warning alert component</Text>
    </Alert>
  )
}

export const AlertError = () => {
  const props = {
    variant: 'error'
  }

  return (
    <Alert {...props}>
      <Text>This is the Error alert component</Text>
    </Alert>
  )
}

export const AlertErrorHeader = () => {
  const props = {
    header: 'Error',
    variant: 'error'
  }

  return (
    <Alert {...props}>
      <Text>This is the Error alert component</Text>
    </Alert>
  )
}
