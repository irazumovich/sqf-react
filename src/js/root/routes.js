import {
    userIsNotAuthenticated,
    userIsAuthenticated
} from "./tools/auth-tool";
import Authentication from "../auth/components";
import ForgotPassword from "../auth/components/forgot-password";
import ResetPassword from "../auth/components/reset-passsword";
import LogIn from "../auth/components/log-in";
import Logout from "../auth/components/logout/logout";
import Home from "home/components";
import Goal from "goals/components/goal";
import Profile from "profile/components";
// import LogIn from "auth/components/log-in";
// import Logout from "auth/components/logout";

export const ROUTES = [
    {
        path: "/auth",
        component: userIsNotAuthenticated(Authentication),
        routes: [
            {
                path: "/auth/forgot-password",
                component: ForgotPassword,
                exact: true
            },
            {
                path: "/auth/reset-password/:token",
                component: ResetPassword,
                exact: true
            },
            {
                path: "/auth/login",
                component: LogIn,
                exact: true
            },
        ]
    },
    {
        path: "/goals/:id",
        component: userIsAuthenticated(Goal),
        exact: true
    },
    {
        path: "/profile",
        component: userIsAuthenticated(Profile),
        exact: true
    },
    {
        path: "/logout",
        component: Logout,
        exact: true
    },
];
