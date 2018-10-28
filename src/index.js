import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'App';
import viewerStore from './stores/Viewer';
import { Provider } from 'mobx-react';


const stores = {
    viewerStore,
};

const app = document.getElementById('app');
render(<Provider {...stores}><Router><App/></Router></Provider>, app);
