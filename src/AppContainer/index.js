import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import AppBarMenu from '../AppBarMenu';
import ProductList from '../ProductList';

import {PRODUCT_LIST} from '../constants/routes';

const AppContainer = () => {
    return (
        <div>
            <AppBarMenu />
            <Switch>
                <Route path={PRODUCT_LIST} component={ProductList} />
            </Switch>
        </div>
    );
};

export default withRouter(AppContainer);
