import styled, { css } from 'styled-components'

export default styled.div`
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
  width: 100%;
  text-align: ${(props) => props.textalign || 'left'};

  ${(props) =>
    props.h1 &&
    css`
      font-size: 2.5rem;
    `}

  ${(props) =>
    props.h2 &&
    css`
      font-size: 2rem;
    `}
  ${(props) =>
    props.h3 &&
    css`
      font-size: 1.5rem;
    `}

  ${(props) =>
    props.h4 &&
    css`
      font-size: 1rem;
    `}

  ${(props) =>
    props.h5 &&
    css`
      font-size: 0.5rem;
    `}
`
