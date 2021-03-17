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

import React, { useRef, useState } from 'react'
import {
  Flex,
  Item,
  Picker,
  RadioGroup,
  Radio,
  Text,
  TextArea,
  View
} from '@adobe/react-spectrum'
import PropTypes from 'prop-types'
import { ParameterTable } from './ParameterTable'
import { RequestProvider, useRequestDispatch } from './RequestContext'

const RequestBody = ({ type = 'raw', contentType = 'text/plain', items }) => {
  const [selected, setSelected] = useState(type)
  const dispatch = useRequestDispatch()
  const fileRef = useRef()

  const onChangeHandler = (event) => {
    dispatch({
      type: RequestProvider.ACTION_TYPES.SET_BODY,
      body: event.target.files[0],
      bodyType: 'binary'
    })
    dispatch({
      type: RequestProvider.ACTION_TYPES.UPDATE_CONTENT_TYPE,
      contentType: event.target.files[0].type
    })
  }

  const updateBody = (type, data) => {
    console.log(type)
    switch (type) {
      case 'form-data': {
        data.filter((item) => item.enabled && item.key !== '')
        dispatch({
          type: RequestProvider.ACTION_TYPES.SET_BODY,
          bodyType: type,
          body: data
        })
        break
      }
      case 'urlencoded': {
        data.filter((item) => item.enabled && item.key !== '')
        dispatch({
          type: RequestProvider.ACTION_TYPES.SET_BODY,
          bodyType: type,
          body: data
        })
        break
      }
      case 'raw': {
        try {
          JSON.parse(data)
          dispatch({
            type: RequestProvider.ACTION_TYPES.UPDATE_CONTENT_TYPE,
            bodyType: type,
            contentType: 'application/json'
          })
        } catch (e) {
          console.log('not json')
        }
        dispatch({
          type: RequestProvider.ACTION_TYPES.SET_BODY,
          bodyType: type,
          body: data
        })
        break
      }
      case 'binary': {
        dispatch({
          type: RequestProvider.ACTION_TYPES.SET_BODY,
          bodyType: type
        })
        break
      }
      case 'none':
      default: {
        dispatch({
          type: RequestProvider.ACTION_TYPES.SET_BODY,
          bodyType: type,
          body: ''
        })
        break
      }
    }
  }

  const updateBodyType = (type) => {
    setSelected(type)
    console.log(type)
    switch (type) {
      case 'form-data': {
        dispatch({
          type: RequestProvider.ACTION_TYPES.UPDATE_CONTENT_TYPE,
          bodyType: type,
          contentType: 'multipart/form-data'
        })
        break
      }
      case 'urlencoded': {
        dispatch({
          type: RequestProvider.ACTION_TYPES.UPDATE_CONTENT_TYPE,
          bodyType: type,
          contentType: 'application/x-www-form-urlencoded'
        })
        break
      }
      case 'raw': {
        dispatch({
          type: RequestProvider.ACTION_TYPES.UPDATE_CONTENT_TYPE,
          bodyType: type,
          contentType: contentType
        })
        break
      }
      case 'binary': {
        // set your own content type
        dispatch({
          type: RequestProvider.ACTION_TYPES.REMOVE_FORM_CONTENT_TYPE,
          bodyType: type,
          body: null
        })
        break
      }
      case 'none':
      default: {
        dispatch({
          type: RequestProvider.ACTION_TYPES.REMOVE_CONTENT_TYPE,
          bodyType: type
        })
        break
      }
    }
  }

  const renderByType = (type, items) => {
    console.log(items)
    switch (type) {
      case 'form-data':
        return (
          <ParameterTable
            items={Array.isArray(items) ? items : []}
            callback={(data) => updateBody('form-data', data)}
          />
        )
      case 'urlencoded':
        return (
          <ParameterTable
            items={Array.isArray(items) ? items : []}
            callback={(data) => updateBody('urlencoded', data)}
          />
        )
      case 'raw':
        return (
          <TextArea
            minWidth='100%'
            minHeight='size-2400'
            onChange={(data) => updateBody('raw', data)}
            defaultValue={items}
          />
        )
      case 'binary':
        return (
          <View
            borderWidth='thin'
            borderRadius='medium'
            borderColor='dark'
            padding='size-250'
            backgroundColor='gray-50'
            minHeight='size-2400'
          >
            <input
              ref={fileRef}
              type='file'
              name='uploadFile'
              onChange={onChangeHandler}
            />
          </View>
        )
      case 'none':
      default:
        return (
          <View
            borderWidth='thin'
            borderRadius='medium'
            borderColor='dark'
            padding='size-250'
            backgroundColor='gray-50'
            minHeight='size-2400'
          >
            <Text>The request does not have a body</Text>
          </View>
        )
    }
  }

  return (
    <View>
      <Flex>
        <RadioGroup
          value={selected}
          orientation='horizontal'
          onChange={updateBodyType}
        >
          <Radio value='none'>none</Radio>
          <Radio value='form-data'>form-data</Radio>
          <Radio value='urlencoded'>x-www-form-urlencoded</Radio>
          <Radio value='raw'>raw</Radio>
          <Radio value='binary'>binary</Radio>
        </RadioGroup>
        {type === 'raw' ? (
          <Picker
            selectedKey={contentType}
            onSelectionChange={(selected) => {
              dispatch({
                type: RequestProvider.ACTION_TYPES.UPDATE_CONTENT_TYPE,
                bodyType: type,
                contentType: selected
              })
            }}
            isQuiet
          >
            <Item key='text/plain'>Text</Item>
            <Item key='application/javascript'>JavaScript</Item>
            <Item key='application/json'>JSON</Item>
            <Item key='text/html'>HTML</Item>
            <Item key='application/xml'>XML</Item>
          </Picker>
        ) : (
          ''
        )}{' '}
      </Flex>
      {renderByType(selected, items)}
    </View>
  )
}

RequestBody.propTypes = {
  children: PropTypes.element.isRequired
}

export { RequestBody }
