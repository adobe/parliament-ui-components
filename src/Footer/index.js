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

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Divider, Flex, View } from '@adobe/react-spectrum'
import '@spectrum-css/typography'

const Footer = ({ ...props }) => (
  <footer
    className='spectrum-Body--XS'
    css={css`
      margin: 0 var(--spectrum-global-dimension-static-size-400);
    `}
    {...props}
  >
    <Divider size='M' />
    <Flex justifyContent='space-between' alignItems='center'>
      <View>
        <ul
          css={css`
            display: inline-flex;
            list-style: none;
            padding: 0;
            & > li {
              margin-right: var(--spectrum-global-dimension-static-size-400);
            }
            & > li > a {
              text-decoration: none;
              color: inherit;
              transition: color 0.1s ease, fill 0.1s ease;
            }
          `}
        >
          <li>
            <a href='https://www.adobe.com/legal/terms.html'>Terms of use</a>
          </li>
          <li>
            <a href='https://www.adobe.com/privacy.html'>Privacy policy</a>
          </li>
          <li>
            <a href='https://www.adobe.com/privacy/cookies.html'>Cookies</a>
          </li>
          <li>
            Language: <u>English</u>
          </li>
        </ul>
      </View>
      <View>
        <span>
          Copyright © {new Date().getFullYear()} Adobe. All rights reserved.
        </span>
      </View>
    </Flex>
  </footer>
)

export { Footer }
