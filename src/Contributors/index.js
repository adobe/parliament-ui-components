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
import styled from '@emotion/styled'

const Avatars = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  padding-left: 32px;
`

const Avatar = styled.span`
  margin-left: -16px;
  position: relative;
  border: 3px solid white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  bacground: white;
`

const AvatarImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const Contributors = ({ gitUrl, committers, date }) => {
  const lifoComitters = committers.slice(0, 5).reverse()
  return (
    <a
      css={css`
        text-decoration: none;
        color: inherit;
      `}
      href={gitUrl}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <Avatars>
          {lifoComitters &&
            lifoComitters.map((committer, index) => {
              return (
                <Avatar key={index}>
                  <AvatarImg src={committer} />
                </Avatar>
              )
            })}
        </Avatars>
        <span
          css={css`
            padding-left: 16px;
          `}
        >
          Last updated {date}
        </span>
      </div>
    </a>
  )
}

Contributors.propTypes = {
  committers: PropTypes.array,
  date: PropTypes.string,
  gitUrl: PropTypes.string
}

Contributors.defaultProps = {
  committers: [],
  date: '',
  gitUrl: ''
}

export default Contributors
