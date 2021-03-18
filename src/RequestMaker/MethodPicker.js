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
import { Picker, Item } from '@adobe/react-spectrum'
import { RequestProvider, useRequestDispatch } from './RequestContext'

const options = [
  { id: 'get', name: 'GET' },
  { id: 'put', name: 'PUT' },
  { id: 'post', name: 'POST' },
  { id: 'delete', name: 'DELETE' },
  { id: 'options', name: 'OPTIONS' },
  { id: 'head', name: 'HEAD' },
  { id: 'patch', name: 'PATCH' }
]

const filterOptions = (methods) => {
  if (!methods) {
    return options
  }
  if (typeof methods === 'string') {
    const verbOptions = methods
      .split(',')
      .map((method) => method.trim().toLowerCase())
    return options.filter((option) => verbOptions.includes(option.id))
  } else if (Array.isArray(methods)) {
    console.log(options.filter((option) => methods.includes(option.name)))
    return options.filter((option) => methods.includes(option.name))
  }
  return options
}

const MethodPicker = ({ methods, defaultMethod }) => {
  const dispatch = useRequestDispatch()
  const verbOptions = filterOptions(methods)
  const [selected, setSelected] = useState(defaultMethod || verbOptions[0].name)

  const updateState = (method) => {
    setSelected(method)
    dispatch({
      type: RequestProvider.ACTION_TYPES.SET_METHOD,
      method
    })
  }

  useEffect(() => {
    updateState(defaultMethod)
  }, [])

  return (
    <Picker
      width='size-1250'
      items={verbOptions}
      selectedKey={selected}
      onSelectionChange={updateState}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </Picker>
  )
}

MethodPicker.propTypes = {}

export { MethodPicker }
