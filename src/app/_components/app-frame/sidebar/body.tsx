'use client';

import { List } from '@mui/material';
import { usePathname } from 'next/navigation';

import applications from './applications';
import MenuItem from './menu-item';

interface PropsType {
  iconOnly: boolean;
}

function SidebarMenus(props: PropsType) {
  const { iconOnly } = props;

  const pathname = usePathname();
  console.log(pathname);

  return (
    <List>
      {applications.map((application) => (
        <MenuItem
          key={application.name}
          iconOnly={iconOnly}
          title={application.name}
          Icon={application.icon}
          route={application.route}
          selected={pathname === application.route}
        />
      ))}
    </List>
  );
}

export default SidebarMenus;
