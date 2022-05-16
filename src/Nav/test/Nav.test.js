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
import { Nav } from "../index";

describe("<Nav />", () => {
  test("should render", () => {
    const { getByTestId } = render(<Nav data-testid="el" />);
    const el = getByTestId("el");

    expect(el).toBeInTheDocument();
  });

  test("it should render up to a specific depth", () => {
    const nodes = [
      {
        title: "first-level",
        path: "dummy/path",
        pages: [
          {
            title: "second-level",
            path: "/YAS",
            pages: [
              {
                title: "third-level",
                path: "/NO",
              },
            ],
          },
        ],
      },
    ];

    const { getByText, queryByText } = render(<Nav data={nodes} depth={2} />);

    expect(getByText("first-level")).toBeInTheDocument();
    expect(getByText("second-level")).toBeInTheDocument();
    expect(queryByText("third-level")).toBeNull();
  });
});
