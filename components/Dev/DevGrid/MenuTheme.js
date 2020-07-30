import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import BrushIcon from '@material-ui/icons/BrushRounded';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { useTheme, Switch } from '@material-ui/core';
import { THEME_TYPE } from '../../Theme/utils';
import ThemeContext from '../../Theme/context';
import { capitalize } from '../../../src/utils';

export default function MenuTheme() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const themeCtx = useContext(ThemeContext);
  const theme = useTheme();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeTheme = (themeName) => {
    themeCtx[`onChangeTheme${capitalize(themeName)}`]();
    // handleClose();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon fontSize="small" />}
        size="small"
      >
        <BrushIcon fontSize="small" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={themeCtx.toggleThemeType}
        >
          <Switch
            checked={theme.palette.type === THEME_TYPE.dark}
            // onChange={themeCtx.toggleThemeType}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </MenuItem>
        <MenuItem onClick={() => onChangeTheme('a')}>A</MenuItem>
        <MenuItem onClick={() => onChangeTheme('Default')}>Default</MenuItem>
      </Menu>
    </div>
  );
}
