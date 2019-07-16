import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap'
function ProviderBrowserTemplate (props) {
    const {Style} = props;
        return (
            <fieldset className={Style}>
                <legend>Provider Browser Router Template</legend>
                <Jumbotron>
                    <Container>
                        <pre style={{borderRadius:'10px',fontSize:'90%'}}>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Store } from './store';
import Page from './components/page/Page' //Your page
import PageNotFound from './components/pagenotfound/Pagenotfound'
import App from './App';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />                
                <Route path="/page" exact={true} component={Page} />  
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
    };

export default ProviderBrowserTemplate;