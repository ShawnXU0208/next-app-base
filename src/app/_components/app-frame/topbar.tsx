'use client';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { AppTheme, Stack, useTheme } from '@mui/material';

import Button from '../button/button';

function Topbar() {
  const theme: AppTheme = useTheme();

  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='flex-end'
      padding={theme.spacing(2)}
      gap={theme.spacing(2)}
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: theme.app.topbar.height,
      }}
    >
      <Button
        Icon={AccountBalanceWalletOutlinedIcon}
        onClick={() => {
          console.log('clicked');
        }}
      >
        Wallet
      </Button>
      <Button
        Icon={ContactlessOutlinedIcon}
        onClick={() => {
          console.log('clicked');
        }}
      >
        Contact
      </Button>
      <Button
        Icon={NotificationsNoneOutlinedIcon}
        onClick={() => {
          console.log('clicked');
        }}
      />
    </Stack>
  );
}

export default Topbar;
