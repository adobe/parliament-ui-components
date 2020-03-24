import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { stripManifestPath, defaultFocus } from "../ManifestUtils"

const { SideNav, SideNavItem } = require("@react/react-spectrum/SideNav")

const nav = (data, gitInfo) => {
  return data.map((node, index) => {
    const updatedPath = stripManifestPath(node.path, gitInfo)
    console.log(updatedPath)
    return (
      <SideNavItem
        key={index}
        aria-current="page"
        isNested={false}
        disabled={false}
        defaultExpanded={true}
        onClick={() => {
          if (updatedPath) {
            if (
              updatedPath.startsWith("http://") ||
              updatedPath.startsWith("https://")
            ) {
              document.location.href = updatedPath
            } else {
              navigate(updatedPath)
            }
          }
        }}
        label={node.title}
        target="_self"
        value={node.title}
      >
        {node.pages ? nav(node.pages, gitInfo) : ""}
      </SideNavItem>
    )
  })
}

const Nav = ({ data, selected, gitInfo }) => {
  return (
    <SideNav
      autoFocus={true}
      defaultValue={defaultFocus(data, selected, gitInfo)}
      isNested={false}
      manageTabIndex={false}
      typeToSelect
      variant="multiLevel"
    >
      {nav(data, gitInfo)}
    </SideNav>
  )
}

Nav.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.string,
  gitInfo: PropTypes.object
}

Nav.defaultProps = {
  data: [],
  selected: "",
  gitInfo: {}
}

export default Nav
