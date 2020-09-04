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
import PropTypes from 'prop-types'
import { Button, View } from '@adobe/react-spectrum'

const Feedback = ({ onYes, onNo, ...props }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
    `}
    {...props}
  >
    <span
      css={css`
        padding-right: var(--spectrum-global-dimension-static-size-200);
      `}
    >
      Was this helpful ?
    </span>
    <div
      css={css`
        display: flex;
        gap: var(--spectrum-global-dimension-static-size-200);
      `}
    >
      <View>
        <Button
          variant='primary'
          onClick={() => {
            onYes && onYes()
          }}
        >
          Yes
        </Button>
      </View>
      <View>
        <Button
          variant='primary'
          onClick={() => {
            onNo && onNo()
          }}
        >
          No
        </Button>
      </View>
    </div>
  </div>
)

Feedback.propTypes = {
  onYes: PropTypes.func,
  onNo: PropTypes.func
}

export { Feedback }
