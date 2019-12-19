import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom';

import {PRODUCT_LIST, MENU, PROGRAM} from '../constants/routes';

import './style.scss';

const AppBarMenu = () => {
    const [isMenuOpen, setMenuIsMenuOpen] = React.useState(false);
    const iconRef = React.useRef(null);

    return (
        <div className="AppBarMenu">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        ref={iconRef}
                        className="AppBarMenu__menuIcon"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        onClick={() => setMenuIsMenuOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={iconRef && iconRef.current}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={isMenuOpen}
                        onClose={() => setMenuIsMenuOpen(false)}
                    >
                        <MenuItem component={Link} to={PRODUCT_LIST} onClick={() => setMenuIsMenuOpen(false)}>Список продуктов</MenuItem>
                        <MenuItem component={Link} to={MENU} onClick={() => setMenuIsMenuOpen(false)}>Меню на неделю</MenuItem>
                        <MenuItem component={Link} to={PROGRAM} onClick={() => setMenuIsMenuOpen(false)}>Программа тренировок</MenuItem>
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
