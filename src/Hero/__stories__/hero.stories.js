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

import { withKnobs } from '@storybook/addon-knobs'

import { Heading1 } from '../../Heading'
import { Paragraph } from '../../Paragraph'

import { Hero } from '../index'

const Wrapper = (storyFn) => {
  return (
    <Provider theme={theme} colorScheme='light'>
      {storyFn()}
    </Provider>
  )
}

export default {
  title: 'components/Hero',
  decorators: [withKnobs, Wrapper]
}

export const hero = () => {
  const heading = <Heading1>Adobe Analytics</Heading1>
  const text = (
    <Paragraph>
      Adobe Product API offers limitless ways to integrate your most important
      customer data into key business processes. Adobe Product API offer
      limitless ways.
    </Paragraph>
  )
  const image = (
    <Paragraph>
      <img
        alt=''
        src='https://raw.githubusercontent.com/adobe/gatsby-theme-parliament-example/main/src/pages/overview/illustration.png'
      />
    </Paragraph>
  )
  const background = 'rgb(64, 34, 138)'

  const props = {
    heading,
    text,
    image,
    background
  }

  return <Hero {...props} />
}
