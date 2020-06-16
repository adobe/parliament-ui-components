import React from 'react'
import PropTypes from 'prop-types'

const Button = require('@react/react-spectrum/Button').default

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
