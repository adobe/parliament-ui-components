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

const OpenApi2Definitions = {
  ApiResponse: {
    type: 'object',
    properties: {
      code: {
        type: 'integer',
        format: 'int32'
      },
      type: {
        type: 'string'
      },
      message: {
        type: 'string'
      }
    }
  },
  Cat: {
    description: 'A representation of a cat',
    allOf: [
      {
        $ref: '#/definitions/Pet'
      },
      {
        type: 'object',
        properties: {
          huntingSkill: {
            type: 'string',
            description: 'The measured skill for hunting',
            default: 'lazy',
            enum: ['clueless', 'lazy', 'adventurous', 'aggressive']
          }
        },
        required: ['huntingSkill']
      }
    ]
  },
  Category: {
    type: 'object',
    properties: {
      id: {
        description: 'Category ID',
        allOf: [
          {
            $ref: '#/definitions/Id'
          }
        ]
      },
      name: {
        description: 'Category name',
        type: 'string',
        minLength: 1
      },
      sub: {
        description: 'Test Sub Category',
        type: 'object',
        properties: {
          prop1: {
            type: 'string',
            description: 'Dumb Property'
          }
        }
      }
    },
    xml: {
      name: 'Category'
    }
  },
  Dog: {
    description: 'A representation of a dog',
    allOf: [
      {
        $ref: '#/definitions/Pet'
      },
      {
        type: 'object',
        properties: {
          packSize: {
            type: 'integer',
            format: 'int32',
            description: 'The size of the pack the dog is from',
            default: 1,
            minimum: 1
          }
        },
        required: ['packSize']
      }
    ]
  },
  HoneyBee: {
    description: 'A representation of a honey bee',
    allOf: [
      {
        $ref: '#/definitions/Pet'
      },
      {
        type: 'object',
        properties: {
          honeyPerDay: {
            type: 'number',
            description: 'Average amount of honey produced per day in ounces',
            example: 3.14
          }
        },
        required: ['honeyPerDay']
      }
    ]
  },
  Id: {
    type: 'integer',
    format: 'int64'
  },
  Order: {
    type: 'object',
    properties: {
      id: {
        description: 'Order ID',
        allOf: [
          {
            $ref: '#/definitions/Id'
          }
        ]
      },
      petId: {
        description: 'Pet ID',
        allOf: [
          {
            $ref: '#/definitions/Id'
          }
        ]
      },
      quantity: {
        type: 'integer',
        format: 'int32',
        minimum: 1,
        default: 1
      },
      shipDate: {
        description: 'Estimated ship date',
        type: 'string',
        format: 'date-time'
      },
      status: {
        type: 'string',
        description: 'Order Status',
        enum: ['placed', 'approved', 'delivered']
      },
      complete: {
        description: 'Indicates whenever order was completed or not',
        type: 'boolean',
        default: false
      }
    },
    xml: {
      name: 'Order'
    }
  },
  AnalyticsCalculatedMetric: {
    type: 'object',
    required: ['name', 'photoUrls'],
    discriminator: 'petType',
    properties: {
      id: {
        description: 'Pet ID',
        allOf: [
          {
            $ref: '#/definitions/Id'
          }
        ]
      },
      category: {
        description: 'Categories this pet belongs to',
        allOf: [
          {
            $ref: '#/definitions/Category'
          }
        ]
      },
      name: {
        description: 'The name given to a pet',
        type: 'string',
        example: 'Guru'
      },
      photoUrls: {
        description: 'The list of URL to a cute photos featuring pet',
        type: 'array',
        xml: {
          name: 'photoUrl',
          wrapped: true
        },
        items: {
          type: 'string',
          format: 'url'
        }
      },
      tags: {
        description: 'Tags attached to the pet',
        type: 'array',
        xml: {
          name: 'tag',
          wrapped: true
        },
        items: {
          $ref: '#/definitions/Tag'
        }
      },
      status: {
        type: 'string',
        description: 'Pet status in the store',
        enum: ['available', 'pending', 'sold']
      },
      petType: {
        description: 'Type of a pet',
        type: 'string'
      }
    },
    xml: {
      name: 'Pet'
    }
  },
  Tag: {
    type: 'object',
    properties: {
      id: {
        description: 'Tag ID',
        allOf: [
          {
            $ref: '#/definitions/Id'
          }
        ]
      },
      name: {
        description: 'Tag name',
        type: 'string',
        minLength: 1
      }
    },
    xml: {
      name: 'Tag'
    }
  }
}

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
    items: OpenApi2Params,
    definitions: OpenApi2Definitions
  }

  return <Parameters {...props} />
}
