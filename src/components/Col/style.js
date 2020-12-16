import styled, { css } from 'styled-components'

export default styled.div`
  width: 100%;

  ${(props) =>
    props.c11 &&
    css`
      width: calc(100% / 12 * 11);
    `}
  ${(props) =>
    props.c10 &&
    css`
      width: calc(100% / 12 * 10);
    `}
  ${(props) =>
    props.c9 &&
    css`
      width: calc(100% / 12 * 9);
    `}
  ${(props) =>
    props.c8 &&
    css`
      width: calc(100% / 12 * 8);
    `}
  ${(props) =>
    props.c7 &&
    css`
      width: calc(100% / 12 * 7);
    `}
  ${(props) =>
    props.c6 &&
    css`
      width: calc(100% / 12 * 6);
    `}
  ${(props) =>
    props.c5 &&
    css`
      width: calc(100% / 12 * 5);
    `}
  ${(props) =>
    props.c4 &&
    css`
      width: calc(100% / 12 * 4);
    `}
  ${(props) =>
    props.c3 &&
    css`
      width: calc(100% / 12 * 3);
    `}
  ${(props) =>
    props.c2 &&
    css`
      width: calc(100% / 12 * 2);
    `}
  ${(props) =>
    props.c1 &&
    css`
      width: calc(100% / 12 * 2);
    `}
`
