const colors = {
  white: '#ffffff',
  gray1: '#ebe9ec',
  gray2: '#d9d9d9',
  gray3: '#ababab',
  gray4: '#848484',
  gray5: '#747474',
  gray6: '#5d5d5d',
  gray7: '#444444',
  black: '#1d1d1d',
};

const sizes = {
  xxLarge: '2rem',
  xLarge: '1.75rem',
  large: '1.5rem',
  medium: '1.25rem',
  regular: '1rem',
  small: '0.75rem',
  tiny: '0.5rem',
};

const inner = {
  desktop: '1200px',
};

export const theme = {
  colors,
  sizes,
  inner,
};

export type Theme = typeof theme;
