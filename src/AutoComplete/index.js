/**
 *  Copyright 2021 Adobe. All rights reserved.
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

const AutoComplete = ({
  value = '',
  index,
  width = '100%',
  placeholder = '',
  onUpdate,
  completions,
  ...props
}) => {
  completions = completions ? completions : []
  const textRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [val, setVal] = useState(value)
  const [menuItems, setMenuItems] = useState(completions)
  const popProps = {
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
  const loadCompletion = (item) => {
    setIsOpen(false)
    setVal(item.name)
    onUpdate && onUpdate(index, { key: item.name })
  }
  const handleChange = (value) => {
    setVal(value)
    onUpdate && onUpdate(index, { key: value })
    const menu = completions.filter(
      (menuItem) =>
        menuItem.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
    if (value.length > 0 && menu.length > 0) {
      setMenuItems(menu)
      setIsOpen(true)
    } else {
      setMenuItems(completions)
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
    <div ref={textRef} {...props}>
      <TextField
        isQuiet
        value={val}
        width={width}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete='off'
      />
      {completions && (
        <Popover {...popProps}>
          <Menu
            onAction={loadCompletion}
            items={menuItems}
            onKeyPress={(key, item) => {
              if (key === 'Enter') {
                loadCompletion(item)
              } else if (key === 'Escape') {
                setIsOpen(false)
              }
            }}
          />
        </Popover>
      )}
    </div>
  )
}

export { AutoComplete }
