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
import React from 'react'
import { destructureProps, parseMetastring } from '../utils'
import { RequestMaker } from '../RequestMaker'
import { CodeUI } from '../CodeUI'

const Code = (props) => {
  const { children, metastring = '' } = destructureProps(props)

  const options = parseMetastring(metastring)
  const isRequestMaker = options.requestMaker ?? false

  return isRequestMaker ? (
    <RequestMaker yaml={children} />
  ) : (
    <CodeUI {...props} />
  )
}

export { Code }
