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

import React, { useState, useReducer } from 'react'
import {
  ActionButton,
  Flex,
  Text,
  View,
  Well,
  TextField
} from '@adobe/react-spectrum'

import Send from '@spectrum-icons/workflow/Send'

import { MethodPicker } from './MethodPicker'
import { RequestParameters } from './RequestParameters'
import { ResponsePanel } from './ResponsePanel'

const ACTION_TYPES = {
  SET_METHOD: 'setMethod',
  SET_BODY: 'setBody',
  SET_HEADERS: 'setHeaders'
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case ACTION_TYPES.SET_METHOD:
      console.log({ ...state, method: action.method })
      return { ...state, method: action.method }
    case ACTION_TYPES.SET_BODY:
      console.log({ ...state, body: action.body })
      return { ...state, body: action.body }
    case ACTION_TYPES.SET_HEADERS:
      console.log({ ...state, headers: action.headers })
      return { ...state, headers: action.headers }
    case ACTION_TYPES.SET_QUERY_PARAMS:
      console.log({ ...state, query: action.query })
      return { ...state, query: action.query }
    default:
      throw new Error()
  }
}

const RequestMaker = ({ method, url, children, ...props }) => {
  const [requestOptions, dispatch] = useReducer(reducer, { method, query: '' })
  const [response, setResponse] = useState(null)
  const sendRequest = async () => {
    try {
      console.log(requestOptions)
      const response = await fetch(url + requestOptions.query, requestOptions)
      setResponse(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div {...props}>
      <Well>
        <Flex direction='column' gap='size-100'>
          <Flex direction='row' gap='size-100' width='100%'>
            <MethodPicker method={method} dispatch={dispatch} />
            <TextField value={url + requestOptions.query} width='100%' />
          </Flex>
          <RequestParameters dispatch={dispatch}>{children}</RequestParameters>
          <View>
            <ActionButton onPress={sendRequest}>
              <Send />
              <Text>Send</Text>
            </ActionButton>
          </View>
          <ResponsePanel response={response} />
        </Flex>
      </Well>
    </div>
  )
}
RequestMaker.propTypes = {}
RequestMaker.ACTION_TYPES = ACTION_TYPES

export { RequestMaker }
