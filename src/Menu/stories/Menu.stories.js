/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/Itemcenses/ItemCENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import React from 'react'
import { Menu, Item, Section } from '../index'

export default {
  title: 'components/Menu'
}

export const MenuChildren = () => {
  const props = {}

  return (
    <Menu {...props}>
      <Item isSelected>Ballard</Item>
      <Item>Fremont</Item>
      <Item>Greenwood</Item>
      <Item isDivider />
      <Item isDisabled>United States of America</Item>
    </Menu>
  )
}

export const MenuItems = () => {
  const props = {
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

  return <Menu {...props} />
}

export const MenuAnchorLinks = () => {
  return (
    <Menu>
      <Item href='#Ballard'>Ballard</Item>
      <Item href='#Fremont'>Fremont</Item>
      <Item href='#Greenwood'>Greenwood</Item>
    </Menu>
  )
}

export const MenuWithSections = () => {
  return (
    <Menu>
      <Section title='Title 1'>
        <Item>Ballard</Item>
        <Item>Fremont</Item>
        <Item>Greenwood</Item>
      </Section>
      <Item isDivider />
      <Section title='Title 2'>
        <Item>Ballard</Item>
        <Item>Fremont</Item>
        <Item>Greenwood</Item>
      </Section>
    </Menu>
  )
}
