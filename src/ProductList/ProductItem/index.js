import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import '../style.scss';

const ProductItem = ({name, description}) => (
    <List key={name} dense disablePadding>
        <ListItem divider className="ProductList__listItem">
            <ListItemText primaryTypographyProps={{variant: 'h6'}} primary={name} secondary={description} />
        </ListItem>
    </List>
);

export default ProductItem;
