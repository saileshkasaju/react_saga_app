/**
 * Created by Edge on 6/3/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
);