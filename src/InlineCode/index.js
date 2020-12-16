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

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import classNames from 'classnames'
import '@spectrum-css/typography'

export const InlineCode = ({ children, className, ...props }) => (
  <code
    {...props}
    className={classNames(className, 'spectrum-Code4')}
    css={css`
      background-color: var(--spectrum-global-color-gray-100);
      padding: var(--spectrum-global-dimension-size-50);
      margin: 0;
      display: inline;
      overflow-wrap: break-word;
      min-width: auto;
      color: var(--spectrum-global-color-gray-800);
      border-style: solid;
      border-width: var(--spectrum-global-dimension-static-size-10);
      border-radius: var(--spectrum-global-dimension-size-50);
      border-color: var(--spectrum-global-color-gray-200);
    `}
  >
    {children}
  </code>
)
