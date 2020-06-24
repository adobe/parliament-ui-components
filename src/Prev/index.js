/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft'

const Prev = ({ url, title }) => {
  return (
    <Link
      to={url}
      rel='prev'
      css={css`
        color: rgb(13, 102, 208);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      <ChevronLeft
        css={css`
          height: 1em;
          width: 1em;
          top: 0.125em;
          position: relative;
        `}
      />{' '}
      {title}
    </Link>
  )
}

Prev.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

Prev.defaultProps = {
  url: '',
  title: ''
}

export default Prev
