import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

const Heading = require('@react/react-spectrum/Heading').default
const { SideNav, SideNavItem } = require('@react/react-spectrum/SideNav')
const Folder = require('@react/react-spectrum/Icon/Folder').default
const WebPage = require('@react/react-spectrum/Icon/WebPage').default

const nav = (data, urlPrefix) => {
  return data.map((node, index) => {
    const splitPath = node.path ? node.path.split(urlPrefix)[1] : ''
    return (
      <SideNavItem
        key={index}
        aria-current='page'
        isNested={false}
        disabled={false}
        defaultExpanded={true}
        icon={node.pages && node.pages.length > 0 ? <Folder /> : <WebPage />}
        onClick={() => {
          if (splitPath) navigate(splitPath)
        }}
        label={node.title}
        target='_self'
        value={node.title}
      >
        {node.pages ? nav(node.pages, urlPrefix) : ''}
      </SideNavItem>
    )
  })
}

const defaultFocus = (data, selected, urlPrefix) => {
  for (let node of data) {
    const splitPath = node.path ? node.path.split(urlPrefix)[1] : ''
    if (splitPath === selected) {
      return node.title
    } else if (node.pages) {
      return defaultFocus(node.pages, selected, urlPrefix)
    }
  }
}

const Nav = ({ data, selected, urlPrefix }) => {
  return (
    <nav>
      <Heading variant='subtitle3'>Topics</Heading>
      <SideNav
        autoFocus={true}
        defaultValue={defaultFocus(data, selected, urlPrefix)}
        isNested={false}
        manageTabIndex={false}
        typeToSelect
        variant='multiLevel'
      >
        {nav(data, urlPrefix)}
      </SideNav>
    </nav>
  )
}

Nav.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.string,
  urlPrefix: PropTypes.string
}

Nav.defaultProps = {
  data: [],
  selected: '',
  urlPrefix: ''
}
export default Nav