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

import { Code } from "../index";

export default {
  title: "components/Code",
};

const code = `{
  "op": "copy",
  "target": {
    "path": "/content/assets/7d391c3c-a3d4-4f66-81ce-40066732db60/target"
  },
  "source": {
    "path": "/content/assets/7d391c3c-a3d4-4f66-81ce-40066732db60/source/test.psd"
  }
}
`;

export const Default = () => {
  const props = {};

  return <Code {...props}>{code}</Code>;
};

export const SyntaxHighlighting = () => {
  const props = {
    className: `language-json`,
  };

  return <Code {...props}>{code}</Code>;
};

export const NoCopyButton = () => {
  const props = {
    className: `language-json`,
    copyButton: false,
  };

  return <Code {...props}>{code}</Code>;
};

export const NoLineNumbers = () => {
  const props = {
    className: `language-json`,
    lineNumbers: false,
  };

  return <Code {...props}>{code}</Code>;
};

export const HighlightLines = () => {
  const props = {
    className: `language-json`,
    metastring: `{1,3-4}`,
  };

  return <Code {...props}>{code}</Code>;
};

export const RequestMakerNoBody = () => {
  const props = {
    metastring: `{requestMaker: true}`,
  };
  const code = `
  method: post
  url: https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker
  query:
    res: tes
    tes: res
  headers:
    test: rest
    rest: test
  `;

  return <Code {...props}>{code}</Code>;
};

export const RequestMakerWithRawBody = () => {
  const props = {
    metastring: `{requestMaker: true}`,
  };
  const code = `
  method: post
  url: https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker
  query:
    res: tes
    tes: res
  headers:
    test: rest
    rest: test
  body: this is my body
  `;

  return <Code {...props}>{code}</Code>;
};

export const RequestMakerWithParameterizedBody = () => {
  const props = {
    metastring: `{requestMaker: true}`,
  };
  const code = `
  method: post
  url: https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker
  query:
    res: tes
    tes: res
  headers:
    test: rest
    rest: test
    Content-Type: application/x-www-form-urlencoded
  body:
    name: hiren
    email: hireshah@adobe.com
  `;

  return <Code {...props}>{code}</Code>;
};
