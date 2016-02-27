/**
 * Created by kevin on 25/02/2016.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory} from 'react-router';
import routes from './config/routes';

import Main from './components/Main';

ReactDom.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
);

