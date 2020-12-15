import React from 'components/Layout/Footer/react'

import Footer from './style'

export default (props) => (
  <Footer>
    <React.Fragment>{props.children}</React.Fragment>
  </Footer>
)
