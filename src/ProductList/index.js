import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import whiteProductList from '../constants/whiteProductList';
import blackProductList from '../constants/blackProductList';

import './style.scss';

const ProductList = () => (
    <div className="ProductList__wrapper">
        <div>
            <Typography variant="h5" gutterBottom>Можно</Typography>
            {whiteProductList.map(({name, description}) => (
                <List dense>
                    <ListItem>
                        <ListItemText primary={name} secondary={description} />
                    </ListItem>
                </List>
            ))}
        </div>
        <div>
            <Typography variant="h5" gutterBottom>Нельзя</Typography>
            {blackProductList.map(({name, description}) => (
                <List dense>
                    <ListItem>
                        <ListItemText primary={name} secondary={description} />
                    </ListItem>
                </List>
            ))}
        </div>
    </div>
);

export default ProductList;
