import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

const Heading = require('@react/react-spectrum/Heading').default
const { SideNav, SideNavItem } = require('@react/react-spectrum/SideNav')
const Folder = require('@react/react-spectrum/Icon/Folder').default
const WebPage = require('@react/react-spectrum/Icon/WebPage').default

const nav = data => {
  return data.map((node, index) => {
    return (
      <SideNavItem
        key={index}
        aria-current='page'
        isNested={false}
        disabled={false}
        defaultExpanded={true}
        icon={!node.children ? <WebPage /> : <Folder />}
        onClick={() => {
          if (node.url) navigate(node.url)
        }}
        label={node.label}
        target='_self'
        value={node.label}
      >
        {node.children ? nav(node.children) : ''}
      </SideNavItem>
    )
  })
}

const defaultFocus = data => {
  for (let page of data) {
    if (page.url === document.location.pathname) {
      return page.label
    } else if (page.children) {
      return defaultFocus(page.children)
    }
  }
}

const Nav = ({ data }) => {
  return (
    <nav>
      <Heading variant='subtitle3'>Topics</Heading>
      <SideNav
        autoFocus={true}
        defaultValue={defaultFocus(data)}
        isNested={false}
        manageTabIndex={false}
        typeToSelect
        variant='multiLevel'
      >
        {nav(data)}
      </SideNav>
    </nav>
  )
}

Nav.propTypes = {
  data: PropTypes.array
}

Nav.defaultProps = {
  data: []
}
export default Nav
