import React from 'react'
import PropTypes from 'prop-types'

import defaultStyles from './heroContent.css'
import { Heading, Text, Image } from '@adobe/react-spectrum'

const DEFAULT_BACKGROUND_COLOR = '#381f81'
const DEFAULT_TEXT_COLOR = '#e7e7e7'

const HeroContent = (props) => {
  const {
    title,
    children,
    imagePath,
    bgColor = DEFAULT_BACKGROUND_COLOR,
    textColor = DEFAULT_TEXT_COLOR
  } = props

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
        <Image src={imagePath} {...style.image}/>
      </div>
    </div>
  )
}

export default HeroContent
