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
import { Grid } from '@react-spectrum/layout'
import { View } from '@react-spectrum/view'

import { Paragraph } from '../Paragraph'
import Parameters from '../Parameters'
import Verb from './Verb'

import '@spectrum-css/typography'

const Paths = ({ tag = '', spec = {} }) => {
  const paths = Object.entries(spec.paths).filter(
    ([url, routes]) =>
      Object.entries(routes).filter(([verb, obj]) => {
        return obj.tags.includes(tag)
      }).length > 0
  )

  return (
    <React.Fragment>
      {paths.map(([path, verbs]) => {
        return Object.entries(verbs).map(([verb, obj]) => {
          return <Path path={path} verb={verb} data={obj} spec={spec} />
        })
      })}
    </React.Fragment>
  )
}

const Path = ({ path = '', verb = '', data = {}, spec = {} }) => {
  return (
    <Grid
      areas={['reference  code']}
      columns={['7fr', '5fr']}
      rows={['auto']}
      gap='size-400'
      marginBotton='size-400'
    >
      <View gridArea='reference'>
        <div>
          <h1 className='spectrum-Heading spectrum-Heading--M spectrum-Heading--light'>
            <Verb label={verb} />
            <strong>{data.summary}</strong>
          </h1>
          <Divider marginBottom='size-400' />
        </div>
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
        <Parameters items={data.parameters} definitions={spec.definitions} />
      </View>
      <View gridArea='code' UNSAFE_style={{ backgroundColor: '#323232' }}>
        code{' '}
      </View>
    </Grid>
  )
}

Paths.propTypes = {
  tag: PropTypes.string,
  spec: PropTypes.object
}

export default Paths
