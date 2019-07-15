import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Store } from './store';
import TicTacToe from './components/tictactoe/TicTacToe'
import PageNotFound from './components/pagenotfound/Pagenotfound'
import Css from './components/css/Css';
import App from './App';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/TicTacToe" component={TicTacToe} />   
                <Route path="/css" exact={true} component={Css} />  
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
