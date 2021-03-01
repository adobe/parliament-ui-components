/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react'
import { Content, View } from '@adobe/react-spectrum'
import { Tabs, Item } from '@react-spectrum/tabs'

const RequestParameters = ({ children }) => {
  const childrenArray = React.Children.toArray(children)
  const queryArray = childrenArray.filter(
    (child) => child.type.name === 'QueryParameters'
  )
  const headerArray = childrenArray.filter(
    (child) => child.type.name === 'HeaderParameters'
  )
  const bodyArray = childrenArray.filter((child) => child.type.name === 'Body')
  return (
    <View>
      <Tabs aria-label='Request Parameters'>
        <Item title='Query' key='queryTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            {queryArray}
          </Content>
        </Item>
        <Item title='Headers' key='headerTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            {headerArray}
          </Content>
        </Item>
        <Item title='Body' key='bodyTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            {bodyArray}
          </Content>
        </Item>
      </Tabs>
    </View>
  )
}

RequestParameters.propTypes = {}

export { RequestParameters }
