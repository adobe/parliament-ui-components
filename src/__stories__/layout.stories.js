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

import { withKnobs, select, text } from '@storybook/addon-knobs'

import Header from '../Header'
import Footer from '../Footer'
import ActionButtons from '../ActionButtons'
import Nav from '../Nav'
import {
  Grid,
  GridContent,
  GridContentInner,
  GridFooter,
  GridNav
} from '../Grid'

import mockData from './mockData'

export default {
  title: 'layouts',
  decorators: [withKnobs]
}

export const basic = () => {
  const colorScheme = select(
    'Color Scheme',
    {
      Light: 'light',
      Dark: 'dark'
    },
    'light',
    'Options'
  )

  const title = text('Site title', 'Test title', 'Options')

  const content = text('Content', 'Hello World!', 'Options')

  return (
    <Provider theme={theme} colorScheme={colorScheme}>
      <Header siteTitle={title} />
      <Grid>
        <GridNav>
          <Nav
            data={mockData.pages}
            selected='test/path/test.md'
            gitInfo={{
              org: 'adobedocs',
              name: 'adobeio-events',
              branch: 'master'
            }}
          />
        </GridNav>
        <GridContent style={{ background: 'white' }}>
          <GridContentInner>
            <div>{content}</div>
            <ActionButtons
              gitUrl='https://git.corp.adobe.com/devrel/parliament-client-template'
              filePath='README.md'
              branch='master'
            />
          </GridContentInner>
        </GridContent>
        <GridFooter>
          <Footer />
        </GridFooter>
      </Grid>
    </Provider>
  )
}
