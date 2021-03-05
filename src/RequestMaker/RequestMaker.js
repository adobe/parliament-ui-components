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
  SET_HEADERS: 'setHeaders',
  SET_QUERY_PARAMS: 'setQueryParams',
  REMOVE_CONTENT_TYPE: 'removeContentType',
  REMOVE_FORM_CONTENT_TYPE: 'removeFormContentType',
  UPDATE_CONTENT_TYPE: 'updateContentType'
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
      console.log('did I get called')
      console.log({ ...state, headers: action.headers })
      return { ...state, headers: action.headers }
    case ACTION_TYPES.SET_QUERY_PARAMS:
      console.log({ ...state, query: action.query })
      return { ...state, query: action.query }
    case ACTION_TYPES.REMOVE_CONTENT_TYPE:
      if (state.headers.has('Content-Type')) {
        state.headers.delete('Content-Type')
      }
      console.log(state)
      return { ...state }
    case ACTION_TYPES.REMOVE_FORM_CONTENT_TYPE:
      if (
        state.headers.get('Content-Type') === 'multipart/form-data' ||
        state.headers.get('Content-Type') ===
          'application/x-www-form-urlencoded'
      ) {
        state.headers.delete('Content-Type')
      }
      console.log(state)
      return { ...state }
    case ACTION_TYPES.UPDATE_CONTENT_TYPE:
      state.headers.set('Content-Type', action.contentType)
      console.log(state)
      return { ...state }
    default:
      throw new Error()
  }
}

const RequestMaker = ({ method, url, children, ...props }) => {
  const childrenArray = React.Children.toArray(children)

  const headers = new Headers()
  childrenArray
    .filter((child) => child.type.name === 'HeaderParameters')
    .map((child) => {
      headers.append(child.props.name, child.props.children)
    })

  const queryParams = {}
  childrenArray
    .filter((child) => child.type.name === 'QueryParameters')
    .map((child) => {
      queryParams[child.props.name] = child.props.children
    })

  const bodyArray = childrenArray.filter((child) => child.type.name === 'Body')
  let body = null
  let bodyType = 'none'
  if (bodyArray.length === 1) {
    body = bodyArray[0].props.children
    bodyType = bodyArray[0].props.type
  } else if (bodyArray.length > 1) {
    throw new Error('Too many body tags')
  }

  const [requestOptions, dispatch] = useReducer(reducer, {
    method,
    query: queryParams,
    headers,
    body,
    bodyType
  })
  const [response, setResponse] = useState(null)

  const queryString = (obj) => {
    return Object.keys(obj).length > 0
      ? '?' +
          encodeURI(
            Object.keys(obj)
              .map((key) => key + '=' + obj[key])
              .join('&')
          )
      : ''
  }

  const sendRequest = async () => {
    try {
      console.log(requestOptions)
      const response = await fetch(
        url + queryString(requestOptions.query),
        requestOptions
      )
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
            <TextField
              value={url + queryString(requestOptions.query)}
              width='100%'
            />
          </Flex>
          <RequestParameters
            dispatch={dispatch}
            url={url + queryString(requestOptions.query)}
            options={requestOptions}
          >
            {children}
          </RequestParameters>
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
