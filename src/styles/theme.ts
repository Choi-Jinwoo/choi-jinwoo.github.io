const colors = {
  white: '#ffffff',
  gray0: '#f8f8f8',
  gray1: '#efefef',
  gray2: '#d9d9d9',
  gray3: '#ababab',
  gray4: '#848484',
  gray5: '#747474',
  gray6: '#5d5d5d',
  gray7: '#444444',
  black: '#1d1d1d',
  blue: '#0064FF',
};

const sizes = {
  xxxLarge: '2.5rem',
  xxLarge: '2rem',
  xLarge: '1.75rem',
  large: '1.5rem',
  medium: '1.25rem',
  regular: '1rem',
  small: '0.75rem',
  tiny: '0.5rem',
};

const device = {
  tablet: '(max-width: 1280px)',
  mobile: '(max-width: 770px)',
};

const inner = {
  desktop: '1200px',
  tablet: '750px',
  mobile: '95%',
};

export const theme = {
  colors,
  sizes,
  device,
  inner,
};

export type Theme = typeof theme;
