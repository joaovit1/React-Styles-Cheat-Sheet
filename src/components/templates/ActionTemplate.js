import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap';
function ActionTemplate (props) {
    const {Style} = props;
        return (
            <fieldset className={Style}>
                <legend>Action Template</legend>
                <Jumbotron>
                    <Container>
                        <pre style={{borderRadius:'10px',fontSize:'100%'}}>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`import { ACTION_STATUS } from './actionTypes';

export const actionChange = (newState) => ({
    type: INPUT_UPDATE_VALUE,
    reducerState: newState,
});
`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
    };

export default ActionTemplate;