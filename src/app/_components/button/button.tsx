'use client';

import {
  Button as MuiButton,
  SvgIcon,
  Typography,
  useTheme,
} from '@mui/material';

interface PropsType {
  onClick: () => void;
  Icon?: typeof SvgIcon;
  iconSize?: string;
  children?: string;
}

function Button(props: PropsType) {
  const { onClick, Icon, iconSize, children } = props;
  const theme = useTheme();

  return (
    <MuiButton
      sx={{
        padding: theme.spacing(1),
        minWidth: 'initial',
        borderRadius: '8px',
        '&:hover': { backgroundColor: theme.palette.background.default },
      }}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          sx={{
            fontSize: iconSize ?? theme.typography.body1.lineHeight,
            color: theme.palette.primary.dark,
            mr: children && theme.spacing(1),
          }}
        />
      )}
      <Typography color={theme.palette.primary.dark} variant='body1'>
        {children}
      </Typography>
    </MuiButton>
  );
}

export default Button;
