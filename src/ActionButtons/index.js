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
import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import { ActionButton, Text } from "@adobe/react-spectrum";

import Bug from "@spectrum-icons/workflow/Bug";
import Edit from "@spectrum-icons/workflow/Edit";

const ActionLink = ({ href, children }) => (
  <a
    href={href}
    css={css`
      text-decoration: none;
    `}
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    {children}
  </a>
);

const ActionButtons = ({
  gitUrl = "",
  filePath = "",
  branch = "",
  issues,
  ...props
}) => (
  <div {...props}>
    <ActionLink href={`${gitUrl}/edit/${branch}/${filePath}`}>
      <ActionButton isQuiet aria-label="Edit page" excludeFromTabOrder>
        <Edit size="S" />
        <Text>Edit this page</Text>
      </ActionButton>
    </ActionLink>
    <ActionLink
      href={issues || `${gitUrl}/issues/new?body=Issue%20in%20${filePath}`}
    >
      <ActionButton isQuiet aria-label="Log issue" excludeFromTabOrder>
        <Bug size="S" />
        <Text>Log an issue</Text>
      </ActionButton>
    </ActionLink>
  </div>
);

ActionButtons.propTypes = {
  branch: PropTypes.string,
  filePath: PropTypes.string,
  gitUrl: PropTypes.string,
};

export { ActionButtons };
