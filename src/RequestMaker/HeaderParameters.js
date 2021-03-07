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

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { View } from '@adobe/react-spectrum'
import { ParameterTable } from './ParameterTable'
import { RequestMakerUI } from './RequestMakerUI'

const HeaderParameters = ({ items, dispatch }) => {
  const updateHeaders = (data) => {
    const headers = new Headers()
    data
      .filter((item) => item.enabled && item.key !== '')
      .map((item) => headers.append(item.key, item.value))
    dispatch({
      type: RequestMakerUI.ACTION_TYPES.SET_HEADERS,
      headers: headers
    })
  }

  useEffect(() => {
    updateHeaders(items)
  }, [])

  return (
    <View
      borderWidth='thin'
      borderRadius='medium'
      borderColor='dark'
      padding='size-250'
      backgroundColor='gray-75'
      minHeight='size-2400'
    >
      <ParameterTable items={items} callback={updateHeaders} />
    </View>
  )
}

HeaderParameters.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func
}

export { HeaderParameters }
