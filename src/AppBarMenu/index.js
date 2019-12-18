import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import history from '../tools/history';
import {PRODUCTLIST, MENU} from '../constants/routes';

import './style.scss';

const AppBarMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isOpen = Boolean(anchorEl);

    const handleMenu = (event) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const handleOpenMenuItem = (route) => () => {
        handleClose();
        history.push(route);
    };
    return (
        <div className="AppBarMenu">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className="AppBarMenu__menuIcon"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={isOpen}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleOpenMenuItem(PRODUCTLIST)}>Список продуктов</MenuItem>
                        <MenuItem onClick={handleOpenMenuItem(MENU)}>Меню на неделю</MenuItem>
                        <MenuItem onClick={handleClose}>Программа тренировок</MenuItem>
                    </Menu>
                    <Typography variant="h6" className="AppBarMenu__title">Фитнес-дневник</Typography>
                    <div>
                        <IconButton
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBarMenu;
