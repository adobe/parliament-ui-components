/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import { Flex } from '@react-spectrum/layout'

import { Paragraph } from '../Paragraph'
import { Table, TBody, Tr, Td } from '../SpectrumTable'

import '@spectrum-css/tags'
import '@spectrum-css/typography'

const buildTag = (label) => (
  <div className='spectrum-Tags-item' role='listitem'>
    <span className='spectrum-Tags-itemLabel'>{label}</span>
  </div>
)

const ParametersTable = ({ title, items, description }) => (
  <div
    css={css`
      margin-bottom: var(
        --spectrum-global-dimension-size-400,
        var(--spectrum-alias-size-400)
      );
    `}
  >
    <div
      className='spectrum-Body--M'
      css={css`
        margin-bottom: var(
          --spectrum-global-dimension-size-200,
          var(--spectrum-alias-size-200)
        );
      `}
    >
      <strong>{title}</strong>
    </div>
    {description ? <Paragraph>{description}</Paragraph> : undefined}
    <Table
      isQuiet
      css={css`
        width: 100%;
      `}
    >
      <TBody>
        {items.map((item, index) => (
          <Tr key={index}>
            <Td
              className='spectrum-Code spectrum-Code--S'
              css={css`
                width: 20%;
              `}
            >
              <Flex direction='column'>
                <span
                  css={css`
                    font-weight: 700;
                  `}
                >
                  {item.name}
                </span>
                <span
                  css={css`
                    color: var(--spectrum-global-color-red-700);
                  `}
                >
                  {item.required ? 'required' : undefined}
                </span>
              </Flex>
            </Td>
            <Td
              css={css`
                text-transform: uppercase;
                width: 10%;
              `}
            >
              {item.type ? buildTag(item.type) : undefined}
              {item.schema ? buildTag(item.schema.type) : undefined}
            </Td>
            <Td
              css={css`
                width: 70%;
              `}
            >
              {item.description}
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  </div>
)

const extractDefinitionName = (schema) => {
  if (schema.$ref) {
    const path = schema.$ref.split('/')
    return path[path.length - 1]
  } else {
    return ''
  }
}

const createBodyItems = (bodyParams, definitions) => {
  const bodyItems = []
  if (bodyParams.length > 0) {
    const definitionName = extractDefinitionName(bodyParams[0].schema)
    console.log(definitionName)
    // console.log(definitions[definitionName].properties)
    if (definitions[definitionName] && definitions[definitionName].properties) {
      Object.entries(definitions[definitionName].properties).map(
        ([key, value]) => {
          bodyItems.push({
            name: key,
            description: value.description,
            type: value.type,
            required: value.required
          })
        }
      )
    }
  }

  return bodyItems
}

const Parameters = ({ items = [], definitions = {}, spec = {} }) => {
  const queryParams = items.filter((item) => item.in === 'query')
  const headerParams = items.filter((item) => item.in === 'header')
  const pathParams = items.filter((item) => item.in === 'path')
  const cookieParams = items.filter((item) => item.in === 'cookie')
  const bodyParams = items.filter((item) => item.in === 'body')

  console.log(definitions)

  const bodyDefinitions = createBodyItems(bodyParams, definitions)

  return (
    <div>
      {cookieParams.length > 0 ? (
        <ParametersTable title='Cookie Parameters' items={cookieParams} />
      ) : undefined}
      {headerParams.length > 0 ? (
        <ParametersTable title='Header Parameters' items={headerParams} />
      ) : undefined}
      {pathParams.length > 0 ? (
        <ParametersTable title='Path Parameters' items={pathParams} />
      ) : undefined}
      {queryParams.length > 0 ? (
        <ParametersTable title='Query Parameters' items={queryParams} />
      ) : undefined}
      {bodyParams.length > 0 ? (
        <ParametersTable
          title='Request Body Schema'
          items={bodyDefinitions}
          description={bodyParams[0].description}
        />
      ) : undefined}
    </div>
  )
}

Parameters.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

export default Parameters
