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

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '@spectrum-css/menu'

const Item = ({
  children,
  item,
  onAction,
  isSelected = false,
  isDisabled = false,
  isDivider = false,
  isSectionHeading = false
}) =>
  isDivider ? (
    <li className='spectrum-Menu-divider' role='separator' />
  ) : (
    <li
      className={classNames([
        { 'spectrum-Menu-item': !isSectionHeading },
        { 'is-selected': isSelected },
        { 'is-disabled': isDisabled }
      ])}
      role={!isSectionHeading ? 'menuitem' : 'group'}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      tabIndex='0'
      onClick={() => {
        onAction && onAction(item || children)
      }}
    >
      <span
        className={
          isSectionHeading
            ? 'spectrum-Menu-sectionHeading'
            : 'spectrum-Menu-itemLabel'
        }
      >
        {children}
      </span>
    </li>
  )

Item.propTypes = {
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDivider: PropTypes.bool,
  isSectionHeading: PropTypes.bool
}

export { Item }
