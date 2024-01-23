/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the schemaific language
 * governing permissions and limitations under the License.
 */
import React from "react";
import { Heading, Item, TabList, TabPanels, Tabs } from "@adobe/react-spectrum";
import { JsonSchemaView, JsonSchemaProperty } from "./JsonSchemaView";
import { JsonSchemaValidate } from "./JsonSchemaValidate";
import { JsonSchemaRaw } from "./JsonSchemaRaw";
import { JsonSchemaInfo } from "./JsonSchemaInfo";

export const JsonSchema = ({ schema = {}, ...props }) => {
  schema = typeof schema === "string" ? JSON.parse(schema) : schema;
  const {
    $id,
    _id,
    id,
    slug,
    $schema,
    _schema,
    title,
    definitions,
    $defs,
    _defs,
    // eslint-disable-next-line no-unused-vars
    properties = [],
    // eslint-disable-next-line no-unused-vars
    required = [],
    ...remainingProps
  } = schema;
  return (
    <div>
      {title && <Heading level={1}>{title}</Heading>}
      {Object.keys(remainingProps).map((key) => (
        <JsonSchemaProperty
          key={key}
          name={key}
          property={remainingProps[key]}
        />
      ))}
      <Tabs aria-label={title}>
        <TabList>
          <Item key="_view">View</Item>
          <Item key="_validate">Validate</Item>
          <Item key="_raw">Raw</Item>
          <Item key="_info">Info</Item>
        </TabList>
        <TabPanels>
          <Item key="_view">
            <JsonSchemaView schema={schema} {...props} />
          </Item>
          <Item key="_validate">
            <JsonSchemaValidate schema={schema} {...props} />
          </Item>
          <Item key="_raw">
            <JsonSchemaRaw schema={schema} {...props} />
          </Item>
          <Item key="_info">
            <JsonSchemaInfo schema={schema} {...props} />
          </Item>
        </TabPanels>
      </Tabs>
    </div>
  );
};
