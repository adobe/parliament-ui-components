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

import React, { useState } from 'react'
import { View, Picker, Item } from '@adobe/react-spectrum'
import { Code } from '../Code'
const HTTPSnippet =
  typeof window !== `undefined` ? require('httpsnippet') : null

const CodeGen = ({ CodeGen = 'shell_curl', url, options }) => {
  const codeOptions = [
    {
      name: 'cURL',
      id: 'shell_curl',
      lang: 'shell'
    },
    {
      name: 'Node.js (fetch)',
      id: 'node_fetch',
      lang: 'js'
    },
    {
      name: 'Node.js (request)',
      id: 'node_request',
      lang: 'js'
    },
    {
      name: 'Javascript (fetch)',
      id: 'javascript_fetch',
      lang: 'js'
    },
    {
      name: 'Javascript (axios)',
      id: 'javascript_axios',
      lang: 'js'
    },
    {
      name: 'python',
      id: 'python_requests',
      lang: 'python'
    },
    {
      name: 'PHP',
      id: 'php_http2'
    },
    {
      name: 'Java',
      id: 'java_unirest'
    },
    {
      name: 'Ruby',
      id: 'ruby_native'
    },
    {
      name: 'Kotlin',
      id: 'kotlin'
    },
    {
      name: 'Swift',
      id: 'swift'
    },
    {
      name: 'R',
      id: 'r'
    },
    {
      name: 'Go',
      id: 'go_native',
      lang: 'go'
    },
    {
      name: 'C',
      id: 'c',
      lang: 'c'
    },
    {
      name: 'C#',
      id: 'csharp_restsharp'
    }
  ]
  const [selected, setSelected] = useState(CodeGen)
  const getNameValArray = (items) => {
    items = Array.isArray(items) ? items : []
    return items
      .filter((item) => item.enabled && item.key !== '')
      .map((item) => {
        return { name: item.key, value: item.value }
      })
  }
  const getPostData = (options) => {
    const postData = {}
    if (
      options.method &&
      options.method !== 'GET' &&
      options.method !== 'HEAD' &&
      options.method !== 'OPTIONS'
    ) {
      if (options.bodyType === 'raw') {
        postData.mimeType = 'text/plain'
        postData.text = options.body
      } else if (options.bodyType === 'form-data') {
        postData.mimeType = 'multipart/form-data'
        postData.params = options.body ? getNameValArray(options.body) : []
      } else if (options.bodyType === 'urlencoded') {
        postData.mimeType = 'application/x-www-form-urlencoded'
        postData.params = options.body ? getNameValArray(options.body) : []
      }
    }
    return postData
  }
  const renderByCode = (id) => {
    const snippet = new HTTPSnippet({
      method: options.method || 'GET',
      url: url,
      headers: getNameValArray(options.headers),
      postData: getPostData(options)
    })

    const langs = id.split('_')
    const code = snippet.convert(langs[0], langs[1]) + '\n'
    const props = {
      className: codeOptions.find((item) => item.id === id).lang || 'js'
    }
    return <Code {...props}>{code}</Code>
  }

  return (
    <View>
      <Picker
        width='size-1600'
        marginBottom='size-100'
        items={codeOptions}
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
