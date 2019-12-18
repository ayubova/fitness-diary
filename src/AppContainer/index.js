import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import AppBarMenu from '../AppBarMenu';
import ProductList from '../ProductList';

import {PRODUCTLIST} from '../constants/routes';

const AppContainer = () => {
    return (
        <div>
            <AppBarMenu />
            <Switch>
                <Route path={PRODUCTLIST} component={ProductList} />
                {/* <Route path={USER_MANAGEMENT_ROUTE} component={UserManagement} /> */}
            </Switch>
        </div>
    );
};

export default withRouter(AppContainer);
