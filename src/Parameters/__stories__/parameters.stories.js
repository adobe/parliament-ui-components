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
import React from 'react'

import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'

import Parameters from '../index'

const OpenApi2Params = [
  {
    in: 'body',
    name: 'body',
    description:
      'JSON-formatted Object containing key/value pairs for calculated metric creation.',
    required: false,
    schema: {
      $ref: '#/definitions/AnalyticsCalculatedMetric'
    }
  },
  {
    name: 'locale',
    in: 'query',
    description: 'Locale',
    required: false,
    type: 'string',
    default: 'en_US'
  },
  {
    name: 'expansion',
    in: 'query',
    description:
      'Comma-delimited list of additional calculated metric metadata fields to include on response.',
    required: false,
    type: 'array',
    items: {
      type: 'string',
      enum: [
        'reportSuiteName',
        'ownerFullName',
        'modified',
        'tags',
        'definition',
        'compatibility',
        'categories'
      ]
    },
    collectionFormat: 'csv',
    enum: [
      'reportSuiteName',
      'ownerFullName',
      'modified',
      'tags',
      'definition',
      'compatibility',
      'categories'
    ]
  },
  {
    name: 'petId',
    in: 'path',
    description: 'ID of pet to return',
    required: true,
    type: 'integer',
    format: 'int64'
  },
  {
    name: 'Accept-Language',
    in: 'header',
    description:
      'The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US',
    example: 'en-US',
    required: false,
    schema: {
      type: 'string',
      default: 'en-AU'
    }
  },
  {
    name: 'cookieParam',
    in: 'cookie',
    description: 'Some cookie',
    required: true,
    schema: {
      type: 'integer',
      format: 'int64'
    }
  }
]

const Wrapper = (storyFn) => {
  return (
    <Provider theme={theme} colorScheme='light'>
      {storyFn()}
    </Provider>
  )
}

export default {
  title: 'components/Parameters',
  decorators: [Wrapper]
}

export const ParametersOpenApi2 = () => {
  const props = {
    items: OpenApi2Params
  }

  return <Parameters {...props} />
}
