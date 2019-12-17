import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

const locationHelper = locationHelperBuilder({});

export const userIsNotAuthenticated = connectedRouterRedirect({
    redirectPath: (_, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/profile',
    authenticatedSelector: state => !state.auth.isAuthorized,
    wrapperDisplayName: 'userIsNotAuthenticated',
    allowRedirectBack: false
});

export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/auth/login',
    wrapperDisplayName: 'UserIsAuthenticated',
    authenticatedSelector: state => state.auth.isAuthorized
});

export const isAdmin = connectedRouterRedirect({
    redirectPath: '/client',
    wrapperDisplayName: 'isAdmin',
    authenticatedSelector: state => state.auth.getIn(['user', 'isAdmin']) && state.auth.get('isAuthorized')
});
