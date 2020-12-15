export const colors = {
  black1: '#000000',

  white1: '#FFFFFF',
  white2: '#F8F8F8',

  gray1: '#EAECF2',
  gray2: '#DFE3E8',

  blue1: '#2E384D',
  blue2: '#194E95',

  green1: '#12980d',
  green2: '#4CAF50',

  pink1: '#FF4360',

  red1: '#F81235',
}

export const shadows = {
  gray1: '0px 1px 2px rgba(39, 39, 39, 0.14)',
}

export const grid = {
  breakpoints: {
    xs: 320,
    sm: 360,
    md: 768,
    lg: 966,
    xl: 1200,
  },
  container: {
    padding: 8,
  },
  row: {
    padding: 8,
  },
  col: {
    padding: 8,
  },
}

export const mediaQueries = {
  xs: `(min-width: ${grid.breakpoints.xs}px)`,
  sm: `(min-width: ${grid.breakpoints.sm}px)`,
  md: `(min-width: ${grid.breakpoints.md}px)`,
  lg: `(min-width: ${grid.breakpoints.lg}px)`,
  xl: `(min-width: ${grid.breakpoints.xl}px)`,
}

export default { colors, grid, mediaQueries }
