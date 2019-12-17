import React from 'react';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import {Route, Switch, Router, Redirect} from 'react-router-dom';

import createStore from 'root/store';
import {ROUTES} from 'root/routes';

import 'root/components/root/App.css';

import Header from 'root/components/header';
import Navigation from 'goals/components/navigation/navigation-section'
import LogIn from "auth/components/log-in";
import {checkAuthAction} from "auth/actions";
import {CookiesProvider, withCookies, Cookies} from "react-cookie";
import {instanceOf} from "prop-types";
import Spinner from "shared/components/spinner/spinner";

const store = createStore();
export const history = createBrowserHistory({});

class App extends React.PureComponent {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentDidMount() {
        const {cookies} = this.props;
        store.dispatch(checkAuthAction(cookies))
    }

    render() {
        return (
            <CookiesProvider>
                <Provider store={store}>
                    <div className="app-content" ref={this.test}>
                        <Router history={history}>
                            <Header/>
                            <Navigation/>
                            <Switch>
                                {ROUTES.map((route, i) => (
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        render={props => <route.component {...props} routes={route.routes}/>}
                                    />
                                ))}
                                <Redirect from='*' to='/profile'/>
                            </Switch>
                        </Router>
                    </div>
                </Provider>
            </CookiesProvider>
        );
    }
};

export default withCookies(App);
