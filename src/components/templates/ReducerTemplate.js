import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap'
function BrowserTemplate (props) {
    const {Style} = props;
        return (
            <fieldset className={Style}>
                <legend>Reducer Template</legend>
                <Jumbotron>
                    <Container>
                        <pre style={{borderRadius:'10px',fontSize:'100%'}}>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`import { ACTION_STATUS } from '../actions/actionTypes';
const initialState = {
    reducerState:true
};
export const Reducer = (state = initialState,action) => {
  switch (action.type) {
      case ACTION_STATUS:
          return {
            ...state,
            reducerState: action.reducerState,        
          };
    default:
      return state;
  }
};
`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
    };

export default BrowserTemplate;