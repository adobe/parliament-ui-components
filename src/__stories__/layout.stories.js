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
  const themes = select(
    'Themes',
    {
      Lightest: 'lightest',
      Light: 'light',
      Dark: 'dark',
      Darkest: 'darkest'
    },
    'light',
    'Options'
  )

  const title = text('Site title', 'Test title', 'Options')

  const content = text('Content', 'Hello World!', 'Options')

  return (
    <Provider theme={theme}>
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
