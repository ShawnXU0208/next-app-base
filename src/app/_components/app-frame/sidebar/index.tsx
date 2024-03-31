'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { AppTheme, Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

import Button from '../../button/button';
import SidebarMenus from './body';
import SidebarFooter from './footer';
import SidebarHeader from './header';

function Sidebar() {
  const theme: AppTheme = useTheme();

  const onSmallScreen = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });

  // control sidebar drawer open/close state
  const [drawerOpen, setDrawerOpen] = useState(!onSmallScreen);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  useEffect(() => {
    setDrawerOpen(!onSmallScreen);
  }, [onSmallScreen]);

  const closedWidth =
    parseInt(theme.spacing(2)) * 2 * 2 + theme.app.sidebar.menuIconSize;

  return (
    <Box
      sx={{
        width: drawerOpen ? theme.app.sidebar.width : closedWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: drawerOpen
            ? theme.transitions.duration.enteringScreen
            : theme.transitions.duration.leavingScreen,
        }),
        borderRight: `1px solid ${theme.palette.background.default}`,
      }}
    >
      <Stack
        direction='column'
        justifyContent='space-between'
        sx={{
          px: theme.spacing(2),
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <div>
          <Stack
            direction='row'
            justifyContent={drawerOpen ? 'space-between' : 'center'}
            alignItems='center'
            height={theme.app.topbar.height}
            mb={theme.spacing(3)}
            pt={theme.spacing(3)}
          >
            {drawerOpen && <SidebarHeader />}
            <Button onClick={toggleDrawer} Icon={MenuIcon} iconSize='25px' />
          </Stack>
          <SidebarMenus iconOnly={!drawerOpen} />
        </div>
        <SidebarFooter iconOnly={!drawerOpen} />
      </Stack>
    </Box>
  );
}

export default Sidebar;
