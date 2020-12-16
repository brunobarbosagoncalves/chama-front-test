import React from 'react'

import { List, Item } from './style'

export default (props) => (
  <List {...props}>
    {props.data.map((d, i) => (
      <Item
        key={`list-item-${i}`}
        onClick={() => props.findrepo(d.login)}
        {...d}
      >
        {d.login}
      </Item>
    ))}
  </List>
)
