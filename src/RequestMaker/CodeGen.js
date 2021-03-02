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
import { View, Picker, Item } from '@adobe/react-spectrum'
import HTTPSnippet from 'httpsnippet'
import { Code } from '../Code'

const CodeGen = ({
  CodeGen = 'shell_curl',
  method,
  url,
  children,
  ...props
}) => {
  const options = [
    {
      name: 'cURL',
      id: 'shell_curl'
    },
    {
      name: 'Node.js (fetch)',
      id: 'node_fetch'
    },
    {
      name: 'Node.js (request)',
      id: 'node_request'
    },
    {
      name: 'Javascript (fetch)',
      id: 'javascript_fetch'
    },
    {
      name: 'Javascript (axios)',
      id: 'javascript_axios'
    },
    {
      name: 'Javascript (jQuery)',
      id: 'javascript_jquery'
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
      name: 'C',
      id: 'c'
    },
    {
      name: 'R',
      id: 'r'
    },
    {
      name: 'Go',
      id: 'go_native'
    },
    {
      name: 'python',
      id: 'python'
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

  const renderByCode = (lang) => {
    const snippet = new HTTPSnippet({
      method: method,
      url: url
    })
    const langs = lang.split('_')
    const code = snippet.convert(langs[0], langs[1]) + '\n'
    const props = {
      className: `js`
    }
    return <Code {...props}>{code}</Code>
  }

  return (
    <View>
      <Picker
        width='size-1250'
        marginBottom='size-100'
        items={options}
        selectedKey={selected}
        onSelectionChange={(selected) => setSelected(selected)}
      >
        {(item) => <Item key={item.id}>{item.name}</Item>}
      </Picker>
      {renderByCode(selected)}
    </View>
  )
}

export { CodeGen }
