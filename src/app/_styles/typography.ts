'use client';

import createTypography from '@mui/material/styles/createTypography';
import { DM_Sans } from 'next/font/google';

import palette from './palette';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

// lineheight: fontsize * 1.4

const typography = createTypography(palette, {
  h1: {
    fontFamily: dmSans.style.fontFamily,
    fontSize: '24px',
    lineHeight: '34px',
    fontWeight: 700,
    color: palette.text.secondary,
    whiteSpace: 'nowrap',
  },
  h2: {
    fontFamily: dmSans.style.fontFamily,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
    color: palette.text.secondary,
    whiteSpace: 'nowrap',
  },
  subtitle1: {
    // used for title of menus (sidebar)
    fontFamily: dmSans.style.fontFamily,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
    color: palette.text.primary,
    whiteSpace: 'nowrap',
  },
  body1: {
    fontFamily: dmSans.style.fontFamily,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
    color: palette.text.primary,
  },
});

export default typography;
