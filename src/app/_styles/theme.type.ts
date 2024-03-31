import { Palette, Theme, ThemeOptions } from '@mui/material/styles';
import { Typography } from '@mui/material/styles/createTypography';
import { Spacing } from '@mui/system';

import { AppSettingsOptions } from './app-settings';

declare module '@mui/material/styles' {
  interface AppThemeOptions extends ThemeOptions {
    palette: Palette;
    typography: Typography;
    spacing: Spacing;
    app: AppSettingsOptions;
  }

  interface TypeBackground {
    default: string;
    paper: string;
    hover: string;
    selected: string;
  }

  interface AppTheme extends Theme {
    app: AppSettingsOptions;
  }

  export function createTheme(options?: AppThemeOptions): AppTheme;
}
