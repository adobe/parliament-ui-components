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

import * as React from 'react'
const RequestStateContext = React.createContext()
const RequestDispatchContext = React.createContext()

const ACTION_TYPES = {
  INIT: 'init',
  SET_METHOD: 'setMethod',
  SET_BODY: 'setBody',
  SET_HEADERS: 'setHeaders',
  SET_QUERY_PARAMS: 'setQueryParams',
  SET_RESPONSE: 'setResponse',
  REMOVE_CONTENT_TYPE: 'removeContentType',
  REMOVE_FORM_CONTENT_TYPE: 'removeFormContentType',
  UPDATE_CONTENT_TYPE: 'updateContentType'
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case ACTION_TYPES.INIT: {
      console.log(action)
      const { body, bodyType, headers, query } = action
      return { ...state, body, bodyType, headers, query }
    }
    case ACTION_TYPES.SET_METHOD:
      console.log({ ...state, method: action.method })
      return { ...state, method: action.method }
    case ACTION_TYPES.SET_RESPONSE:
      console.log({
        ...state,
        response: action.response,
        responseTime: action.requestTime
      })
      return {
        ...state,
        response: action.response,
        requestTime: action.requestTime
      }
    case ACTION_TYPES.SET_BODY:
      console.log({ ...state, body: action.body, bodyType: action.bodyType })
      return { ...state, body: action.body, bodyType: action.bodyType }
    case ACTION_TYPES.SET_HEADERS:
      console.log({ ...state, headers: action.headers })
      return { ...state, headers: action.headers }
    case ACTION_TYPES.SET_QUERY_PARAMS:
      console.log({ ...state, query: action.query })
      return { ...state, query: action.query }
    case ACTION_TYPES.REMOVE_CONTENT_TYPE: {
      const index = state.headers.findIndex(
        (header) => header.key === 'Content-Type'
      )
      if (index > -1) {
        state.headers.splice(index, 1)
      }
      console.log(state)
      return { ...state, bodyType: action.bodyType }
    }
    case ACTION_TYPES.REMOVE_FORM_CONTENT_TYPE: {
      const index = state.headers.findIndex(
        (header) => header.key === 'Content-Type'
      )
      if (
        index > -1 &&
        (state.headers[index].value === 'multipart/form-data' ||
          state.headers[index].value === 'application/x-www-form-urlencoded')
      ) {
        state.headers.splice(index, 1)
      }
      console.log(state)
      return { ...state, bodyType: action.bodyType, body: action.body }
    }
    case ACTION_TYPES.UPDATE_CONTENT_TYPE: {
      const index = state.headers.findIndex(
        (header) => header.key === 'Content-Type'
      )
      if (index > -1) {
        state.headers[index].value = action.contentType
      } else {
        state.headers.push({
          enabled: true,
          key: 'Content-Type',
          value: action.contentType,
          deletable: true
        })
      }
      console.log({ ...state })
      return { ...state }
    }
    default:
      throw new Error()
  }
}

const RequestProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {})
  return (
    <RequestStateContext.Provider value={state}>
      <RequestDispatchContext.Provider value={dispatch}>
        {children}
      </RequestDispatchContext.Provider>
    </RequestStateContext.Provider>
  )
}
const useRequestState = () => {
  const context = React.useContext(RequestStateContext)
  if (context === undefined) {
    throw new Error('useRequestState must be used within a RequestProvider')
  }
  return context
}
const useRequestDispatch = () => {
  const context = React.useContext(RequestDispatchContext)
  if (context === undefined) {
    throw new Error('useRequestDispatch must be used within a RequestProvider')
  }
  return context
}

const useRequest = () => {
  return [useRequestState(), useRequestDispatch()]
}

RequestProvider.ACTION_TYPES = ACTION_TYPES

export { RequestProvider, useRequestState, useRequestDispatch, useRequest }
