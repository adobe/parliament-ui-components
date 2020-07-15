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
