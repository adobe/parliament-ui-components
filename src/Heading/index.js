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
import { css, jsx } from '@emotion/core'
import classNames from 'classnames'
import '@spectrum-css/typography'
import { Divider } from '@react-spectrum/divider'
import { Link } from '../Link'

import './index.css'

const Heading1 = ({ children, className, ...props }) => (
  <h1
    className={classNames(
      className,
      'spectrum-Heading spectrum-Heading--XL spectrum-Heading--light'
    )}
    {...props}
  >
    {children}
  </h1>
)

const Heading2 = ({ children, className, id, ...props }) => (
  <div>
    <h2
      className={classNames(className, 'spectrum-Heading spectrum-Heading--L')}
      {...props}
    >
      {children}
      <Link
        href={`#${id}`}
        css={css`
          margin-inline-start: var(--spectrum-global-dimension-static-size-100);
        `}
      >
        #
      </Link>
    </h2>
    <Divider marginBottom='size-300' />
  </div>
)

const Heading3 = ({ children, className, id, ...props }) => (
  <div>
    <h3
      className={classNames(className, 'spectrum-Heading spectrum-Heading--M')}
      {...props}
    >
      {children}
      <Link
        css={css`
          margin-inline-start: var(--spectrum-global-dimension-static-size-50);
        `}
        href={`#${id}`}
      >
        #
      </Link>
    </h3>
  </div>
)

const Heading4 = ({ children, className, id, ...props }) => (
  <div>
    <h4
      className={classNames(className, 'spectrum-Heading spectrum-Heading--S')}
      {...props}
    >
      {children}
      <Link
        css={css`
          margin-inline-start: var(--spectrum-global-dimension-static-size-50);
        `}
        href={`#${id}`}
      >
        #
      </Link>
    </h4>
  </div>
)

const Heading5 = ({ children, className, id, ...props }) => (
  <div>
    <h5
      className={classNames(className, 'spectrum-Heading spectrum-Heading--XS')}
      {...props}
    >
      {children}
      <Link
        css={css`
          margin-inline-start: var(--spectrum-global-dimension-static-size-50);
        `}
        href={`#${id}`}
      >
        #
      </Link>
    </h5>
  </div>
)

const Heading6 = ({ children, className, id, ...props }) => (
  <div>
    <h6
      className={classNames(
        className,
        'spectrum-Heading spectrum-Heading--XXS'
      )}
      {...props}
    >
      {children}
      <Link
        css={css`
          margin-inline-start: var(--spectrum-global-dimension-static-size-50);
        `}
        href={`#${id}`}
      >
        #
      </Link>
    </h6>
  </div>
)

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 }
