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

const personSchema = {
  $id: "https://example.com/person.schema.json",
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "Person",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      description: "The person's first name.",
    },
    lastName: {
      type: "string",
      description: "The person's last name.",
    },
    age: {
      description: "Age in years which must be equal to or greater than zero.",
      type: "integer",
      minimum: 0,
    },
    huntingSkill: {
      type: "string",
      description: "The measured skill for hunting",
      default: "lazy",
      example: "adventurous",
      enum: ["clueless", "lazy", "adventurous", "aggressive"],
    },
  },
  required: ["firstName", "lastName"],
};

const addressSchema = {
  $id: "https://example.com/address.schema.json",
  $schema: "https://json-schema.org/draft/2020-12/schema",
  description: "An address similar to http://microformats.org/wiki/h-card",
  type: "object",
  properties: {
    "post-office-box": {
      type: "string",
    },
    "extended-address": {
      type: "string",
    },
    "street-address": {
      type: "string",
    },
    locality: {
      type: "string",
    },
    region: {
      type: "string",
    },
    "postal-code": {
      type: "string",
    },
    "country-name": {
      type: "string",
    },
  },
  required: ["locality", "region", "country-name"],
  dependentRequired: {
    "post-office-box": ["street-address"],
    "extended-address": ["street-address"],
  },
};

const houseSchema = {
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "http://example.com/root.json",
  type: "object",
  title: "The Root Schema",
  description:
    "The root schema is the schema that comprises the entire JSON document.",
  default: {},
  required: ["checked", "dimensions", "id", "name", "price", "tags"],
  properties: {
    checked: {
      $id: "#/properties/checked",
      type: "boolean",
      title: "The Checked Schema",
      description: "An explanation about the purpose of this instance.",
      default: false,
      examples: [false],
    },
    dimensions: {
      $id: "#/properties/dimensions",
      type: "object",
      title: "The Dimensions Schema",
      description: "An explanation about the purpose of this instance.",
      default: {},
      examples: [
        {
          height: 10.0,
          width: 5.0,
        },
      ],
      required: ["width", "height"],
      properties: {
        width: {
          $id: "#/properties/dimensions/properties/width",
          type: "integer",
          title: "The Width Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [5],
        },
        height: {
          $id: "#/properties/dimensions/properties/height",
          type: "integer",
          title: "The Height Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [10],
        },
      },
    },
    id: {
      $id: "#/properties/id",
      type: "integer",
      title: "The Id Schema",
      description: "An explanation about the purpose of this instance.",
      default: 0,
      examples: [1],
    },
    name: {
      $id: "#/properties/name",
      type: "string",
      title: "The Name Schema",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["A green door"],
    },
    price: {
      $id: "#/properties/price",
      type: "number",
      title: "The Price Schema",
      description: "An explanation about the purpose of this instance.",
      default: 0,
      examples: [12.5],
    },
    tags: {
      $id: "#/properties/tags",
      type: "array",
      title: "The Tags Schema",
      description: "An explanation about the purpose of this instance.",
      default: [],
      examples: [["home", "green"]],
      items: {
        $id: "#/properties/tags/items",
        type: "string",
        title: "The Items Schema",
        description: "An explanation about the purpose of this instance.",
        default: "",
        examples: ["home", "green"],
      },
    },
  },
};

export const schemas = {
  personSchema: personSchema,
  addressSchema: addressSchema,
  houseSchema_draft07: houseSchema,
};
