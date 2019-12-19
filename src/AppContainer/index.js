import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import AppBarMenu from '../AppBarMenu';
import ProductList from '../ProductList';
import WorkoutPlan from '../WorkoutPlan';

import {PRODUCT_LIST, WORKOUT_PLAN} from '../constants/routes';

const AppContainer = () => {
    return (
        <div>
            <AppBarMenu />
            <Switch>
                <Route path={PRODUCT_LIST} component={ProductList} />
                <Route path={WORKOUT_PLAN} component={WorkoutPlan} />
            </Switch>
        </div>
    );
};

export default withRouter(AppContainer);
