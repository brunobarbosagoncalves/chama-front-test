import React from 'react'

import Container from './style'

export default (props) => (
  <Container>
    <React.Fragment>{props.children}</React.Fragment>
  </Container>
)
