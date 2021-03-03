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

import React, { useState } from 'react'
import { RadioGroup, Radio, Text, TextArea, View } from '@adobe/react-spectrum'
import PropTypes from 'prop-types'
import { ParameterTable } from './ParameterTable'

const Body = ({ type = 'none', children }) => {
  const [selected, setSelected] = useState(type)

  const renderByType = (type) => {
    switch (type) {
      case 'form-data':
        return <ParameterTable items={[]} />
      case 'urlencoded':
        return <ParameterTable items={[]} />
      case 'raw':
        return <TextArea minWidth='100%' minHeight='size-2000' />
      case 'binary':
        break
      case 'none':
      default:
        return <Text>The request does not have a body</Text>
    }
  }

  return (
    <View>
      <RadioGroup
        value={selected}
        orientation='horizontal'
        onChange={setSelected}
      >
        <Radio value='none'>none</Radio>
        <Radio value='form-data'>form-data</Radio>
        <Radio value='urlencoded'>x-www-form-urlencoded</Radio>
        <Radio value='raw'>raw</Radio>
        <Radio value='binary'>binary</Radio>
      </RadioGroup>
      <View
        borderWidth='thin'
        borderRadius='medium'
        borderColor='dark'
        padding='size-250'
        backgroundColor='gray-75'
        minHeight='size-2400'
      >
        {renderByType(selected)}
      </View>
    </View>
  )
}

Body.propTypes = {
  children: PropTypes.element.isRequired
}

export { Body }
