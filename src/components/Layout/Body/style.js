import styled from 'styled-components'

import { grid } from 'styles/theme'

const { xs, sm, md, lg, xl } = grid.breakpoints

export default styled.div`
  max-width: ${xl}px;
  width: 75vw;
  max-width: 75vw;
  overflow: auto;

  @media (max-width: ${xs}px) {
    width: 95vw;
    max-width: 95vw;
  }
  @media (max-width: ${sm}px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: ${md}px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: ${lg}px) {
    width: 85vw;
    max-width: 85vw;
  }
  @media (max-width: ${xl}px) {
    width: 80vw;
    max-width: 80vw;
  }
`
