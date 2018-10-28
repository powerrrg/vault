import React, {Component} from 'react';
import styles from '../styles/components_styles/Loader.css';

class Loader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="c-loader">
                <div className="loader-text">Loading...</div>
                <div>
                    <img className="loader-img" src={"/src/images/loader.gif"} alt="loader"/>
                </div>
            </div>
        );
    }
}
export default Loader;
