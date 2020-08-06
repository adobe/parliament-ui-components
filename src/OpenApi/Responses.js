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
import PropTypes from 'prop-types'

import { Table, TBody, Tr, Td } from '../SpectrumTable'

import '@spectrum-css/tags'
import '@spectrum-css/typography'

const Responses = ({ responses = {} }) => (
  <div
    css={css`
      margin-bottom: var(
        --spectrum-global-dimension-size-400,
        var(--spectrum-alias-size-400)
      );
    `}
  >
    <div
      className='spectrum-Body--M'
      css={css`
        margin-bottom: var(
          --spectrum-global-dimension-size-200,
          var(--spectrum-alias-size-200)
        );
      `}
    >
      <strong>Responses</strong>
    </div>
    <Table
      isQuiet
      css={css`
        width: 100%;
      `}
    >
      <TBody>
        {Object.entries(responses).map(([code, response]) => (
          <Tr key={code}>
            <Td
              className='spectrum-Code spectrum-Code--S'
              css={css`
                width: 30%;
              `}
            >
              <span
                css={css`
                  font-weight: 700;
                `}
              >
                {code}
              </span>
            </Td>
            <Td
              css={css`
                width: 70%;
              `}
            >
              {response.description}
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  </div>
)

Responses.propTypes = {
  responses: PropTypes.object
}

export default Responses
