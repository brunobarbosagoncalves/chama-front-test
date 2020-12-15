import React from 'react'

import TextStyled from './style'

const Text = (props) => {
  return (
    <TextStyled {...props}>
      <React.Fragment>{props.children}</React.Fragment>
    </TextStyled>
  )
}

export default Text
