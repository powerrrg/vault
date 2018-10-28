import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styles from '../styles/components_styles/Header.css';

@inject('viewerStore')
@observer

class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.viewerStore.pullFinancialData();
    }
    render() {
        return (
            <header id="header" className="header">
                Test task for React.js/Angular2+ developer
            </header>
        );
    }
}
export default Header;
