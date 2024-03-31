import { Palette } from '@mui/material/styles';
import createPalette from '@mui/material/styles/createPalette';

const palette: Palette = createPalette({
  primary: {
    light: '#c1d3fe',
    main: '#b6ccfe',
    dark: '#abc4ff',
  },
  secondary: {
    light: '#ffb3c6',
    main: '#ff8fab',
    dark: '#fb6f92',
  },
  error: {
    main: '#d84654',
  },
  text: {
    primary: '#5F6165',
    secondary: '#1F2128',
    disabled: '#adb5bd',
  },
  background: {
    default: '#F3F5F8',
    paper: '#FFFFFF',
    hover: '#ffebe7',
    selected: '#ffd6d3',
  },
});

export default palette;
