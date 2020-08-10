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
import React from 'react'
import PropTypes from 'prop-types'

import { Divider } from '@react-spectrum/divider'
import { Grid, Flex } from '@react-spectrum/layout'
import { View } from '@react-spectrum/view'
import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

import { Link } from '../Link'
import { Paragraph } from '../Paragraph'
import { Table, TBody, Tr, Td } from '../Table'

import '@spectrum-css/tags'
import '@spectrum-css/typography'
import '@spectrum-css/well'

// Duplicate code from Parameters
const buildTag = (label) => (
  <div className='spectrum-Tags-item' role='listitem'>
    <span className='spectrum-Tags-itemLabel'>{label}</span>
  </div>
)

const Models = ({ spec = {} }) => {
  const definitions = spec.swagger ? spec.definitions : spec.components.schemas

  return (
    <React.Fragment>
      <h1 className='spectrum-Heading spectrum-Heading--L spectrum-Heading--light'>
        <strong>Models</strong>
      </h1>

      {Object.entries(definitions).map(([name, data]) => {
        return (
          <Model key={name} name={name} data={data} definitions={definitions} />
        )
      })}
    </React.Fragment>
  )
}

const Model = ({ key = '', name = '', data = {}, definitions = {} }) => {
  return (
    <Grid
      areas={['reference  code']}
      columns={['7fr', '5fr']}
      rows={['auto']}
      gap='size-400'
      marginBotton='size-400'
    >
      <View gridArea='reference'>
        <h1
          id={name}
          className='spectrum-Heading spectrum-Heading--M spectrum-Heading--light'
        >
          <strong>{name}</strong>
        </h1>
        <Divider marginBottom='size-400' />
        <Paragraph
          css={css`
            margin-bottom: var(
              --spectrum-global-dimension-size-400,
              var(--spectrum-alias-size-400)
            );
          `}
        >
          {data.description}
        </Paragraph>
        <ModelTable data={data} definitions={definitions} />
      </View>
      <View gridArea='code'>
        <Provider theme={theme} colorScheme='dark'>
          <span className='spectrum-Well'>Code</span>
        </Provider>
      </View>
    </Grid>
  )
}

const getObjectName = (path) => {
  const name = path.split('/')
  return name[name.length - 1]
}

const ModelTable = ({ data, definitions }) => {
  let properties = Object.entries(data.properties || {})
  if (data.allOf) {
    data.allOf.map((entry) => {
      if (entry.$ref) {
        const path = getObjectName(entry.$ref)
        properties = [
          ...properties,
          ...Object.entries(definitions[path].properties)
        ]
      }
      if (entry.type) {
        properties = [...properties, ...Object.entries(entry.properties)]
      }
    })
  }
  return (
    <Table
      isQuiet
      css={css`
        width: 100%;
      `}
    >
      <TBody>
        {properties.map(([name, value]) => {
          return (
            <Tr key={name}>
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
                    {value.allOf ? (
                      <Link href={`#${getObjectName(value.allOf[0].$ref)}`}>
                        {name}
                      </Link>
                    ) : (
                      name
                    )}
                  </span>
                </Flex>
              </Td>
              <Td
                css={css`
                  text-transform: uppercase;
                  width: 10%;
                `}
              >
                {value.type ? buildTag(value.type) : null}
                {value.allOf ? buildTag('object') : null}
              </Td>
              <Td
                css={css`
                  width: 70%;
                `}
              >
                {value.description}
              </Td>
            </Tr>
          )
        })}
      </TBody>
    </Table>
  )
}

Models.propTypes = {
  tag: PropTypes.string,
  spec: PropTypes.object
}

export default Models
