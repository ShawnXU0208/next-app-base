export interface AppSettingsOptions {
  sidebar: {
    width: number; // width when drawer is open
    menuIconSize: number; // the font size of icon for sidebar menu, affects the width when sidebar drawer is closed
  };
  topbar: {
    height: number;
  };
}

const appSettings: AppSettingsOptions = {
  sidebar: {
    width: 240,
    menuIconSize: 20,
  },
  topbar: {
    height: 60,
  },
};

export default appSettings;
