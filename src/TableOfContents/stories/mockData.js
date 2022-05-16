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
const mockData = {
  regular: {
    items: [
      {
        url: "#step-2-add-templates",
        title: "Step 2: Add templates",
        items: [
          {
            url: "#template-conventions",
            title: "Template conventions",
          },
          {
            url: "#template-configuration",
            title: "Template configuration",
          },
          {
            url: "#quote-preview_template",
            title: "Quote preview_template",
            items: [
              {
                url: "#attr",
                title: "Attributes",
              },
              {
                url: "#ko-style",
                title: "KO-Styles",
              },
              {
                url: "#css",
                title: "CSS",
              },
              {
                url: "#class",
                title: "Class",
              },
              {
                url: "#liveedit",
                title: "LiveEdit",
              },
              {
                url: "#event",
                title: "Event",
              },
            ],
          },
          {
            url: "#quote-master_template",
            title: "Quote master_template",
            items: [
              {
                url: "#html",
                title: "Html",
              },
            ],
          },
          {
            url: "#next",
            title: "Next",
          },
        ],
      },
    ],
  },
  twoH1s: {
    items: [
      {
        url: "#Heading 1",
        title: "Step 3: Add components (optional)",
      },
      {
        url: "#Another Heading 1",
        title: "Step 3: Add components (optional)",
      },
      {
        url: "#And Yet Another Heading 1",
        title: "Another Heading1",
        items: [
          {
            url: "#about-components",
            title: "About components",
          },
          {
            url: "#component-conventions",
            title: "Component conventions",
          },
          {
            url: "#component-configuration",
            title: "Component configuration",
          },
          {
            url: "#quote-preview_component",
            title: "Quote preview_component",
            items: [
              {
                url: "#extend-from-preview",
                title: "Extend from Preview",
              },
              {
                url: "#customize-the-options-menu",
                title: "Customize the options menu",
              },
            ],
          },
          {
            url: "#quote-master_component",
            title: "Quote master_component",
          },
          {
            url: "#next",
            title: "Next",
          },
        ],
      },
    ],
  },
  moreTestData: {
    items: [
      {
        url: "#segment-definition-data-structure",
        title: "Segment Definition Data Structure",
        items: [
          {
            url: "#terms",
            title: "Terms",
            items: [
              {
                url: "#schema",
                title: "Schema",
              },
              {
                url: "#attributes",
                title: "Attributes",
              },
              {
                url: "#context",
                title: "Context",
              },
              {
                url: "#row",
                title: "Row",
              },
              {
                url: "#container",
                title: "Container",
              },
              {
                url: "#container-set",
                title: "Container Set",
              },
              {
                url: "#data-set",
                title: "Data Set",
              },
            ],
          },
          {
            url: "#schema-functions",
            title: "Schema Functions",
          },
          {
            url: "#available-data-comparison-functions",
            title: "Available Data Comparison Functions",
          },
          {
            url: "#segment-definition-examples",
            title: "Segment Definition Examples",
            items: [
              {
                url: "#example-1",
                title: "Example 1",
              },
              {
                url: "#example-2",
                title: "Example 2",
              },
              {
                url: "#example-3",
                title: "Example 3",
              },
              {
                url: "#example-4",
                title: "Example 4",
              },
              {
                url: "#example-5",
                title: "Example 5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default mockData;
