import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import AppBarMenu from '../AppBarMenu';
import ProductList from '../ProductList';
import WorkoutPlan from '../WorkoutPlan';
import Menu from '../Menu';
import Main from '../Main';

import {PRODUCT_LIST, WORKOUT_PLAN, MENU} from '../constants/routes';

const AppContainer = () => {
    return (
        <div>
            <AppBarMenu />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path={PRODUCT_LIST} component={ProductList} />
                <Route path={WORKOUT_PLAN} component={WorkoutPlan} />
                <Route path={MENU} component={Menu} />
            </Switch>
        </div>
    );
};

export default withRouter(AppContainer);
