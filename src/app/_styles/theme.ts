import { AppThemeOptions } from '@mui/material/styles';
import { createSpacing } from '@mui/system';

import appSettings from './app-settings';
import palette from './palette';
import typography from './typography';

const spacing = createSpacing(8);

const theme: AppThemeOptions = {
  palette: palette,
  typography: typography,
  spacing: spacing,
  app: appSettings,
};

// export const muiTheme = createTheme(theme);

export default theme;
