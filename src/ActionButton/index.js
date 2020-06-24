import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@react-spectrum/button'

const ActionButtons = ({ label, url, icon }) => {
  return (
    <Button
      autoFocus={false}
      block={false}
      disabled={false}
      element='button'
      holdAffordance={false}
      invalid={false}
      label={label}
      icon={icon}
      logic={false}
      onClick={() => {
        document.location.href = url
      }}
      quiet
      selected={false}
      variant='action'
    />
  )
}

ActionButtons.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string
}

ActionButtons.defaultProps = {
  label: '',
  url: ''
}

export default ActionButtons
