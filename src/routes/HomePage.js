import React, { Component } from 'react';
import styles from '../styles/routes_styles/HomePage.css';

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="home-page">
                <h2 className="h2-1">Welcome to our new dashboard!</h2>
                <img className="home-image" src={"/src/images/welcome.jpg"} alt="welcome"/>
            </div>
        );
    }
}
export default  HomePage;
