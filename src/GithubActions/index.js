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
import { Flex } from '@react-spectrum/layout'
import { ActionButton, Text } from '../ActionButton'
import { Bug, Edit } from '../Icons'

const GitHubActions = ({ repository, branch, root, pagePath }) => {
  const commonsProps = {
    elementType: 'a',
    isQuiet: true,
    target: '_blank',
    rel: 'noopener noreferrer nofollow'
  }

  const rootFolder = root ? `/${root}` : ''

  return (
    <Flex>
      <ActionButton
        {...commonsProps}
        href={`https://github.com/${repository}/edit/${branch}${rootFolder}/src/pages/${pagePath}`}
      >
        <Edit />
        <Text>Edit in Github</Text>
      </ActionButton>

      <ActionButton
        {...commonsProps}
        href={`https://github.com/${repository}/issues/new?body=Issue%20in%20${rootFolder}/src/pages/${pagePath}`}
        css={css`
          margin-left: var(--spectrum-global-dimension-static-size-100);
        `}
      >
        <Bug />
        <Text>Log an issue</Text>
      </ActionButton>
    </Flex>
  )
}

GitHubActions.propTypes = {
  repository: PropTypes.string,
  branch: PropTypes.string,
  pagePath: PropTypes.string
}

export { GitHubActions }
