import React from 'react'

import Row from './style'

export default (props) => (
  <Row {...props}>
    <React.Fragment>{props.children}</React.Fragment>
  </Row>
)
