import React from 'react'
import Provider from '@react/react-spectrum/Provider'
import { Header, Footer, Feedback } from 'parliament-ui-components'

const index = () => {
  const title = 'Test Title'
  return (
    <Provider theme='lightest'>
      <Header siteTitle={title} />
      <div>Hello world!</div>
      <Feedback gitUrl='https://git.corp.adobe.com/devrel/parliament-client-template' />
      <Footer />
    </Provider>
  )
}

export default index
