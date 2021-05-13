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
import { Flex, Heading, View } from '@adobe/react-spectrum'
import { InlineCode } from '../InlineCode'
import { Table, TBody, Tr, Td } from '../Table'

export const JsonSchema = ({ schema = {}, ...props }) => {
  const { title, type, properties = [], required = [] } = schema
  return (
    <div {...props}>
      {title && <Heading level={1}>{title}</Heading>}
      {type && <Heading level={2}>Type: {type}</Heading>}
      <JsonSchemaProperties properties={properties} required={required} />
    </div>
  )
}

const JsonSchemaProperties = ({ properties, required }) => {
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
              <JsonSchemaPropertyDetails name={key} properties={properties} />
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  ) : null
}

const JsonSchemaPropertyDetails = ({ name, properties }) => {
  const propKeys = Object.keys(properties[name])
  return (
    <Flex direction='column'>
      {propKeys.map((prop) => {
        return (
          <JsonSchemaProperty
            key={prop}
            name={prop}
            property={properties[name][prop]}
          />
        )
      })}
    </Flex>
  )
}

const excludeLabelProps = ['description']

const JsonSchemaProperty = ({ name, property }) => {
  return (
    <View key={name}>
      <JsonSchemaPropertyLabel name={name} />
      {getJsonSchemaPropertyByType(name, property)}
    </View>
  )
}

const JsonSchemaPropertyLabel = ({ name }) =>
  !excludeLabelProps.includes(name) ? (
    <span
      style={{
        textTransform: 'capitalize'
      }}
    >
      {name}:&nbsp;
    </span>
  ) : null

const getJsonSchemaPropertyByType = (name, property) => {
  switch (typeof property) {
    case 'number':
      return property
    case 'object':
      return Array.isArray(property) ? (
        <>
          {property.map((item) => (
            <InlineCode key={item}>{item}</InlineCode>
          ))}{' '}
        </>
      ) : (
        property
      )
    default:
      return excludeLabelProps.includes(name) ? (
        property
      ) : (
        <InlineCode>{property}</InlineCode>
      )
  }
}
