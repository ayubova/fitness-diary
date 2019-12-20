import React from 'react';
import Grid from '@material-ui/core/Grid';

import MenuItem from './MenuItem';

import menu from '../constants/menu';

import './style.scss';


const Menu = () => (
    <div className="Menu__wrapper">
        <Grid container className="Menu__container" justify="center">
            {menu.map((item) => (
                <Grid item className="Menu__item" justify="center">
                    <MenuItem {...item} />
                </Grid>
            ))}
        </Grid>
    </div>
);

export default Menu;
