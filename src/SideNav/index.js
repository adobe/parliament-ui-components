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
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "gatsby";

import "@spectrum-css/sidenav";

import "./index.css";

const isExternalPath = (path) => {
  return path.startsWith("http://") || path.startsWith("https://");
};

const nav = (items, selectedKeys, disabledKeys, onSelectionChange) => {
  const classes = {
    root: "spectrum-SideNav spectrum-SideNav--multiLevel",
    link: "spectrum-SideNav-itemLink",
  };

  const listItems = items.map((item, index) => {
    let link;

    const { title, icon, path } = item;

    const subTree = item.children
      ? nav(item.children, selectedKeys, disabledKeys, onSelectionChange)
      : undefined;

    const itemClasses = classNames([
      "spectrum-SideNav-item",
      { "is-selected": selectedKeys.includes(title) },
      { "is-disabled": disabledKeys.includes(title) },
    ]);

    if (path) {
      if (isExternalPath(path)) {
        link = (
          <a href={path} className={classes.link}>
            {title}
          </a>
        );
      } else {
        link = (
          <Link to={path} className={classes.link}>
            {title}
          </Link>
        );
      }
    } else {
      link = (
        <span className={classes.link}>
          {icon}
          {item.title}
        </span>
      );
    }

    return (
      <li key={index} className={itemClasses}>
        {link}
        {subTree}
      </li>
    );
  });

  return <ul className={classes.root}>{listItems}</ul>;
};

const SideNav = ({
  items = [],
  selectedKeys = [],
  disabledKeys = [],
  ...props
}) => {
  return <nav {...props}>{nav(items, selectedKeys, disabledKeys)}</nav>;
};

SideNav.propTypes = {
  items: PropTypes.array,
  selectedKeys: PropTypes.array,
  disabledKeys: PropTypes.array,
};

export { SideNav };
