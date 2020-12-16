import React from 'react'

import Col from './style'

export default (props) => (
  <Col {...props}>
    <React.Fragment>{props.children}</React.Fragment>
  </Col>
)
