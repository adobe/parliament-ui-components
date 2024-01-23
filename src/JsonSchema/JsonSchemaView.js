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

import React, { Fragment } from "react";
import { Flex, Heading, View, Well } from "@adobe/react-spectrum";
import { InlineCode } from "../InlineCode";
import { Table, TBody, Tr, Td } from "../Table";
import { DynamicReactJson } from "./DynamicReactJson";

export const JsonSchemaView = ({ schema = {}, ...props }) => {
  const {
    $id,
    _id,
    $schema,
    _schema,
    title,
    definitions,
    properties = [],
    required = [],
    // eslint-disable-next-line no-unused-vars
    ...remainingProps
  } = schema;
  return (
    <div {...props}>
      <JsonSchemaProperties properties={properties} required={required} />
    </div>
  );
};

const JsonSchemaProperties = ({ properties, required = [] }) => {
  return properties && Object.keys(properties).length > 0 ? (
    <Table>
      <TBody>
        {Object.keys(properties).map((key) => (
          <Tr key={key}>
            <Td>
              <Flex direction="column">
                <View>{key}</View>
                <View>
                  <DefaultProperty name="Type">
                    {properties[key].type}
                    {properties[key].enum && "enum"}
                  </DefaultProperty>
                </View>
                {required?.includes(key) && (
                  <View>
                    <span
                      style={{
                        color: "var(--spectrum-global-color-red-400)",
                      }}
                    >
                      required
                    </span>
                  </View>
                )}
              </Flex>
            </Td>
            <Td>
              <JsonSchemaPropertyDetails name={key} properties={properties} />
            </Td>
            <Td>
              <JsonSchemaPropertyExample name={key} properties={properties} />
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  ) : null;
};

const JsonSchemaPropertyDetails = ({ name, properties }) => {
  const propKeys = Object.keys(properties[name]);
  return (
    <Flex direction="column" gap="size-50">
      {propKeys.sort(PropertiesCompareFunction).map((prop) => {
        if (prop !== "type") {
          return (
            <JsonSchemaProperty
              key={prop}
              name={prop}
              property={properties[name][prop]}
            />
          );
        }
      })}
    </Flex>
  );
};

const JsonSchemaPropertyExample = ({ name, properties }) => {
  const examples = properties[name].examples;
  if (examples === undefined) {
    return "";
  }

  return (
    <View key={name}>
      <JsonSchemaPropertyLabel name="Examples" />
      <DynamicReactJson src={examples} collapsed name={false} indentWidth={2} />
    </View>
  );
};

/**
 * Description first.
 */
const PropertiesCompareFunction = (a, b) => {
  if (a === "description") {
    return -1;
  }
  if (b === "description") {
    return 1;
  }
  return 0;
};

const excludeLabelProps = ["description"];
const excludedProperties = ["examples", "$id"];

export const JsonSchemaProperty = ({ name, property }) => {
  if (property === null || excludedProperties.includes(name)) {
    return "";
  }

  switch (typeof property) {
    case "number":
      return <DefaultProperty name={name}>{property}</DefaultProperty>;
    case "boolean":
      return (
        <DefaultProperty name={name} highlight>
          {`${property}`}
        </DefaultProperty>
      );
    case "object":
      if (name === "enum") {
        return (
          <DefaultProperty name={name}>
            <>
              {property.map((item) => (
                <InlineCode key={item}>{item}</InlineCode>
              ))}{" "}
            </>
          </DefaultProperty>
        );
      } else {
        if (Array.isArray(property)) {
          if (property.length === 0) {
            return "";
          }
        } else if (Object.keys(property).length === 0) {
          return "";
        }

        return (
          <details>
            <summary>
              <JsonSchemaPropertyLabel name={name} />
            </summary>
            {Array.isArray(property) ? (
              <>
                <Fragment>
                  s
                  {property.map((item) => {
                    if (typeof item === "object") {
                      return <InnerJsonSchema schema={item} />;
                    } else {
                      return <InlineCode key={item}>{item}</InlineCode>;
                    }
                  })}{" "}
                </Fragment>
              </>
            ) : (
              <Well>
                <InnerJsonSchema schema={property} />
              </Well>
            )}
          </details>
        );
      }
    default:
      return excludeLabelProps.includes(name) ? (
        <DefaultProperty name={name}>{property}</DefaultProperty>
      ) : (
        <DefaultProperty name={name} highlight>
          {property}
        </DefaultProperty>
      );
  }
};

const JsonSchemaPropertyLabel = ({ name }) =>
  !excludeLabelProps.includes(name) ? (
    <span
      style={{
        textTransform: "capitalize",
      }}
    >
      <strong>{name}:&nbsp;</strong>
    </span>
  ) : null;

const DefaultProperty = ({ name, highlight, children }) => (
  <View key={name}>
    <JsonSchemaPropertyLabel name={name} />
    {highlight ? <InlineCode>{children}</InlineCode> : children}
  </View>
);

const InnerJsonSchema = ({ schema = {}, ...props }) => {
  const {
    $id,
    _id,
    $schema,
    _schema,
    title,
    definitions,
    // eslint-disable-next-line no-unused-vars
    properties = [],
    // eslint-disable-next-line no-unused-vars
    required = [],
    ...remainingProps
  } = schema;
  return (
    <div>
      {title && <Heading level={2}>{title}</Heading>}
      {Object.keys(remainingProps).map((key) => (
        <JsonSchemaProperty
          key={key}
          name={key}
          property={remainingProps[key]}
        />
      ))}
      <JsonSchemaView schema={schema} {...props} />
    </div>
  );
};
