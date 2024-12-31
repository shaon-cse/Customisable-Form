import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import FormBuilder from './components/Forms/FormBuilder';
import FormTemplate from './components/Forms/FormTemplate';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/form-builder" component={FormBuilder} />
                <Route path="/form-template/:id" component={FormTemplate} />
            </Switch>
        </Router>
    );
};

export default Routes;