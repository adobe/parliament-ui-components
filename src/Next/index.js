/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ChevronRight from '@spectrum-icons/workflow/ChevronRight'

const Next = ({ url, title }) => {
  return (
    <Link
      to={url}
      rel='next'
      css={css`
        color: rgb(13, 102, 208);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      {title}{' '}
      <ChevronRight
        css={css`
          height: 1em;
          width: 1em;
          top: 0.125em;
          position: relative;
        `}
      />
    </Link>
  )
}

Next.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

Next.defaultProps = {
  url: '',
  title: ''
}

export default Next
