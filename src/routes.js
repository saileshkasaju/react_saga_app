/**
 * Created by Edge on 6/3/2017.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
    </Route>
);