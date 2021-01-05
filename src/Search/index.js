/**
 *  Copyright 2020 Adobe. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 */

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { Heading, SearchField, Text } from '@adobe/react-spectrum'
import { Menu } from '../Menu'
import { Popover } from '../Popover'
import { navigate } from 'gatsby'
import { isExternal } from '../utils'

const Search = ({
  sections,
  searchCallback,
  placeholder = 'Search…',
  width = 'size-4600',
  debounceTime = 200,
  ...props
}) => {
  const searchRef = useRef(null)
  const searchField = useRef(null)
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false)
      setQuery('')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  useEffect(() => {
    const handler = setTimeout(() => {
      search(query)
    }, debounceTime)
    return () => {
      clearTimeout(handler)
    }
  }, [query])

  const search = async (searchTerm) => {
    if (searchTerm.length > 0) {
      const searchResults = await searchCallback(searchTerm)
      const results = sections
        .map((section) => {
          const acc = searchResults
            .filter((result) => result !== null && result.type === section.key)
            .map((result) => {
              return { name: result.title, ...result }
            })
          return acc.length > 0
            ? [{ heading: true, name: section.name }, ...acc]
            : acc
        })
        .filter((section) => section.length > 0)

      for (let i = 1; i < results.length; i++) {
        if (results[i - 1].length > 0) {
          results[i].unshift({ divider: true })
        }
      }

      setResults(results.flat())
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  const loadResult = (item) => {
    setIsOpen(false)
    if (isExternal(item.path)) {
      document.location.href = item.path
    } else {
      const path = item.path.startsWith('/') ? item.path : `/${item.path}`
      navigate(path)
    }
  }

  return (
    <div
      ref={searchRef}
      style={{
        position: 'relative'
      }}
      {...props}
    >
      <SearchField
        ref={searchField}
        placeholder={placeholder}
        aria-label='Search'
        width={width}
        value={query}
        onClear={() => {
          setIsOpen(false)
        }}
        onChange={(searchTerm) => {
          setQuery(searchTerm)
        }}
        onSubmit={() => {
          if (results.length > 0) {
            navigate(`/${results[0].path}`)
          }
        }}
        autoComplete='off'
      />
      <Popover
        isOpen={isOpen}
        css={css`
          position: absolute;
          left: 0px;
          top: 32px;
          z-index: 2000;
          width: var(--spectrum-global-dimension-size-4600);
        `}
      >
        {results.length > 0 ? (
          <Menu
            style={{
              marginTop: '12px',
              marginBottom: '12px'
            }}
            items={results}
            onAction={loadResult}
            onKeyPress={(key, item) => {
              if (key === 'Enter') {
                loadResult(item)
              } else if (key === 'Escape') {
                setQuery('')
                searchField.current.focus()
                setIsOpen(false)
              }
            }}
          />
        ) : (
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-bottom: 64px;
              margin-top: 64px;
            `}
          >
            <Heading level={2} UNSAFE_style={{ marginBottom: '8px' }}>
              No Results Found
            </Heading>
            <Text>
              <em>Try another search term</em>
            </Text>
          </div>
        )}
      </Popover>
    </div>
  )
}

export { Search }
