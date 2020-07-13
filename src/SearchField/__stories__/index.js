/**
 *  Copyright 2020 Adobe. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 */

/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Magnify from '@spectrum-icons/workflow/Magnify'
import Close from '@spectrum-icons/workflow/Close'

import '@spectrum-css/icon'
import '@spectrum-css/search'
import '@spectrum-css/textfield'

import './index.css'

const SearchField = ({
  label = 'Search',
  placeholder = 'Enter text',
  onChange,
  onClear,
  onSubmit,
  icon = <Magnify size='S' />,
  isQuiet = false,
  isDisabled = false,
  value = '',
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState(value)

  return (
    <form
      className={classNames([
        'spectrum-Search',
        { 'spectrum-Search--quiet': isQuiet },
        { 'is-disabled': isDisabled }
      ])}
      onSubmit={onSubmit}
    >
      <div
        className={classNames([
          'spectrum-Textfield',
          { 'spectrum-Textfield--quiet': isQuiet },
          { 'is-disabled': isDisabled }
        ])}
      >
        {icon}
        <input
          aria-label={label}
          type='search'
          placeholder={placeholder}
          name='search'
          value={searchTerm}
          disabled={isDisabled}
          className='spectrum-Textfield-input spectrum-Search-input'
          autoComplete='off'
          onChange={onChange || ((e) => setSearchTerm(e.target.value))}
          {...props}
        />
        <button
          type='reset'
          className='spectrum-ClearButton spectrum-Search-clearButton'
          onClick={onClear || (() => setSearchTerm(''))}
        >
          <Close size='S' />
        </button>
      </div>
    </form>
  )
}

SearchField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onSubmit: PropTypes.func,
  isQuiet: PropTypes.bool,
  isDisabled: PropTypes.bool,
  value: PropTypes.string
}

export default SearchField
