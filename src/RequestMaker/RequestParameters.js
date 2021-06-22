/*
 * Copyright 2021 Adobe. All rights reserved.
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
import {
  Content,
  View,
  Tabs,
  TabList,
  TabPanels,
  Item
} from '@adobe/react-spectrum'
import { CodeGen } from './CodeGen'
import { RequestBody } from './RequestBody'
import { RequestProvider, useRequest } from './RequestContext'
import { ParameterTable } from './ParameterTable'
import { completions } from './HeaderCompletions'

const findChild = (childrenArray, type) => {
  const child = childrenArray.filter(
    (child) =>
      child.type.name === type || child.props.mdxType === type.toLowerCase()
  )
  return child.length === 1 ? child[0] : {}
}

const filterChildren = (item) => {
  return item.props?.children ? item.props.children.map(makeParameter) : []
}

const makeParameter = (param) => {
  return {
    enabled: true,
    key: param?.props?.name || param.key,
    value: param?.props?.children || param.value,
    deletable: true
  }
}

const createParametersArray = (childrenArray, type) => {
  const element = findChild(childrenArray, type)
  return [
    ...(element?.props?.parameters?.map(makeParameter) || []),
    ...filterChildren(element)
  ]
}

const RequestParameters = ({ url, children }) => {
  const [options, dispatch] = useRequest()

  const childrenArray = React.Children.toArray(children)
  const bodyArray = findChild(childrenArray, 'RequestBody')
  const body = bodyArray?.props?.children || null
  const bodyType = bodyArray?.props?.type || 'none'

  const headers = createParametersArray(childrenArray, 'Headers')
  const queryParams = createParametersArray(childrenArray, 'Query')

  useEffect(() => {
    dispatch({
      type: RequestProvider.ACTION_TYPES.INIT,
      query: queryParams,
      headers,
      body,
      bodyType
    })
  }, [])

  const contentType =
    options?.headers?.find((header) => header.key === 'Content-Type')?.value ||
    'text/plain'

  return (
    <View>
      <Tabs aria-label='Request Parameters'>
        <TabList>
          <Item key='queryTab'>Query</Item>
          <Item key='headerTab'>Headers</Item>
          <Item key='bodyTab'>Body</Item>
        </TabList>
        <TabPanels>
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
                completions={completions}
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
              <RequestBody
                type={options.bodyType}
                contentType={contentType}
                items={options.body}
              />
            </Content>
          </Item>
          <Item title='Code Generation' key='codeTab'>
            <Content marginTop='size-250' marginStart='size-125'>
              <CodeGen url={url} options={options} />
            </Content>
          </Item>
        </TabPanels>
      </Tabs>
    </View>
  )
}

RequestParameters.propTypes = {}

export { RequestParameters }
