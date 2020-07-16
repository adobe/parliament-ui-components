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

import defaultStyles from './heroContent.css'
import { Heading, Text, Image } from '@adobe/react-spectrum'

/**
 * Renders a large,  banner-like component with a title, description, and image
 * @param {HeroContentProps} props 
 */
const HeroContent = (props) => {
  const { title, children, imagePath, bgColor, textColor } = props

  const style = {
    ...defaultStyles,
    root: {
      ...defaultStyles.root,
      backgroundColor: bgColor,
      color: textColor
    }
  }

  return (
    <div style={style.root}>
      <div stlye={style.content}>
        <Heading level={2} {...style.heading}>
          {title}
        </Heading>
        <Text>{children}</Text>
      </div>
      <div style={style.illustration}>
        <Image src={imagePath} {...style.image} />
      </div>
    </div>
  )
}

/**
 * @typedef HeroContentProps
 * 
 * @property {string} title Title of the banner
 * @property {string} imagePath The src path for the image
 * @property {string} bgColor The background color to use
 * @property {string} textColor The text color to use
 */
HeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

HeroContent.defaultProps = {
  bgColor: '#381f81',
  textColor: '#e7e7e7'
}

export default HeroContent
