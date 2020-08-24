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
import { createRef, useState } from 'react'
import nextId from 'react-id-generator'
import classNames from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
import '@spectrum-css/typography'
import '@spectrum-css/tooltip'
import '@adobe/prism-adobe'
import { ActionButton } from '../ActionButton'

const tooltipId = nextId()

export const Code = ({ children, className = '', theme = 'dark' }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const language = className.replace(/language-/, '')

  const openTooltip = () => {
    setIsTooltipOpen(true)
    setTimeout(() => {
      setIsTooltipOpen(false)
    }, 3000)
  }

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => {
        const lines = tokens.slice(0, -1)
        const isMultiLine = lines.length > 1
        const textarea = createRef()

        return (
          <pre
            className={classNames(
              className,
              'spectrum-Code4',
              `spectrum--${theme}`
            )}
          >
            <div
              css={css`
                position: relative;
              `}
            >
              <textarea
                readOnly
                aria-hidden='true'
                css={css`
                  position: fixed;
                  left: -999px;
                  opacity: 0;
                `}
                ref={textarea}
                value={children}
              />
              <ActionButton
                aria-describedby={tooltipId}
                onClick={() => {
                  textarea.current.select()
                  document.execCommand('copy')
                  openTooltip()
                }}
                css={css`
                  position: absolute;
                  top: 0;
                  right: 0;
                `}
              >
                Copy
              </ActionButton>
              <span
                role='tooltip'
                id={tooltipId}
                css={css`
                  position: absolute;
                  top: 4px;
                  right: 48px;
                  left: initial;
                  font-family: var(
                    --spectrum-alias-body-text-font-family,
                    var(--spectrum-global-font-family-base)
                  );
                `}
                className={classNames(
                  'spectrum-Tooltip spectrum-Tooltip--left',
                  {
                    'is-open': isTooltipOpen
                  }
                )}
              >
                <span className='spectrum-Tooltip-label'>Copied</span>
                <span className='spectrum-Tooltip-tip' />
              </span>
            </div>

            {tokens.slice(0, -1).map((line, i) => {
              const { style: lineStyles, ...lineProps } = getLineProps({
                line,
                key: i
              })

              return (
                <div
                  key={i}
                  css={css`
                    display: table-row;
                  `}
                >
                  {isMultiLine && (
                    <span
                      css={css`
                        display: table-cell;
                        color: var(--spectrum-global-color-gray-500);
                        text-align: left;
                        padding-right: var(
                          --spectrum-global-dimension-static-size-200
                        );
                        user-select: none;
                      `}
                    >
                      {i + 1}
                    </span>
                  )}
                  <span {...lineProps}>
                    {line.map((token, key) => {
                      const {
                        style: tokenStyles,
                        ...tokenProps
                      } = getTokenProps({ token, key })
                      return <span key={key} {...tokenProps} />
                    })}
                  </span>
                </div>
              )
            })}
          </pre>
        )
      }}
    </Highlight>
  )
}
