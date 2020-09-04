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
import { Popover } from '../index'
import { Menu, Item } from '../../Menu'
import { SearchField } from '@adobe/react-spectrum'

export default {
  title: 'components/Popover'
}

export const OpenPopover = () => {
  const props = { isOpen: true }
  const itemProps = { onAction: (e) => console.log(e) }

  return (
    <Popover {...props}>
      <Menu>
        <Item {...itemProps} isSelected>
          Ballard
        </Item>
        <Item {...itemProps}>Fremont</Item>
        <Item {...itemProps}>Greenwood</Item>
        <Item isDivider />
        <Item {...itemProps} isDisabled>
          United States of America
        </Item>
      </Menu>
    </Popover>
  )
}

export const OpenPopoverItems = () => {
  const props = {
    isOpen: true,
    style: { position: 'absolute', left: '0px', top: '32px', zIndex: '1000' }
  }
  const menuProps = {
    onAction: (e) => {
      console.log(e)
    },
    items: [
      { name: 'Cut' },
      { name: 'Copy' },
      { name: 'Paste' },
      { name: 'Replace' }
    ],
    selectedKeys: ['Copy'],
    disabledKeys: ['Replace']
  }

  return (
    <div style={{ position: 'relative' }}>
      <SearchField
        onSubmit={(searchTerm) => {
          console.log(searchTerm)
        }}
      />
      <Popover {...props}>
        <Menu {...menuProps} />
      </Popover>
      <p>This is a bunch of text that the popover should float over top of.</p>
      <p>Moar text!</p>
    </div>
  )
}
