'use client';

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Divider, List } from '@mui/material';

import MenuItem from './menu-item';

interface PropsType {
  iconOnly: boolean;
}

function SidebarFooter(props: PropsType) {
  const { iconOnly } = props;

  return (
    <div>
      <Divider />
      <List>
        <MenuItem
          key='settings'
          iconOnly={iconOnly}
          title='settings'
          Icon={SettingsOutlinedIcon}
          route='/'
        />
        <MenuItem
          key='log-out'
          iconOnly={iconOnly}
          title='log out'
          Icon={LogoutOutlinedIcon}
          route='/'
        />
      </List>
    </div>
  );
}

export default SidebarFooter;
