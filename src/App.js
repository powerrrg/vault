import React, {Component} from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Routes
import HomePage from "./routes/HomePage";
import TablePage from "./routes/TablePage";
import ChartPage from "./routes/ChartPage";

import './styles/main.css';
import './styles/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="c-main">
                <Header/>
                    <div className="c-columns">
                        <Sidebar />
                        <div className="c-main-content">
                            <Switch>
                                <Route path="/home" component={HomePage}/>
                                <Route path="/table" component={TablePage}/>
                                <Route path="/chart" component={ChartPage}/>
                                <Route path="/" component={HomePage}/>
                            </Switch>
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(App);
