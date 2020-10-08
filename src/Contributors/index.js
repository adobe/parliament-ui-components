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
import { Flex } from '@adobe/react-spectrum'
import '@spectrum-css/tooltip'

const Contributors = ({ href = '#', contributors = [], date, ...props }) => {
  const getAvatarUrl = function (contributor) {
    if (contributor.avatarUrl.startsWith('https://git.corp.adobe.com/')) {
      if (contributor.login) {
        return `https://s7d2.scene7.com/is/image/IMGDIR/${contributor.login}`
      } else {
        return `https://github.com/images/gravatars/gravatar-user-420.png`
      }
    }
    return contributor.avatarUrl
  }
  const count = contributors.length - 5
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer nofollow'
      css={css`
        text-decoration: none;
        color: inherit;
      `}
      {...props}
    >
      <Flex alignItems='center'>
        <div
          css={css`
            display: inline-flex;
            flex-direction: row-reverse;
            padding-left: var(--spectrum-global-dimension-static-size-200);
          `}
        >
          {contributors
            .slice(0, 5)
            .reverse()
            .map((contributor, index) => {
              const name = contributor.name || contributor.login || 'Unknown'
              const imgUrl = getAvatarUrl(contributor)
              return (
                <span
                  key={index}
                  className='u-tooltip-showOnHover'
                  css={css`
                    margin-left: calc(
                      -1 * var(--spectrum-global-dimension-static-size-100)
                    );
                    position: relative;
                    width: calc(
                      var(--spectrum-global-dimension-static-size-400) +
                        var(--spectrum-global-dimension-static-size-40)
                    );
                    height: calc(
                      var(--spectrum-global-dimension-static-size-400) +
                        var(--spectrum-global-dimension-static-size-40)
                    );
                    border-radius: var(
                      --spectrum-global-dimension-static-percent-50
                    );
                    background: var(--spectrum-global-color-gray-50);
                  `}
                >
                  <img
                    alt={name}
                    src={imgUrl}
                    css={css`
                      width: calc(
                        var(--spectrum-global-dimension-static-size-400) +
                          var(--spectrum-global-dimension-static-size-40)
                      );
                      height: calc(
                        var(--spectrum-global-dimension-static-size-400) +
                          var(--spectrum-global-dimension-static-size-40)
                      );
                      border-radius: var(
                        --spectrum-global-dimension-static-percent-50
                      );
                      border: var(--spectrum-global-dimension-static-size-40)
                        solid var(--spectrum-global-color-gray-50);
                    `}
                  />
                  <div className='spectrum-Tooltip spectrum-Tooltip--top'>
                    <span className='spectrum-Tooltip-label'>{name}</span>
                    <span className='spectrum-Tooltip-tip' />
                  </div>
                </span>
              )
            })}
        </div>
        {count > 0 ? (
          <div
            css={css`
              color: var(--spectrum-global-color-gray-700);
            `}
          >
            + {count}
          </div>
        ) : null}
        <span
          css={css`
            padding-left: var(--spectrum-global-dimension-static-size-200);
          `}
        >
          {date && `Last updated ${date}`}
        </span>
      </Flex>
    </a>
  )
}

Contributors.propTypes = {
  href: PropTypes.string,
  contributors: PropTypes.array,
  date: PropTypes.string
}

export { Contributors }
