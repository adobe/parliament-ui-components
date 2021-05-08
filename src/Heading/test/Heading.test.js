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
import { render } from 'test-utils'
import '../../../test-utils/matchMedia'
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
} from '../index'

describe('<Heading1 />', () => {
  test('should render with spectrum heading classes', () => {
    const { getByText } = render(<Heading1>Heading1</Heading1>)
    const heading1 = getByText('Heading1')

    expect(heading1).toHaveClass(
      'spectrum-Heading--sizeXL',
      'spectrum-Heading--light'
    )
  })
})
describe('<Heading2 />', () => {
  test('should render with spectrum heading classes', () => {
    const { getByText } = render(<Heading2>Heading2</Heading2>)
    const heading2 = getByText('Heading2')

    expect(heading2).toHaveClass('spectrum-Heading--sizeL')
  })
})
describe('<Heading3 />', () => {
  test('should render with spectrum heading classes', () => {
    const { getByText } = render(<Heading3>Heading3</Heading3>)
    const heading3 = getByText('Heading3')

    expect(heading3).toHaveClass('spectrum-Heading--sizeM')
  })
})
describe('<Heading4 />', () => {
  test('should render with spectrum heading classes', () => {
    const { getByText } = render(<Heading4>Heading4</Heading4>)
    const heading4 = getByText('Heading4')

    expect(heading4).toHaveClass('spectrum-Heading--sizeS')
  })
})
describe('<Heading5 />', () => {
  test('should render with spectrum heading classes', () => {
    const { getByText } = render(<Heading5>Heading5</Heading5>)
    const heading5 = getByText('Heading5')

    expect(heading5).toHaveClass('spectrum-Heading--sizeXS')
  })
})
describe('<Heading6 />', () => {
  test('should render with spectrum heading classes', () => {
    const { getByText } = render(<Heading6>Heading6</Heading6>)
    const heading6 = getByText('Heading6')

    expect(heading6).toHaveClass('spectrum-Heading--sizeXXS')
  })
})
