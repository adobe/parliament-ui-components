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

import React from 'react'
import { RequestProvider } from './RequestContext'
import { RequestMakerUI } from './RequestMakerUI'
import jsyaml from 'js-yaml'
import { Headers } from './Headers'
import { Query } from './Query'
import { Parameter } from './Parameter'
import { RequestBody } from './RequestBody'

const getBodyItems = (body) => {
  const items = []
  const getItems =
    Object.keys(body) && Object.keys(body).length > 0
      ? Object.keys(body).map((key) =>
          items.push({
            enabled: true,
            key: key,
            value: body[key],
            deletable: true
          })
        )
      : null
  return items
}

const jsonToJsx = (json) => {
  const query =
    json.query && Object.keys(json.query).length > 0 ? (
      <Query mdxType='query'>
        {Object.keys(json.query).map((query) => (
          <Parameter key={query} name={query}>
            {json.query[query]}
          </Parameter>
        ))}
      </Query>
    ) : null
  const headers =
    json.headers && Object.keys(json.headers).length > 0 ? (
      <Headers mdxType='headers'>
        {Object.keys(json.headers).map((header) => (
          <Parameter key={header} name={header}>
            {json.headers[header]}
          </Parameter>
        ))}
      </Headers>
    ) : null
  const body =
    json.body && typeof json.body !== 'string' ? (
      Object.values(json.headers)
        .toLocaleString()
        .toLowerCase()
        .split(',')
        .includes('application/x-www-form-urlencoded') ? (
        <RequestBody mdxType='requestbody' type='urlencoded'>
          {getBodyItems(json.body)}
        </RequestBody>
      ) : (
        <RequestBody mdxType='requestbody' type='form-data'>
          {getBodyItems(json.body)}
        </RequestBody>
      )
    ) : typeof json.body !== 'undefined' ? (
      <RequestBody mdxType='requestbody' type='raw'>
        {json.body}
      </RequestBody>
    ) : (
      <RequestBody mdxType='requestbody' type='none' />
    )
  return [query, headers, body]
}

const RequestMaker = ({ children, yaml = '', ...props }) => {
  const yamlJson = jsyaml.load(yaml)

  return yaml.length > 0 ? (
    <RequestProvider>
      <RequestMakerUI {...yamlJson}>{jsonToJsx(yamlJson)}</RequestMakerUI>
    </RequestProvider>
  ) : (
    <RequestProvider>
      <RequestMakerUI {...props}>{children}</RequestMakerUI>
    </RequestProvider>
  )
}

export { RequestMaker }
