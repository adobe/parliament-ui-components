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
import { useState, useRef, useEffect } from 'react'
import { jsx } from '@emotion/react'
import { TextField } from '@adobe/react-spectrum'
import { Menu } from '../Menu'
import { Popover } from '../Popover'

const AutoHeader = ({ value, index, onUpdate }) => {
  const defaultMenuItems = [
    { name: 'Accept' },
    { name: 'Accept-Charset' },
    { name: 'Accept-Encoding' },
    { name: 'Accept-Language' },
    { name: 'Access-Control-Request-Headers' },
    { name: 'Access-Control-Request-Method' },
    { name: 'Authorization' },
    { name: 'Cache-Control' },
    { name: 'Content-MD5' },
    { name: 'Content-Length' },
    { name: 'Content-Transfer-Encoding' },
    { name: 'Content-Type' },
    { name: 'Cookie' },
    { name: 'Cookie 2' },
    { name: 'Date' },
    { name: 'Expect' },
    { name: 'From' },
    { name: 'Host' },
    { name: 'If-Match' },
    { name: 'If-Modified-Since' },
    { name: 'If-None-Match' },
    { name: 'If-Range' },
    { name: 'If-Unmodified-Since' },
    { name: 'Keep-Alive' },
    { name: 'Max-Forwards' },
    { name: 'Origin' },
    { name: 'Pragma' },
    { name: 'Proxy-Authorization' },
    { name: 'Range' },
    { name: 'Referer' },
    { name: 'TE' },
    { name: 'Trailer' },
    { name: 'Transfer-Encoding' },
    { name: 'Upgrade' },
    { name: 'User-Agent' },
    { name: 'Via' },
    { name: 'Warning' },
    { name: 'X-Requested-With' },
    { name: 'X-Do-Not-Track' },
    { name: 'DNT' },
    { name: 'x-api-key' },
    { name: 'Connection' }
  ]
  const textRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [val, setVal] = useState(value)
  const [menuItems, setMenuItems] = useState(defaultMenuItems)
  const props = {
    isOpen: isOpen,
    style: {
      position: 'absolute',
      left: '15px',
      top: '38px',
      zIndex: '1000',
      'overflow-y': 'auto',
      'max-height': '300px',
      'min-width': '150px'
    }
  }
  const loadHeader = (item) => {
    setIsOpen(false)
    setVal(item.name)
    onUpdate(index, { key: item.name })
  }
  const handleChange = (value) => {
    setVal(value)
    onUpdate(index, { key: value })
    let menu = defaultMenuItems.filter(
      (menuItem) =>
        menuItem.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
    if (value.length > 0 && menu.length > 0) {
      setMenuItems(menu)
      setIsOpen(true)
    } else {
      setMenuItems(defaultMenuItems)
      setIsOpen(false)
    }
  }
  const handleClickOutside = (event) => {
    if (textRef.current && !textRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <div ref={textRef}>
      <TextField
        isQuiet
        value={val}
        width='100%'
        placeholder='key'
        onChange={handleChange}
        autoComplete='off'
      />
      <Popover {...props}>
        <Menu
          onAction={loadHeader}
          items={menuItems}
          onKeyPress={(key, item) => {
            if (key === 'Enter') {
              loadHeader(item)
            } else if (key === 'Escape') {
              setIsOpen(false)
            }
          }}
        />
      </Popover>
    </div>
  )
}

export { AutoHeader }
