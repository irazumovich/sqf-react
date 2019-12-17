import React from "react";
import {withRouter} from "react-router-dom";
import ClassNames from 'classnames';

import "./UserDropDown.scss";
import { bool } from "prop-types";

const UserDropDown = ({isOpened}) => {
    return (
        <div className={ClassNames("user-drop-down__container", {"user-drop-down__container--active" : isOpened})}>
            <div className="user-drop-down__item">
                <a href="#">Профиль</a>
            </div>
            <div className="user-drop-down__item">
                <a href="#">Сменить пароль</a>
            </div>
            <div className="user-drop-down__devider" />
            <div className="user-drop-down__item">
                <a href="#">Открытые цели</a>
            </div>
            <div className="user-drop-down__item">
                <a href="#">Закрытые цели</a>
            </div>
            <div className="user-drop-down__devider" />
            <div className="user-drop-down__item">
                <a href="#">Выход</a>
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
