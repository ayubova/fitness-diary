import React from 'react';
import Typography from '@material-ui/core/Typography';
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';

import ProductItem from './ProductItem';

import whiteProductList from '../constants/whiteProductList';
import blackProductList from '../constants/blackProductList';

import './style.scss';


const ProductList = () => (
    <div className="ProductList__wrapper">
        <Grid container item className="ProductList__column">
            <div className="ProductList__columnTitle">
                <CheckIcon className="ProductList__icon" />
                <Typography variant="h5" gutterBottom>Можно</Typography>
            </div>
            {whiteProductList.map((item) => (<Grid key={item.name} item><ProductItem {...item} /> </Grid>))}
        </Grid>
        <Grid container item className="ProductList__column">
            <div className="ProductList__columnTitle">
                <BlockIcon className="ProductList__icon" />
                <Typography variant="h5" gutterBottom>Нельзя</Typography>
            </div>
            {blackProductList.map((item) => (<Grid key={item.name} item><ProductItem {...item} /> </Grid>))}
        </Grid>
    </div>
);

export default ProductList;
