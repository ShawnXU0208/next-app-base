'use client';

import {
  AppTheme,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Tooltip,
  useTheme,
} from '@mui/material';
import Link from 'next/link';

interface PropsType {
  iconOnly: boolean;
  title: string;
  Icon: typeof SvgIcon;
  route: string;
  selected: boolean;
}

function MenuItem(props: PropsType) {
  const { iconOnly, title, Icon, route, selected } = props;
  const theme: AppTheme = useTheme();

  return (
    <Tooltip title={iconOnly ? title : ''} placement='right'>
      <Link href={route} style={{ textDecoration: 'none' }}>
        <ListItemButton
          sx={{
            borderRadius: theme.spacing(1),
            '&:hover': {
              backgroundColor: selected
                ? theme.palette.background.selected
                : theme.palette.background.hover,
            },
            '& .MuiTouchRipple-root': {
              width: '0px',
            },
            backgroundColor: selected
              ? theme.palette.background.selected
              : theme.palette.background.paper,
            height: `calc(${theme.typography.subtitle1.lineHeight} + ${theme.spacing(3)})`,
          }}
        >
          <ListItemIcon sx={{ minWidth: theme.app.sidebar.menuIconSize }}>
            <Icon
              sx={{
                fontSize: theme.typography.subtitle1.lineHeight,
                color: theme.palette.text.primary,
              }}
            />
          </ListItemIcon>
          {!iconOnly && (
            <ListItemText
              primary={title}
              primaryTypographyProps={{
                variant: 'subtitle1',
              }}
              sx={{ ml: theme.spacing(2) }}
            />
          )}
        </ListItemButton>
      </Link>
    </Tooltip>
  );
}

export default MenuItem;
