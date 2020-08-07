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
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@react-spectrum/layout'
import { View } from '@react-spectrum/view'

import Info from './Info'
import Models from './Models'
import Paths from './Paths'
import Tag from './Tag'

import '@spectrum-css/tags'
import '@spectrum-css/typography'

const OpenApi = ({ spec = {} }) => {
  return (
    <Grid
      areas={['intro empty', 'meat meat']}
      columns={['9fr', '3fr']}
      rows={['auto', 'auto']}
      gap='size-400'
      marginBotton='size-400'
    >
      <View gridArea='intro'>
        <Info info={spec.info} />
      </View>
      <View gridArea='empty' />
      <View gridArea='meat'>
        {spec.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Tag name={tag.name} description={tag.summary} />
            <Paths tag={tag.name} spec={spec} />
          </React.Fragment>
        ))}
        <Models spec={spec} />
      </View>
    </Grid>
  )
}

OpenApi.propTypes = {
  spec: PropTypes.object
}

export default OpenApi
