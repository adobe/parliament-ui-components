/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { OpenAPIBlock } from "../index";

export default {
  title: "components/OpenAPIBlock",
  decorators: [withKnobs],
};

export const OpenAPIStory = () => (
  <OpenAPIBlock
    specUrl={text(
      "Spec URL",
      "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.json"
    )}
  />
);

export const OpenAPIPrivateStory = () => (
  <OpenAPIBlock
    spec={{
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "Swagger Petstore",
        license: {
          name: "MIT",
        },
      },
      servers: [
        {
          url: "http://petstore.swagger.io/v1",
        },
      ],
      paths: {
        "/pets": {
          get: {
            summary: "List all pets",
            operationId: "listPets",
            tags: ["pets"],
            parameters: [
              {
                name: "limit",
                in: "query",
                description: "How many items to return at one time (max 100)",
                required: false,
                schema: {
                  type: "integer",
                  format: "int32",
                },
              },
            ],
            responses: {
              200: {
                description: "A paged array of pets",
                headers: {
                  "x-next": {
                    description: "A link to the next page of responses",
                    schema: {
                      type: "string",
                    },
                  },
                },
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Pets",
                    },
                  },
                },
              },
              default: {
                description: "unexpected error",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Error",
                    },
                  },
                },
              },
            },
          },
          post: {
            summary: "Create a pet",
            operationId: "createPets",
            tags: ["pets"],
            responses: {
              201: {
                description: "Null response",
              },
              default: {
                description: "unexpected error",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Error",
                    },
                  },
                },
              },
            },
          },
        },
        "/pets/{petId}": {
          get: {
            "x-internal": true,
            summary: "Info for a specific pet",
            operationId: "showPetById",
            tags: ["pets"],
            parameters: [
              {
                name: "petId",
                in: "path",
                required: true,
                description: "The id of the pet to retrieve",
                schema: {
                  type: "string",
                },
              },
            ],
            responses: {
              200: {
                description: "Expected response to a valid request",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Pet",
                    },
                  },
                },
              },
              default: {
                description: "unexpected error",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Error",
                    },
                  },
                },
              },
            },
          },
        },
      },
      components: {
        schemas: {
          Pet: {
            type: "object",
            required: ["id", "name"],
            properties: {
              id: {
                type: "integer",
                format: "int64",
              },
              name: {
                type: "string",
              },
              tag: {
                type: "string",
              },
            },
          },
          Pets: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Pet",
            },
          },
          Error: {
            type: "object",
            required: ["code", "message"],
            properties: {
              code: {
                type: "integer",
                format: "int32",
              },
              message: {
                type: "string",
              },
            },
          },
        },
      },
    }}
  />
);

export const OpenAPIStorySwaggerUI = () => (
  <OpenAPIBlock
    engine="swagger-ui"
    specUrl={text(
      "Spec URL",
      "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.json"
    )}
  />
);
