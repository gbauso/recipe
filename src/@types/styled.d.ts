import 'styled-components';

import { Color } from '@/themes/tokens/color.token';
import { Font } from '@/themes/tokens/font.token';
import { ThemeType } from '@/themes/tokens/theme.token';
import { Breakpoint } from '@/themes/tokens/breakpoint.token';
import { Background } from '@/themes/tokens/background.token';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: ThemeType;
    breakpoint: Breakpoint;
    background: Background;
    color: Color;
    font: Font;
  }
}
