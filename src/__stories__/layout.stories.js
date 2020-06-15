import React from 'react'

import Provider from '@react/react-spectrum/Provider'

import { withKnobs, select, text } from '@storybook/addon-knobs'

import Header from '../Header'
import Footer from '../Footer'
import Feedback from '../Feedback'
import Nav from '../Nav'

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
    <Provider theme={themes}>
      <Header siteTitle={title} />
      <div>{content}</div>
      <Nav
        data={mockData.pages}
        selected='test/path/test.md'
        gitInfo={{ org: 'adobedocs', name: 'adobeio-events', branch: 'master' }}
      />
      <Feedback
        gitUrl='https://git.corp.adobe.com/devrel/parliament-client-template'
        filePath='README.md'
        branch='master'
      />
      <Footer />
    </Provider>
  )
}
