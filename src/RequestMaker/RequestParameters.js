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
import { HeaderParameters } from './HeaderParameters'
import { QueryParameters } from './QueryParameters'
import { CodeGen } from './CodeGen'

const RequestParameters = ({ children, dispatch, url, options }) => {
  const childrenArray = React.Children.toArray(children)
  const filterChildren = (childrenArray, type) => {
    return childrenArray
      .filter((child) => child.type.name === type)
      .map((child) => {
        return {
          enabled: true,
          key: child.props.name,
          value: child.props.children,
          deletable: true
        }
      })
  }
  const queryArray = filterChildren(childrenArray, 'QueryParameters')
  const headerArray = filterChildren(childrenArray, 'HeaderParameters')
  const bodyArray = childrenArray
    .filter((child) => child.type.name === 'Body')
    .map((child) => React.cloneElement(child, { dispatch }))

  console.log(bodyArray)
  return (
    <View>
      <Tabs aria-label='Request Parameters'>
        <Item title='Query' key='queryTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            <QueryParameters items={queryArray} dispatch={dispatch} />
          </Content>
        </Item>
        <Item title='Headers' key='headerTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            <HeaderParameters items={headerArray} dispatch={dispatch} />
          </Content>
        </Item>
        <Item title='Body' key='bodyTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            {bodyArray}
          </Content>
        </Item>
        <Item title='Code Generation' key='codeTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            <CodeGen url={url} options={options} />
          </Content>
        </Item>
      </Tabs>
    </View>
  )
}

RequestParameters.propTypes = {}

export { RequestParameters }
