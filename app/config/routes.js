/**
 * Created by kevin on 26/02/2016.
 */

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import { Router, Route } from 'react-router';

module.exports = (
    <Route path="/" component={Main}>
        <Route path="*" component={Home} />
    </Route>
);
