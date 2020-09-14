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

import React from 'react'
import classNames from 'classnames'
import '@spectrum-css/icon'

const commonProps = {
  focusable: false,
  'aria-hidden': true,
  role: 'img'
}

export const Adobe = (props) => (
  <svg
    {...props}
    {...commonProps}
    viewBox='0 0 30 26'
    fill='#E1251B'
    aria-label='Adobe'
  >
    <polygon points='19,0 30,0 30,26' />
    <polygon points='11.1,0 0,0 0,26' />
    <polygon points='15,9.6 22.1,26 17.5,26 15.4,20.8 10.2,20.8' />
  </svg>
)

export const ChevronDown = ({ className, ...props }) => (
  <svg
    {...props}
    {...commonProps}
    className={classNames(
      className,
      'spectrum-Icon',
      'spectrum-UIIcon-ChevronDownMedium'
    )}
  >
    <path
      d='M11.99 1.51a1 1 0 00-1.707-.707L6 5.086 1.717.803A1 1 0 10.303 2.217l4.99 4.99a1 1 0 001.414 0l4.99-4.99a.997.997 0 00.293-.707z'
      className='spectrum-UIIcon--large'
    />
    <path
      d='M9.99 1.01A1 1 0 008.283.303L5 3.586 1.717.303A1 1 0 10.303 1.717l3.99 3.98a1 1 0 001.414 0l3.99-3.98a.997.997 0 00.293-.707z'
      className='spectrum-UIIcon--medium'
    />
  </svg>
)

export const CheckMarkMedium = ({ className, ...props }) => (
  <svg
    {...props}
    {...commonProps}
    className={classNames(
      className,
      'spectrum-Icon',
      'spectrum-UIIcon-CheckmarkMedium'
    )}
  >
    <path
      d='M6 14a1 1 0 01-.789-.385l-4-5a1 1 0 111.577-1.23L6 11.376l7.213-8.99a1 1 0 111.576 1.23l-8 10a1 1 0 01-.789.384z'
      className='spectrum-UIIcon--large'
    />
    <path
      d='M4.5 10a1.022 1.022 0 01-.799-.384l-2.488-3a1 1 0 011.576-1.233L4.5 7.376l4.712-5.991a1 1 0 111.576 1.23l-5.51 7A.978.978 0 014.5 10z'
      className='spectrum-UIIcon--medium'
    />
  </svg>
)
