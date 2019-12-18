import React from 'react';
import {Router} from 'react-router-dom';
import history from './tools/history';
import AppContainer from './AppContainer';

const App = () => {
    return (
        <Router history={history}>
            <AppContainer />
        </Router>
    );
};

export default App;
