import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faBars, faUserCircle
} from "@fortawesome/free-solid-svg-icons";

import "./header.scss";
import UserDropDown from "shared/components/UserDropDown";
import ClassNames from "classnames";
// import TilesDropDown from "shared/components/TilesDropDown";

const Header = ({isAuthenticated, userImage}) => {
    const [isOpenedUserDropDown, setOpenedUserDropDown] = useState(false);
    const [isOpenedTilesDropDown, setOpenedTilesDropDown] = useState(false);

    return (
        <header className="header__container">
            <div className="header__logo-container">
                <div className="header__logo"/>
            </div>
            <div className="header__main-title">
                <h2>Staff Qualifier</h2>
            </div>
            <div className="header__user-container">
                <div className="header__user-navcontainer">
                    <div className="header__user-image">
                        {userImage ?
                            <img src={userImage} /> :
                            <FontAwesomeIcon icon={faUserCircle} size='3x'/>
                        }
                    </div>
                    {isAuthenticated ? <>
                        < div className={
                            ClassNames(
                                "header__nav-icon", {"header__nav-icon--active": isOpenedUserDropDown})}
                              onClick={() => setOpenedUserDropDown(!isOpenedUserDropDown)}
                        >
                            <FontAwesomeIcon
                                icon={faBars}
                                className="header__user-logo"
                            />
                        </div>
                        <UserDropDown isOpened={isOpenedUserDropDown}/>
                    </> : ''
                    }
                    {/*<div className={ClassNames("header__nav-icon", {"header__nav-icon--active" : isOpenedTilesDropDown})}*/}
                    {/*    onClick={() => setOpenedTilesDropDown(!isOpenedTilesDropDown)}*/}
                    {/*>*/}
                    {/*    <FontAwesomeIcon*/}
                    {/*        className="header__user-logo"*/}
                    {/*        icon={faPlus}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<TilesDropDown isOpened={isOpenedTilesDropDown}/>*/}
                </div>
            </div>
        </header>
    );
};

export default withRouter(Header);
