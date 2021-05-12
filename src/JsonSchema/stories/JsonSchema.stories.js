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
  $id: 'https://example.com/person.schema.json',
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: 'Person',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      description: "The person's first name."
    },
    lastName: {
      type: 'string',
      description: "The person's last name."
    },
    age: {
      description: 'Age in years which must be equal to or greater than zero.',
      type: 'integer',
      minimum: 0
    },
    huntingSkill: {
      type: 'string',
      description: 'The measured skill for hunting',
      default: 'lazy',
      example: 'adventurous',
      enum: ['clueless', 'lazy', 'adventurous', 'aggressive']
    }
  },
  required: ['firstName', 'lastName']
}

export default {
  title: 'components/JsonSchema'
}

export const Default = () => {
  const props = { schema: personSchema }
  return <JsonSchema {...props} />
}
