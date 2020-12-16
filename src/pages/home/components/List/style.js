import styled from 'styled-components'

export const List = styled.div`
  max-height: 12rem;
  overflow: auto;
`
export const Item = styled.div`
  border: 1px solid gray;
  padding: 1rem;
  margin: 1rem 0;

  :hover {
    cursor: pointer;
    background-color: gray;
    color: white;
  }
`
