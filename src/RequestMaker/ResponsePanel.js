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

import React, { useEffect, useState } from 'react'
import {
  Content,
  Flex,
  View,
  Tabs,
  TabList,
  TabPanels,
  Item
} from '@adobe/react-spectrum'
import GlobeGrid from '@spectrum-icons/workflow/GlobeGrid'
import { ParameterTable } from './ParameterTable'
import { CodeUI } from '../CodeUI'
import { useRequestState } from './RequestContext'
import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'

const ResponsePanel = (props) => {
  const [headers, setHeaders] = useState(null)
  const [body, setBody] = useState('')
  const [language, setLanguage] = useState('text')
  const state = useRequestState()

  const parseResponse = async (response) => {
    if (response) {
      const contentType = response.headers.get('content-type')
      if (contentType?.indexOf('application/json') > -1) {
        setLanguage('json')
      } else {
        setLanguage('text')
      }
      const responseBody = await response.text()
      setBody(`${responseBody}\n`)
      setHeaders(
        Array.from(response.headers.entries()).map((header) => {
          return {
            enabled: false,
            key: header[0],
            value: header[1],
            deletable: false
          }
        })
      )
    }
  }

  useEffect(() => {
    parseResponse(state.response)
  }, [state.response])

  console.log(state.response)

  return state.response ? (
    <View>
      <Flex
        direction='row'
        gap='size-100'
        justifyContent='flex-end'
        position='relative'
        top='size-450'
      >
        <View>
          <GlobeGrid size='S' />
        </View>
        <View>Status: {state.response.status}</View>
        <View>Time: {prettyMilliseconds(state.requestTime)}</View>
        <View>Size: {prettyBytes(body ? body.length : 0)}</View>
      </Flex>
      <Tabs aria-label='Response'>
        <TabList>
          <Item key='responseBodyTab'>Response Body</Item>
          <Item key='responseHeaderTab'>Response Headers</Item>
        </TabList>
        <TabPanels>
          <Item title='Response Body' key='responseBodyTab'>
            <Content marginTop='size-250' marginStart='size-125'>
              <CodeUI className={language}>{body}</CodeUI>
            </Content>
          </Item>
          <Item title='Response Headers' key='responseHeaderTab'>
            <Content marginTop='size-250' marginStart='size-125'>
              <ParameterTable readonly items={headers} />
            </Content>
          </Item>
        </TabPanels>
      </Tabs>
    </View>
  ) : (
    ''
  )
}

ResponsePanel.propTypes = {}

export { ResponsePanel }
