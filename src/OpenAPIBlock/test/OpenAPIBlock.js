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

import React from "react";
import { render } from "test-utils";
import "../../../test-utils/matchMedia";
import { OpenAPIBlock } from "../index";

describe("<OpenAPIBlock />", () => {
  test("should render", () => {
    const { getByTestId } = render(
      <OpenAPIBlock specUrl="https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.json" />
    );
    const el = getByTestId("el");

    expect(el).toBeInTheDocument();
  });
});

describe("<OpenAPIBlock /> using swagger-ui", () => {
  test("should render", () => {
    const { getByTestId } = render(
      <OpenAPIBlock
        specUrl="https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.json"
        engine="swagger-ui"
      />
    );
    const el = getByTestId("el");

    expect(el).toBeInTheDocument();
  });
});
