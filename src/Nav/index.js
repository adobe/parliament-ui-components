import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { stripManifestPath, defaultFocus } from '../ManifestUtils'

import '@spectrum-css/sidenav'
import './index.css'

const nav = (data, gitInfo) => {
  /*
  return data.map((node, index) => {
    const updatedPath = stripManifestPath(node.path, gitInfo)
    return (
      <SideNavItem
        key={index}
        aria-current='page'
        isNested={false}
        disabled={false}
        defaultExpanded
        onClick={() => {
          if (updatedPath) {
            if (
              updatedPath.startsWith('http://') ||
              updatedPath.startsWith('https://')
            ) {
              document.location.href = updatedPath
            } else {
              navigate(updatedPath)
            }
          }
        }}
        label={node.title}
        target='_self'
        value={node.title}
      >
        {node.pages ? nav(node.pages, gitInfo) : ''}
      </SideNavItem>
    )
  })
  */
  return (
    <ul className='spectrum-SideNav'>
      {data.map((node, index) => {
        const updatedPath = stripManifestPath(node.path, gitInfo)
        return (
          <li className='spectrum-SideNav-item' key={index}>
            <a
              href='#'
              className='spectrum-SideNav-itemLink'
              onClick={() => {
                if (updatedPath) {
                  if (
                    updatedPath.startsWith('http://') ||
                    updatedPath.startsWith('https://')
                  ) {
                    document.location.href = updatedPath
                  } else {
                    navigate(updatedPath)
                  }
                }
              }}
            >
              {node.title}
            </a>
            {node.pages ? nav(node.pages, gitInfo) : ''}
          </li>
        )
      })}
    </ul>
  )
}

const Nav = ({ data, selected, gitInfo }) => {
  /*
  return (
    <SideNav
      autoFocus
      defaultValue={defaultFocus(data, selected, gitInfo)}
      isNested={false}
      manageTabIndex={false}
      typeToSelect
      variant='multiLevel'
    >
      {nav(data, gitInfo)}
    </SideNav>
  )
  */
  return <nav>{nav(data, gitInfo)}</nav>
}

Nav.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.string,
  gitInfo: PropTypes.object
}

Nav.defaultProps = {
  data: [],
  selected: '',
  gitInfo: {}
}

export default Nav
