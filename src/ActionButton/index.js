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
import '@spectrum-css/button'

const ActionButton = ({
  elementType = 'button',
  children,
  onPress,
  isQuiet = false,
  isDisabled = false,
  ...props
}) => {
  const Element = elementType
  if (elementType === 'a') {
    props.role = 'button'
  }

  return (
    <Element
      className={classNames([
        'spectrum-ActionButton',
        { 'spectrum-ActionButton--quiet': isQuiet },
        { 'is-disabled': isDisabled },
        'parliament-ActionButtons'
      ])}
      onClick={onPress}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </Element>
  )
}

const Text = ({ children }) => (
  <span className='spectrum-ActionButton-label'>{children}</span>
)

ActionButton.propTypes = {
  elementType: 'button',
  onPress: PropTypes.func,
  isQuiet: PropTypes.bool,
  isDisabled: PropTypes.bool
}

export { ActionButton, Text }
