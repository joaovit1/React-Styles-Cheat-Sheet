import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap'
import {Context} from '../../App'
function ProviderConsumerExample (props) {
    const {Style} = props;
        return (
            <Context.Consumer>
                {title =>
                <fieldset className={Style}>
                    <legend>{title}</legend>
                    <Jumbotron>
                        <Container>
                            <pre style={{borderRadius:'10px',fontSize:'100%'}}>
                                <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                    {
`//This class will provide the value
import React,{Component} from 'react';
export const Context = React.createContext(null);

class StandardClass extends Component {
    render () {
        return(
            <Context.Provider value={'Some value'}>
                <SomeClass/>
            </Context.Provider>
        );
    }
}
export default StandardClass;`
                                    }
                                </SyntaxHighlighter>
                                <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                    {
`//This class will consume the value
import {Context} from './StandardClass'
function SomeClass (props) {
    return (
        <Context.Consumer>
            {title =>
                <div>
                    Content here: {title}
                </div>
            }
        </Context.Consumer>
    )
};
export default SomeClass;
`                                   }
                                </SyntaxHighlighter>
                            </pre>
                        </Container>
                    </Jumbotron>
                </fieldset>}
            </Context.Consumer>
        )
    };

export default ProviderConsumerExample;