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
import Query from './Query'
import Parameter from './Parameter'

const params = (key, element, json) => {
  return (
    <Parameter name={key}>{json[element][key]}</Parameter>
  )
}

const jsonQuery = (json) => {
  return (
    <Query>
      {Object.keys(json['query']).map(query => params(query, 'query', json))}
    </Query>
  )
}
const jsonHeaders = (json) => {
  return (
    <Headers>
      {Object.keys(json['headers']).map(header => params(header, 'headers', json))}
    </Headers>
  )
}

const jsonToJsx = (json) => {
  const query = json["query"] && Object.keys(json["query"]).length > 0 ? jsonQuery(json) : null
  const headers = json["headers"] && Object.keys(json["headers"]).length > 0 ? jsonHeaders(json): null
  console.log("dekh")
  console.log([query, headers])
  return (
    [query, headers]
  )

}

const RequestMaker = ({ children, yaml='', ...props }) => {
  const yamlJson = jsyaml.load(yaml)
  console.log(yamlJson)
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
