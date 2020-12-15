import React from 'react'

import NavBar from './style'

export default (props) => (
  <NavBar>
    <React.Fragment>{props.children}</React.Fragment>
  </NavBar>
)
