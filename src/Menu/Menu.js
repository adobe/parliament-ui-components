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
import { jsx, css } from '@emotion/core'
import { Item } from './Item'
import PropTypes from 'prop-types'
import '@spectrum-css/menu'

const Menu = ({
  children,
  onAction,
  items = [],
  selectedKeys = [],
  disabledKeys = [],
  ...props
}) => {
  return (
    <ul
      className='spectrum-Menu'
      role='menu'
      css={css`
        display: block;
      `}
      {...props}
    >
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          onAction={onAction}
          isSelected={selectedKeys.includes(item.name)}
          isDisabled={disabledKeys.includes(item.name)}
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
