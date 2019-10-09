import React from "react"
import Provider from "@react/react-spectrum/Provider"
import { Header } from "parliament-ui-components"

const index = () => {
  const title = "Title"
  return (
    <Provider theme="lightest">
      <Header siteTitle={title} />
      <div>Hello world!</div>
    </Provider>
  )
}

export default index
