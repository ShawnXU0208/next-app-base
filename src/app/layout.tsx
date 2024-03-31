import { Box, Stack } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

import Sidebar from './_components/app-frame/sidebar';
import Topbar from './_components/app-frame/topbar';
import muiTheme from './_styles/mui-theme';
import theme from './_styles/theme';
import './globals.css';

export const metadata = {
  title: 'My Next App',
  description: 'Next App 14 with Mui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={muiTheme}>
            <Stack direction='row' height='100%'>
              <Sidebar />
              <Stack direction='column' flexGrow={1} className='left-panel'>
                <Topbar />
                <Box
                  sx={{
                    background: 'pink',
                    height: '100%',
                    backgroundColor: theme.palette.background.default,
                    padding: theme.spacing(2),
                  }}
                >
                  {children}
                </Box>
              </Stack>
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
