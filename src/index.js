import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import Css from './components/css/Css';

ReactDOM.render(    
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />                                
                <Route path="/css" exact={true} component={Css} />                                
            </Switch>
        </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();


