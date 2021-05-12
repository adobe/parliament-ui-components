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

import React from 'react'
import { Flex, Heading, Text, View } from '@adobe/react-spectrum'
import { InlineCode } from '../InlineCode'
import { Table, TBody, Tr, Td } from '../Table'

export const JsonSchema = ({ schema = {}, ...props }) => {
  const { title, type } = schema
  return (
    <div {...props}>
      {title && <Heading level={1}>{title}</Heading>}
      {type && <Heading level={2}>Type: {type}</Heading>}
      <JsonSchemaProperties schema={schema} />
    </div>
  )
}

const JsonSchemaProperties = ({ schema }) => {
  const { properties, required = [] } = schema
  console.log(Object.keys(properties) > 0)
  return Object.keys(properties).length > 0 ? (
    <Table>
      <TBody>
        {Object.keys(properties).map((key) => (
          <Tr key={key}>
            <Td>
              <Flex direction='column'>
                <View>{key}</View>
                {required.includes(key) && (
                  <View>
                    <span
                      style={{
                        color: 'var(--spectrum-global-color-red-400)'
                      }}
                    >
                      required
                    </span>
                  </View>
                )}
              </Flex>
            </Td>
            <Td>
              <JsonSchemaPropertyDetails name={key} schema={schema} />
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  ) : null
}

const JsonSchemaPropertyDetails = ({ name, schema }) => {
  const {
    type,
    description,
    default: defaultValue,
    example,
    enum: enumValue
  } = schema.properties[name]
  return (
    <Flex direction='column'>
      {type && (
        <View>
          <InlineCode>{type}</InlineCode>
        </View>
      )}
      {defaultValue && (
        <View>
          Default: <InlineCode>{defaultValue}</InlineCode>
        </View>
      )}
      {enumValue && (
        <View>
          Enum:{' '}
          {enumValue.map((item) => (
            <InlineCode key={item}>{item}</InlineCode>
          ))}
        </View>
      )}
      {description && (
        <View>
          <Text>{description}</Text>
        </View>
      )}
    </Flex>
  )
}
