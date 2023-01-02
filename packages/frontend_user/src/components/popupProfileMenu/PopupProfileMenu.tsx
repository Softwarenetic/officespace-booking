import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import { Divider, IconButton, ListItemIcon, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './PopupProfileMenu.scss'

 function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon color="disabled" sx={{ fontSize: 50 }} />
      </IconButton>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        
        
>
        <Typography color="text.secondary" variant="caption" sx={{mx:2}} >
          John Doue
        </Typography>
        <Typography variant="subtitle2" noWrap sx={{mx:2}}>johndoue@gmail.com</Typography>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsIcon color="disabled" sx={{ fontSize: 20 }} />
          </ListItemIcon>
          <Typography variant="subtitle2" >Settings</Typography>
        </MenuItem>
        <Divider variant='fullWidth'/>
        <MenuItem onClick={handleClose}>
        <Typography variant="caption">Log out</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default BasicMenu