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
import { defaultFocus } from '../ManifestUtils'
import { isExternal } from '../utils'

import '@spectrum-css/sidenav'
import './index.css'

const nav = (data, defaultFocus, currDepth, maxDepth) => {
  if (currDepth >= maxDepth) {
    return ''
  }

  return (
    <ul className='spectrum-SideNav  spectrum-SideNav--multiLevel'>
      {data.map((node, index) => {
        const isSelected =
          node.title === defaultFocus
            ? 'spectrum-SideNav-item is-selected'
            : 'spectrum-SideNav-item'
        const path = isExternal(node.path) ? node.path : withPrefix(node.path)
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
              ? nav(node.pages, defaultFocus, currDepth + 1, maxDepth)
              : ''}
          </li>
        )
      })}
    </ul>
  )
}

const Nav = ({ data = [], selected = '', depth = 2, ...props }) => {
  return (
    <nav aria-label='Side Navigation' {...props}>
      {nav(data, defaultFocus(data, selected), 0, depth)}
    </nav>
  )
}

Nav.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.string,
  depth: PropTypes.number
}

export { Nav }
