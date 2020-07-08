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
import { Link } from 'gatsby'

import ChevronRight from '@spectrum-icons/workflow/ChevronRight'
import '@spectrum-css/link'
import '@spectrum-css/typography'

const Next = ({ url, title }) => {
  return (
    <div className='spectrum-Body spectrum-Body--M'>
      <Link
        to={url}
        rel='next'
        css={css`
          text-decoration: none !important;
          &:hover {
            text-decoration: underline !important;
          }
        `}
        className='spectrum-Link'
      >
        <span>{title}</span>
        <span
          css={css`
            vertical-align: text-top;
          `}
        >
          <ChevronRight size='S' />
        </span>
      </Link>
    </div>
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
