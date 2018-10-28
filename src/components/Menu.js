import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
import styles from '../styles/components_styles/Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="main-menu">
                <li>
                    <NavLink to={"/home"} exact strict><Icon name='home' /> Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/chart"}><Icon name='line graph' /> Chart</NavLink>
                </li>
                <li>
                    <NavLink to={"/table"}><Icon name='table' /> Table</NavLink>
                </li>
            </ul>
        );
    }
}
export default Menu;
