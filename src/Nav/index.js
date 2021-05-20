/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'
import { isExternal } from '../utils'

import '@spectrum-css/sidenav'
import './index.css'

const isPathSelected = (path, selected) => {
  const compare = !selected.endsWith('/')
    ? selected
    : selected.substring(0, selected.length - 1)
  return path === compare
}

const nav = (data, selected, currDepth, maxDepth) => {
  if (currDepth >= maxDepth) {
    return ''
  }

  return (
    <ul className='spectrum-SideNav  spectrum-SideNav--multiLevel'>
      {data.map((node, index) => {
        const path = isExternal(node.path) ? node.path : withPrefix(node.path)
        const isSelected = isPathSelected(path, selected)
          ? 'spectrum-SideNav-item is-selected'
          : 'spectrum-SideNav-item'
        return (
          <li className={isSelected} key={index}>
            <a
              href={path}
              className='spectrum-SideNav-itemLink'
              style={{
                paddingLeft: `calc(var(--spectrum-global-dimension-size-150) * ${
                  currDepth + 1
                })`
              }}
            >
              {node.title}
            </a>
            {node.pages
              ? nav(node.pages, selected, currDepth + 1, maxDepth)
              : ''}
          </li>
        )
      })}
    </ul>
  )
}

const Nav = ({ data = [], selected = '', depth = 2, ...props }) => {
  const defaultFocus = selected.charAt(0) === '/' ? selected : `/${selected}`
  return (
    <nav aria-label='Side Navigation' {...props}>
      {nav(data, defaultFocus, 0, depth)}
    </nav>
  )
}

Nav.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.string,
  depth: PropTypes.number
}

export { Nav }
