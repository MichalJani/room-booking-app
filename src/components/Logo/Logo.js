import React from 'react'
import PropTypes from 'prop-types'

export const Logo = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
