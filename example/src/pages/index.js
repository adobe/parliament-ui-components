import React from "react"
import Provider from "@react/react-spectrum/Provider"
import { Header, Footer } from "parliament-ui-components"

const index = () => {
  const title = "Test Title"
  return (
    <Provider theme="lightest">
      <Header siteTitle={title} />
      <div>Hello world!</div>
      <Footer />
    </Provider>
  )
}

export default index
