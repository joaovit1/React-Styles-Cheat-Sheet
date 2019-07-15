import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap'

function ClassTemplate () {
        return (
            <fieldset>
                <legend>Class Component Template</legend>
                <Jumbotron>
                    <Container>
                        <pre style={{borderRadius:'10px',fontSize:'100%'}}>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class StandardClass extends Component {
    constructor(props) {
      super(props)
      this.state = { username: 'João' }
    }
    render () {
        return( 
            <div>
                {this.state.username}
            </div>
        );
    }
}
export default StandardClass;`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
    };

export default ClassTemplate;