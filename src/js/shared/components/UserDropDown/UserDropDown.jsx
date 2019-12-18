import React from "react";
import {withRouter} from "react-router-dom";
import ClassNames from 'classnames';

import "./UserDropDown.scss";
import { bool } from "prop-types";
import Cookies from 'universal-cookie';
import axios from "axios";

const cookies = new Cookies();

const UserDropDown = ({isOpened, user}) => {

    const logout = () => {
        cookies.set('access_token', null, {path: '/'});
        window.location.reload();
    };

    const refreshGoals = () => {
        const token = cookies.get('access_token', {path: '/'});
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.post(`${process.env.BACKEND_APP_HOST}/users/${user.id}/goals/refresh`);
    };

    return (
        <div className={ClassNames("user-drop-down__container", {"user-drop-down__container--active" : isOpened})}>
            <div className="user-drop-down__item">
                <a href="#">Профиль</a>
            </div>
            <div className="user-drop-down__item">
                <a href="#">Сменить пароль</a>
            </div>
            <div className="user-drop-down__devider" />
            <div className="user-drop-down__item" onClick={refreshGoals}>
                <a href="#">Обновить цели</a>
            </div>
            <div className="user-drop-down__devider" />
            <div className="user-drop-down__item">
                <a onClick={logout} href="#">Выход</a>
            </div>
        </div>
    );
};

UserDropDown.propTypes = {
    isOpened: bool
};

UserDropDown.defaultProps = {
    isOpened: false
};

export default withRouter(UserDropDown);
