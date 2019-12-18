import React from "react";
import { string, shape } from "prop-types";
import { withRouter } from "react-router-dom";


import "goals/components/navigation/navigation-section/navigation.scss";
import NavigationItem from "../navigation-item/navigation-item";
import {faAt, faDollarSign, faHashtag, faPercent, faBahai} from "@fortawesome/free-solid-svg-icons";

const NAVIGATION_ROUTES = [
    {
        title: "Menu Item 1",
        link: "/a",
        icon: faBahai
    },
    {
        title: "Menu Item 2",
        link: "/b",
        icon: faBahai,
        notifications: 2,
    },
    {
        title: "Menu Item 3",
        link: "/c",
        icon: faBahai,
        notifications: 1,
    },
    {
        title: "Menu Item 4",
        link: "/d",
        icon: faBahai
    }
];

class Navigation extends React.PureComponent {
    static propTypes = {
        location: shape({
            pathname: string
        }).isRequired
    };

    componentDidUpdate(prevProps) {
        if (this.props.token && this.props.userId !== prevProps.userId) {
            console.log('token', this.props.token);
            console.log(this.props.userId)
            this.props.loadGoals(this.props.userId);
        }
    }

    render() {
        const { location, isAuthorized, goals } = this.props;
        const { pathname } = location;

        return (
            <aside className="navigation__container">
                {
                    isAuthorized &&
                    <div className="navigation__content">
                        {goals && goals.map((goal, i) => {
                            let color;
                            switch (goal.status) {
                                case 'Выполнена':
                                    color = 'green';
                                    break;
                                case 'В процессе':
                                    color = 'blue';
                                    break;
                                case 'Назначена':
                                    color = 'red';
                                    break;
                                default:
                                    color = 'yellow';
                            }
                            return (
                                <NavigationItem
                                    customPath={i}
                                    icon={faBahai}
                                    key={i}
                                    title={goal.name}
                                    link={`/goals/${i}`}
                                    // rotate={route.rotate}
                                    isActive={pathname.includes(`/goals/${i}`)}
                                    notifications={goal.unread}
                                    color={color}
                                />
                            )
                        })}
                    </div>
                }
            </aside>
        );
    }
}

export default withRouter(Navigation);
