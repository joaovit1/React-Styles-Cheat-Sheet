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
import { bindActionCreators } from 'redux'
import { messageClick } from '../actions'
// A functional React component
class App extends React.Component {
  return (
    <div onClick={() => messageClick('hello')}>
      {message}
    </div>
  )
}
// Maps 'state' to 'props':
// These will be added as props to the component.
const mapStateToProps = (store) => ({
	messageStatus: store.message.messageStatus
})

// Maps 'dispatch' to 'props':
const mapDispatchToProps = dispatch =>
  bindActionCreators({ messageClick }, dispatch);

// Connect them:
export default connect(mapStateToProps, mapDispatchToProps)(App);`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
    };

export default MappingStateTemplate;