import React, {Component} from 'react';
import Menu from '../components/Menu';
import styles from '../styles/components_styles/Sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="sidebar" id="sidebar">
                <Menu />
            </div>
        );
    }
}
export default Sidebar;
