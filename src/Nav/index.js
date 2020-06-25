import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { stripManifestPath, defaultFocus } from '../ManifestUtils'

import '@spectrum-css/sidenav'
import './index.css'

const nav = (data, gitInfo, defaultFocus) => {
  return (
    <ul className='spectrum-SideNav  spectrum-SideNav--multiLevel'>
      {data.map((node, index) => {
        const updatedPath = stripManifestPath(node.path, gitInfo)
        const isSelected =
          node.title === defaultFocus
            ? 'spectrum-SideNav-item is-selected'
            : 'spectrum-SideNav-item'
        return (
          <li className={isSelected} key={index}>
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
            {node.pages ? nav(node.pages, gitInfo, defaultFocus) : ''}
          </li>
        )
      })}
    </ul>
  )
}

const Nav = ({ data, selected, gitInfo }) => {
  return <nav>{nav(data, gitInfo, defaultFocus(data, selected, gitInfo))}</nav>
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
