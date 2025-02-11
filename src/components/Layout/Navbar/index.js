import React from 'react'

import NavBar from './style'

export default (props) => (
  <NavBar {...props}>
    <React.Fragment>{props.children}</React.Fragment>
  </NavBar>
)
