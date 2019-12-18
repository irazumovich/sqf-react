import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'goals/components/navigation/navigation-item/navigation-item.scss';

const NavigationItem = ({ title, link, isActive, icon, rotate, notifications, color }) => (
    <div
        className={ClassNames('navigation-item__container', {
            'navigation-item__container--active': isActive
        })}
    >
        <Link to={link} className="navigation-item__link">
            <div className="navigation-item__notification">
                <span>{notifications}</span>
            </div>
            <span className={ClassNames("navigation-item__section", `navigation-item__${color}`)}>
                {!!rotate && <FontAwesomeIcon icon={icon} className="navigation-item__icon" color={color} rotation={rotate} />}
                {!!!rotate && <FontAwesomeIcon icon={icon} className="navigation-item__icon" />}
                {title}
            </span>
        </Link>
        {isActive && <div className="navigation-item__active"/>}
    </div>
);

NavigationItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    rotate: PropTypes.number
};

NavigationItem.defaultProps = {
    isActive: false,
    rotate: 0
};

export default NavigationItem;
