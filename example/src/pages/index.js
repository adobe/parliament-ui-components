import React from 'react'
import PropTypes from 'prop-types'
import Provider from '@react/react-spectrum/Provider'
import { Header, Footer, Feedback, Nav } from 'parliament-ui-components'

const data = {
  title: 'AEP-Quickstart',
  pages: [
    {
      label: 'Readme',
      url: '#noop'
    },
    {
      label: 'Postman',
      children: [
        {
          label: 'Postman Readme',
          url: '#noop'
        }
      ]
    }
  ]
}

const index = ({ location }) => {
  const title = 'Test Title'
  return (
    <Provider theme='lightest'>
      <Header siteTitle={title} />
      <div>Hello world!</div>
      <Nav data={data.pages} path={location.pathname} />
      <Feedback
        gitUrl='https://git.corp.adobe.com/devrel/parliament-client-template'
        filePath='README.md'
        branch='master'
      />
      <Footer />
    </Provider>
  )
}

index.propTypes = {
  location: PropTypes.object
}

index.defaultProps = {
  location: {}
}

export default index
