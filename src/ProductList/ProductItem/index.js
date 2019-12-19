import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const ProductItem = ({name, description}) => (
    <List key={name} dense>
        <ListItem>
            <ListItemText primary={name} secondary={description} />
        </ListItem>
    </List>
);

export default ProductItem;
