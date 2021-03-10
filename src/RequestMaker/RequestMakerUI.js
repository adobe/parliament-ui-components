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

import React, { useEffect, useState } from 'react'
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
import { useRequest } from './RequestContext'

const ACTION_TYPES = {
  SET_METHOD: 'setMethod',
  SET_BODY: 'setBody',
  SET_HEADERS: 'setHeaders',
  SET_QUERY_PARAMS: 'setQueryParams',
  REMOVE_CONTENT_TYPE: 'removeContentType',
  REMOVE_FORM_CONTENT_TYPE: 'removeFormContentType',
  UPDATE_CONTENT_TYPE: 'updateContentType'
}

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

const RequestMakerUI = ({ method, url, children, ...props }) => {
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

  const [state, dispatch] = useRequest()
  useEffect(() => {
    dispatch({
      type: 'init',
      method,
      query: queryParams,
      headers,
      body,
      bodyType
    })
  }, [])

  const [response, setResponse] = useState(null)
  const [requestTime, setRequestTime] = useState(0)

  const queryString = (obj) => {
    return obj && obj.length > 0
      ? '?' +
          encodeURI(
            obj
              .filter((item) => item.enabled && item.key !== '')
              .map((item) => item.key + '=' + item.value)
              .join('&')
          )
      : ''
  }

  const getHeaders = (headerArray) => {
    return headerArray.reduce((obj, item) => {
      return {
        ...obj,
        [item.key]: item.value
      }
    }, {})
  }

  const sendRequest = async () => {
    try {
      console.log(state)
      const requestOptions = {
        method: state.method,
        headers: getHeaders(state.headers)
      }
      if (state.method !== 'GET' && state.body !== null) {
        switch (state.bodyType) {
          case 'form-data': {
            const formData = new FormData()
            state.body
              .filter((item) => item.enabled && item.key)
              .map((item) => formData.append(item.key, item.value))
            requestOptions.body = formData
            break
          }
          case 'urlencoded': {
            const formData = new URLSearchParams()
            state.body
              .filter((item) => item.enabled && item.key)
              .map((item) => formData.append(item.key, item.value))
            requestOptions.body = formData
            break
          }
          case 'raw': {
            requestOptions.body = state.body
            break
          }
          case 'binary': {
            break
          }
          case 'none':
          default: {
            break
          }
        }
      }
      console.log(requestOptions)
      const t0 = performance.now()
      const response = await fetch(
        url + queryString(state.query),
        requestOptions
      )
      const t1 = performance.now()
      console.log('Time: ' + (t1 - t0))
      setRequestTime(t1 - t0)
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
            <MethodPicker method={method} />
            <TextField value={url + queryString(state.query)} width='100%' />
          </Flex>
          <RequestParameters url={url + queryString(state.query)} />
          <View>
            <ActionButton onPress={sendRequest}>
              <Send />
              <Text>Send</Text>
            </ActionButton>
          </View>
          <ResponsePanel response={response} requestTime={requestTime} />
        </Flex>
      </Well>
    </div>
  )
}
RequestMakerUI.propTypes = {}
RequestMakerUI.ACTION_TYPES = ACTION_TYPES

export { RequestMakerUI }
