import React from 'react';
import Typography from '@material-ui/core/Typography';

import ProductItem from './ProductItem';

import whiteProductList from '../constants/whiteProductList';
import blackProductList from '../constants/blackProductList';

import './style.scss';


const ProductList = () => (
    <div className="ProductList__wrapper">
        <div>
            <Typography variant="h5" gutterBottom>Можно</Typography>
            {whiteProductList.map((item) => <ProductItem {...item} />)}
        </div>
        <div>
            <Typography variant="h5" gutterBottom>Нельзя</Typography>
            {blackProductList.map((item) => <ProductItem {...item} />)}
        </div>
    </div>
);

export default ProductList;
