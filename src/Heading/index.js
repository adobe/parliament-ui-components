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

const createHeading = (
  level,
  { linkMargin, children, className, id, ...props }
) => {
  const HeadingTag = `h${level}`
  const styles = {
    2: { size: 'L', linkMargin: '--spectrum-global-dimension-static-size-100' },
    3: { size: 'M', linkMargin: '--spectrum-global-dimension-static-size-50' },
    4: { size: 'S', linkMargin: '--spectrum-global-dimension-static-size-50' },
    5: {
      size: 'XS',
      linkMargin: '--spectrum-global-dimension-static-size-50'
    },
    6: {
      size: 'XXS',
      linkMargin: '--spectrum-global-dimension-static-size-50'
    }
  }
  return (
    <HeadingTag
      className={classNames(
        className,
        `spectrum-Heading spectrum-Heading--${styles[level].size}`
      )}
      {...props}
    >
      {children}
      <Link
        href={`#${id}`}
        css={css`
          margin-inline-start: var(${styles[level].linkMargin});
        `}
      >
        #
      </Link>
    </HeadingTag>
  )
}

const Heading2 = (props) => (
  <div>
    {createHeading(2, props)}
    <Divider marginBottom='size-300' />
  </div>
)

const Heading3 = (props) => <div>{createHeading(3, props)}</div>

const Heading4 = (props) => <div>{createHeading(4, props)}</div>

const Heading5 = (props) => <div>{createHeading(5, props)}</div>

const Heading6 = (props) => <div>{createHeading(6, props)}</div>

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 }
