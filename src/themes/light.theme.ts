import { DefaultTheme } from 'styled-components';

import breakpoint from './tokens/breakpoint.token';
import color from './tokens/color.token';
import { fontweight } from './tokens/font.token';

const lightTheme: DefaultTheme = {
  theme: 'light',
  color,
  breakpoint,
  font: {
    family: "'Inter', sans-serif",
    weight: fontweight,
    color: {
      primary: color.black,
      secondary: color.darkGray,
    },
  },

  background: {
    color: {
      primary: color.white,
      secondary: color.lightWhite,
      navbar: color.blue,
      card: color.lightWhite,
    },
  },
};

export default lightTheme;
