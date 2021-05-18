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
import { JsonSchema } from '../index'

const personSchema = {
  _id: 'https://example.com/arrays.schema.json',
  _schema: 'https://json-schema.org/draft/2020-12/schema',
  description: 'A representation of a person, company, organization, or place',
  required: null,
  properties: {
    fruits: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    vegetables: {
      type: 'array',
      items: {
        type: 'object',
        required: ['veggieName', 'veggieLike'],
        properties: {
          veggieName: {
            type: 'string',
            description: 'The name of the vegetable.'
          },
          veggieLike: {
            type: 'boolean',
            description: 'Do I like this vegetable?'
          }
        }
      }
    }
  },
  slug: '/arrays.schema.json',
  title: null,
  type: 'object',
  _defs: {
    veggie: {
      type: 'object',
      required: ['veggieName', 'veggieLike'],
      properties: {
        veggieName: {
          type: 'string',
          description: 'The name of the vegetable.'
        },
        veggieLike: {
          type: 'boolean',
          description: 'Do I like this vegetable?'
        }
      }
    }
  }
}

export default {
  title: 'components/JsonSchema'
}

export const Default = () => {
  const props = { schema: personSchema }
  return <JsonSchema {...props} />
}
