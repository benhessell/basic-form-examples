import React from 'react';
import {
  HashRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import Home from '../shell/Home.js'
import SingleFormClass from '../single-form-class/SingleFormClass.js'
import SingleFormFunc from '../single-form-func/SingleFormFunc.js'
import SingleFormReactHook from '../single-form-reacthook/SingleFormReactHook.js'

export default function Routes() {
  return (
    <div className="routes">
        <Router>
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/singleformclass">
                <SingleFormClass />
            </Route>
            <Route path="/singleformfunc">
                <SingleFormFunc />
            </Route>
            <Route path="/singleformreacthook">
                <SingleFormReactHook />
            </Route>
            </Switch>
        </Router>
    </div>
  );
}