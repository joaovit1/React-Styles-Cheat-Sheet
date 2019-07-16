import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap'
function MappingStateTemplate (props) {
    const {Style} = props;
        return (
            <fieldset className={Style}>
                <legend>Mapping State Example</legend>
                <Jumbotron>
                    <Container>
                        <pre style={{borderRadius:'10px',fontSize:'90%'}}>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`import { connect } from 'react-redux'
// A functional React component
function App ({ message, onMessageClick }) {
  return (
    <div onClick={() => onMessageClick('hello')}>
      {message}
    </div>
  )
}
// Maps 'state' to 'props':
// These will be added as props to the component.
function mapState (state) {
  return { message: state.message }
}

// Maps 'dispatch' to 'props':
function mapDispatch (dispatch) {
  return {
    onMessageClick (message) {
      dispatch({ type: 'click', message })
    }
  }
}
// Connect them:
export default connect(mapState, mapDispatch)(App)`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
    };

export default MappingStateTemplate;