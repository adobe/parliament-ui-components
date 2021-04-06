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

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from '../Link'
import { View } from '@adobe/react-spectrum'

import '@spectrum-css/typography'
import '@spectrum-css/link'

const TableOfContents = ({
  tableOfContents,
  title = 'On this page',
  ...props
}) => {
  const index = tableOfContents.items && tableOfContents.items.length - 1

  const tableOfContentsItems = {
    items: tableOfContents.items && tableOfContents.items[index].items
  }

  const idList = getIds(tableOfContents?.items?.[0]?.items)
  const activeId = useActiveId(idList)

  return (
    <View
      elementType='nav'
      role='navigation'
      aria-label='Article Outline'
      marginY='size-400'
      {...props}
    >
      <h4
        className='spectrum-Detail--sizeL'
        css={css`
          color: var(--spectrum-global-color-gray-600);
          margin-bottom: var(--spectrum-global-dimension-static-size-250);
        `}
      >
        {title}
      </h4>
      <span
        css={css`
          * {
            list-style: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-decoration: none;
            max-width: 200px;
          }
        `}
      >
        <ul
          className='spectrum-Body--sizeM'
          css={css`
            margin: 0;
            padding-left: 0;
          `}
        >
          {tableOfContentsItems.items &&
            renderItems(tableOfContentsItems.items, activeId)}
        </ul>
      </span>
    </View>
  )
}

const renderItems = (items, activeId) => {
  return items.map((item, index) => {
    return renderItem(item, index, activeId)
  })
}

const renderItem = (item, index, activeId) => {
  return (
    <li
      key={index}
      css={css`
        margin-bottom: 0;
      `}
    >
      {item.items ? (
        <ul
          css={css`
            list-style: none;
            padding-left: var(--spectrum-global-dimension-static-size-200);
            margin-left: 0;
            margin-bottom: 0;
            margin-top: 0;
          `}
        >
          {renderLink(item, activeId, true)}
          {renderItems(item.items, activeId)}
        </ul>
      ) : (
        renderLink(item, activeId)
      )}
    </li>
  )
}

const renderLink = (item, activeId, indent = false) => {
  return activeId === item?.url?.slice(1) ? (
    <Link
      href={item.url}
      css={css`
        ${indent ? `margin-left: -16px;` : ''}
        font-weight: bold;
        color: var(--spectrum-global-color-gray-900);
      `}
    >
      {item.title}
    </Link>
  ) : (
    <Link
      href={item.url}
      css={css`
        ${indent ? `margin-left: -16px;` : ''}
      `}
    >
      {item.title}
    </Link>
  )
}

const getIds = (items) => {
  return items
    ? items.reduce((acc, item) => {
        if (item.url) {
          // url has a # as first character, remove it to get the raw CSS-id
          acc.push(item.url.slice(1))
        }
        if (item.items) {
          acc.push(...getIds(item.items))
        }
        return acc
      }, [])
    : []
}

const useActiveId = (itemIds) => {
  const [activeId, setActiveId] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds.forEach((id) => {
      observer.observe(document.getElementById(id))
    })

    return () => {
      itemIds.forEach((id) => {
        observer.unobserve(document.getElementById(id))
      })
    }
  }, [itemIds])

  return activeId
}

TableOfContents.propTypes = {
  tableOfContents: PropTypes.object
}

TableOfContents.defaultProps = {
  tableOfContents: {}
}

export { TableOfContents }
