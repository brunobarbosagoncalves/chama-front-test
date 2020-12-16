import styled from 'styled-components'

export default styled.div`
  display: inline-flex;
  flex: 1;
  width: 100%;

  & > * {
    margin: 0.5rem;
  }

  *:first-child {
    margin-left: 0px;
  }
  *:last-child {
    margin-right: 0px;
  }
`
