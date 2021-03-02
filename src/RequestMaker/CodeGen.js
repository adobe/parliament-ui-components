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
import { Text, View, Picker, Item } from '@adobe/react-spectrum'
import PropTypes from 'prop-types'

const CodeGen = ({ CodeGen = 'cURL', children }) => {
  const options = [
    {
      name:'cURL',
      id: 'shell_curl'
    },
    {
      name: 'Node.js',
      id: 'node_request'
    },
    {
      name: 'PHP',
      id: 'php_http1'
    },
    {
      name: 'Java',
      id: 'java_unirest'
    },
    {
      name: 'Go',
      id: 'go_native'
    },
    {
      name: 'python',
      id: 'python_python3'
    },
    {
      name: 'C#',
      id: 'csharp_restsharp'
    },
    {
      name: 'Ruby',
      id: 'ruby_native'
    }
  ]
  const [selected, setSelected] = useState(CodeGen)

  const renderByType = (type) => {
    return <Text>{type} selected!</Text>
  }

  return (
    <View>
      <Picker
        width='size-1250'
        items={options}
        selectedKey={selected}
        onSelectionChange={(selected) => setSelected(selected)}
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Picker>
      <br />
      <View
        borderWidth='thin'
        borderRadius='medium'
        borderColor='dark'
        padding='size-250'
        marginTop='size-100'
        mar
        backgroundColor='gray-75'
        minHeight='size-2400'
      >
        {renderByType(selected)}
      </View>
    </View>
  )
}

CodeGen.propTypes = {
  children: PropTypes.element.isRequired
}

export { CodeGen }
