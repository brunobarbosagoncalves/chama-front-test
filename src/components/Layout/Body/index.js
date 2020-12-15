import React from 'react'

import Body from './style'

export default (props) => (
  <Body>
    <React.Fragment>{props.children}</React.Fragment>
  </Body>
)
