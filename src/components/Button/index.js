import React from 'react'

import PropTypes from 'prop-types'

import ButtonStyled from './style'

const Button = (props) => {
  const { type } = props

  return (
    <ButtonStyled type={type} {...props}>
      <React.Fragment>{props.children}</React.Fragment>
    </ButtonStyled>
  )
}

Button.propTypes = {
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
