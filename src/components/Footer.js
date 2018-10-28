import React, {Component} from 'react';
import styles from '../styles/components_styles/Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="footer" id="footer">
                Holovan Roman &copy; 2018
            </footer>
        );
    }
}
export default Footer;
