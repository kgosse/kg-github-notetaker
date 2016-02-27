/**
 * Created by kevin on 26/02/2016.
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="profile/:username" component={Profile} />
        <Route path="*" component={Home} />
    </Route>
);
