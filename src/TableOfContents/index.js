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
import { View } from "@adobe/react-spectrum";
import { Link } from "../Link";

import "@spectrum-css/typography";

const TableOfContents = ({
  tableOfContents,
  title = "On this page",
  ...props
}) => {
  const index = tableOfContents.items && tableOfContents.items.length - 1;

  const tableOfContentsItems = {
    items: tableOfContents.items && tableOfContents.items[index].items,
  };

  return (
    <View
      elementType="nav"
      role="navigation"
      aria-label="Article Outline"
      marginY="size-400"
      {...props}
    >
      <h4
        className="spectrum-Detail--sizeL"
        css={css`
          color: var(--spectrum-global-color-gray-600);
          margin-bottom: var(--spectrum-global-dimension-static-size-250);
        `}
      >
        {title}
      </h4>
      <span
        css={css`
          * {
            list-style: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-decoration: none;
            max-width: 200px;
          }
        `}
      >
        <ul
          className="spectrum-Body--sizeM"
          css={css`
            margin: 0;
            padding-left: 0;
          `}
        >
          {tableOfContentsItems.items &&
            renderItems(tableOfContentsItems.items)}
        </ul>
      </span>
    </View>
  );
};

const renderItems = (items) => {
  return items.map((item, index) => {
    return renderItem(item, index);
  });
};

const renderItem = (item, index) => {
  return (
    <li
      key={index}
      css={css`
        margin-bottom: 0;
      `}
    >
      {item.items ? (
        <ul
          css={css`
            list-style: none;
            padding-left: var(--spectrum-global-dimension-static-size-200);
            margin-left: 0;
            margin-bottom: 0;
            margin-top: 0;
          `}
        >
          {renderLink(item, true)}
          {renderItems(item.items)}
        </ul>
      ) : (
        renderLink(item)
      )}
    </li>
  );
};

const renderLink = (item, indent = false) => {
  return (
    <Link
      href={item.url}
      css={css`
        ${indent ? `margin-left: -16px;` : ""}
      `}
    >
      {item.title}
    </Link>
  );
};

TableOfContents.propTypes = {
  tableOfContents: PropTypes.object,
};

TableOfContents.defaultProps = {
  tableOfContents: {},
};

export { TableOfContents };
