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

import React, { useEffect } from 'react'
import { Content, View } from '@adobe/react-spectrum'
import { Tabs, Item } from '@react-spectrum/tabs'
import { CodeGen } from './CodeGen'
import { RequestBody } from './RequestBody'
import { RequestProvider, useRequest } from './RequestContext'
import { ParameterTable } from './ParameterTable'

const filterChildren = (childrenArray, type) => {
  return childrenArray
    .filter(
      (child) =>
        child.type.name === type || child.props.mdxType === type.toLowerCase()
    )
    .map((child) => {
      return {
        enabled: true,
        key: child.props.name,
        value: child.props.children,
        deletable: true
      }
    })
}

const RequestParameters = ({ url, children }) => {
  const [options, dispatch] = useRequest()

  const childrenArray = React.Children.toArray(children)
  const headers = filterChildren(childrenArray, 'HeaderParameters')
  const queryParams = filterChildren(childrenArray, 'QueryParameters')
  const bodyArray = childrenArray.filter(
    (child) =>
      child.type.name === 'RequestBody' || child.props.mdxType === 'requestbody'
  )

  let body = null
  let bodyType = 'none'
  if (bodyArray.length === 1) {
    body = bodyArray[0].props.children
    bodyType = bodyArray[0].props.type
  } else if (bodyArray.length > 1) {
    throw new Error('Too many body tags')
  }

  useEffect(() => {
    dispatch({
      type: RequestProvider.ACTION_TYPES.INIT,
      query: queryParams,
      headers,
      body,
      bodyType
    })
  }, [])

  return (
    <View>
      <Tabs aria-label='Request Parameters'>
        <Item title='Query' key='queryTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            <ParameterTable
              items={options.query}
              callback={(data) => {
                dispatch({
                  type: RequestProvider.ACTION_TYPES.SET_QUERY_PARAMS,
                  query: data
                })
              }}
            />
          </Content>
        </Item>
        <Item title='Headers' key='headerTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            <ParameterTable
              items={options.headers}
              callback={(data) => {
                dispatch({
                  type: RequestProvider.ACTION_TYPES.SET_HEADERS,
                  headers: data
                })
              }}
            />
          </Content>
        </Item>
        <Item title='Body' key='bodyTab'>
          <Content marginTop='size-250' marginStart='size-125'>
            <RequestBody type={options.bodyType} items={options.body} />
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
