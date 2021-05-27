/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the schemaific language
 * governing permissions and limitations under the License.
 */

import React, { useState } from 'react'
import { Heading, View, TextArea } from '@adobe/react-spectrum'
import { validate } from 'jsonschema'
import ReactJson from 'react-json-view'

const cleanupResults = (data) => {
  if (data.errors === undefined) {
    return data
  }

  data.errors.map((error) => {
    delete error.instance
  })
  return data
}

export const JsonSchemaValidate = ({ schema = {} }) => {
  const [results, setResults] = useState(cleanupResults(validate({}, schema)))

  const validateData = (data) => {
    const retval = validate(JSON.parse(data), schema)
    setResults(cleanupResults(retval))
  }

  return (
    <View key={name}>
      <TextArea
        minWidth='100%'
        minHeight='size-2400'
        onChange={(data) => validateData(data)}
        defaultValue={{}}
      />
      <Heading level={2}>
        <strong>Your instance is valid:</strong> {String(results.valid)}
      </Heading>
      <Heading level={2}>Errors</Heading>
      <ReactJson src={results.errors} name={false} indentWidth={2} />
    </View>
  )
}
