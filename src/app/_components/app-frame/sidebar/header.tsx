'use client';

import logoImg from '@/../public/logo.png';
import { AppTheme, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

function SidebarHeader() {
  const appTitle = 'MY APP';
  const theme: AppTheme = useTheme();

  return (
    <Stack direction='row' alignItems='center' height={theme.app.topbar.height}>
      <Image alt='app icon' src={logoImg} width={37} height={37} />
      <Typography variant='h1' marginLeft={theme.spacing(1)}>
        {appTitle}
      </Typography>
    </Stack>
  );
}

export default SidebarHeader;
