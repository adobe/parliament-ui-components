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

import { Item } from './Item'

import '@spectrum-css/menu'

const Menu = ({
  children,
  onAction,
  onKeyPress,
  items = [],
  selectedKeys = [],
  disabledKeys = [],
  ...props
}) => {
  console.log(selectedKeys)
  return (
    <ul className='spectrum-Menu' role='menu' {...props}>
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          onAction={onAction}
          onKeyPress={onKeyPress}
          isSelected={selectedKeys.includes(item.name)}
          isDisabled={disabledKeys.includes(item.name)}
          isSectionHeading={item.heading}
          isDivider={item.divider}
        >
          {item.name}
        </Item>
      ))}
      {children}
    </ul>
  )
}

Menu.propTypes = {
  onAction: PropTypes.func,
  items: PropTypes.array,
  selectedKeys: PropTypes.array,
  disabledKeys: PropTypes.array
}

export { Menu }
