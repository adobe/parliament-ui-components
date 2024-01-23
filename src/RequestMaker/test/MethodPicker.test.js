/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import React from "react";
import { render, screen } from "test-utils";
import "../../../test-utils/matchMedia";
import userEvent from "@testing-library/user-event";

describe("<MethodPicker />", () => {
  test("MethodPicker is updated correctly when POST is selected", () => {
    render(
      <select data-testid="select">
        <option data-testid="GET" value="GET">
          GET
        </option>
        <option data-testid="PUT" value="PUT">
          PUT
        </option>
        <option data-testid="POST" value="POST">
          POST
        </option>
        <option data-testid="DELETE" value="DELETE">
          DELETE
        </option>
        <option data-testid="OPTIONS" value="OPTIONS">
          OPTIONS
        </option>
        <option data-testid="HEAD" value="HEAD">
          HEAD
        </option>
        <option data-testid="PATCH" value="PATCH">
          PATCH
        </option>
      </select>
    );

    userEvent.selectOptions(screen.getByTestId("select"), ["POST"]);

    expect(screen.getByTestId("GET").selected).toBe(false);
    expect(screen.getByTestId("PUT").selected).toBe(false);
    expect(screen.getByTestId("POST").selected).toBe(true);
    expect(screen.getByTestId("DELETE").selected).toBe(false);
    expect(screen.getByTestId("OPTIONS").selected).toBe(false);
    expect(screen.getByTestId("HEAD").selected).toBe(false);
    expect(screen.getByTestId("PATCH").selected).toBe(false);
  });
});
