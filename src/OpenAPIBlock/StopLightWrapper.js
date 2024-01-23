/* eslint-disable react/jsx-pascal-case */
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
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
export const StopLightWrapper = ({ spec, onComplete }) => {
  onComplete && onComplete();
  if (typeof window !== "undefined") {
    const { API } = require("@stoplight/elements");
    return (
      <Provider theme={defaultTheme} colorScheme="light">
        <link
          rel="stylesheet"
          href="https://unpkg.com/@stoplight/elements/styles.min.css"
        />
        <div>
          <API apiDescriptionDocument={spec} router="hash" />
        </div>
      </Provider>
    );
  }
  return null;
};
