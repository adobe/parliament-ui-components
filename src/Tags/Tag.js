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
import classNames from "classnames";

import CrossSmall from "@spectrum-icons/workflow/Close";

import "@spectrum-css/tags";
import "@spectrum-css/vars";

const Tag = ({
  children,
  isInvalid = false,
  isDisabled = false,
  isDeletable = false,
  onDelete,
  ...props
}) => (
  <div
    className={classNames([
      "spectrum-Tags-item",
      { "spectrum-Tags-item--deletable": isDeletable },
      { "is-invalid": isInvalid },
      { "is-disabled": isDisabled },
    ])}
    css={css`
      padding-left: var(--spectrum-global-dimension-size-75) !important;
      padding-right: ${isDeletable
        ? `0`
        : "var(--spectrum-global-dimension-size-100) !important"};
    `}
    role="listitem"
  >
    <span className="spectrum-Tags-itemLabel">{children}</span>
    {isDeletable ? (
      <button
        className="spectrum-ClearButton spectrum-ClearButton--small"
        aria-label={`Remove ${children}`}
        tabIndex="-1"
        onClick={() => onDelete && onDelete(children)}
      >
        <CrossSmall size="XS" />
      </button>
    ) : (
      ""
    )}
  </div>
);

Tag.propTypes = {
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDeletable: PropTypes.bool,
  onDelete: PropTypes.func,
};

export { Tag };
