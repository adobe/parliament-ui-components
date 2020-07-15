import React from 'react'

import styles from './heroContent.css'

const HeroContent = (props) => {
  const { title, description } = props

  return (
    <div style={styles.root}>
      <h1 style={styles.heading}>{title}</h1>
      <div style={styles.description}>{description}</div>
    </div>
  )
}

export default HeroContent
