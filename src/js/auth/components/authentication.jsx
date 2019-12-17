import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {shape, bool, string, arrayOf, obj} from 'prop-types';

import './authentication.scss';
import Spinner from "shared/components/spinner/spinner";

export const Authentication = ({routes, isLoading}) => {

    return isLoading ? <Spinner className="spinner-margin"/> : (
        <div className="authentication__container">
            <Switch>
                {routes.map((route, i) => (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={props => <route.component {...props} routes={route.routes}/>}
                    />
                ))}
                <Redirect from="*" to="/auth/login"/>
            </Switch>
        </div>
    );
};

Authentication.propTypes = {
    routes: arrayOf(
        shape({
            component: obj,
            isExact: bool,
            path: string
        })
    ).isRequired,
};