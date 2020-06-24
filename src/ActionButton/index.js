import React from 'react'
import PropTypes from 'prop-types'

import { ActionButton as Button } from '@react-spectrum/button'
import { Text } from '@react-spectrum/text'

const ActionButton = ({ label, url, icon }) => {
  return (
    <Button
      autoFocus={false}
      block={false}
      disabled={false}
      element='button'
      holdAffordance={false}
      invalid={false}
      logic={false}
      onClick={() => {
        document.location.href = url
      }}
      isQuiet
      selected={false}
    >
      {icon}
      <Text>{label}</Text>
    </Button>
  )
}

ActionButton.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string
}

ActionButton.defaultProps = {
  label: '',
  url: ''
}

export default ActionButton
