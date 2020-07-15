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
import HeroContent from '../heroContent'

import { defaultTheme, Provider } from '@adobe/react-spectrum'

import officeImage from './office.svg'

const Wrapper = storyFn => {
    return <Provider theme={defaultTheme} colorScheme="light">{storyFn()}</Provider>
}
export default {
  title: 'components/HeroContent',
  decorators:[Wrapper]
}

const DEFAULT_PROPS = {
  title: 'Lorem ipsum v2.0',
  imagePath: officeImage,
}

export const heroContent = () => {
  const props = {
    ...DEFAULT_PROPS
  }

  return (
    <HeroContent {...props}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat
      pellentesque eros, nec lacinia nunc volutpat non. Mauris et bibendum
      lectus. Praesent vel ipsum ornare, scelerisque ex sed, aliquam est.
    </HeroContent>
  )
}
