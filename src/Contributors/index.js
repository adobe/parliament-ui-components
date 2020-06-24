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
