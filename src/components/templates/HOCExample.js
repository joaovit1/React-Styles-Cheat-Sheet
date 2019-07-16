import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap';
function HOCExample (props) {
    const {Style,title} = props;
        return (
            <fieldset className={Style}>
                <legend>{title}</legend>
                <Jumbotron>
                    <Container>
                        <pre style={{borderRadius:'10px',fontSize:'100%'}}>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`import React,{Component} from 'react'
import SomeClass from './SomeClass'

const withContent = Element => props =>
<Element {...props} content="I'm passed by HOC" />`
                                }
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {`
const SomeClassWithContent = withContent(SomeClass);
class StandardClass extends Component {
    render () {        
        return(
            <div>
                Rendering Class without HOC:
                <SomeClass/>

                Rendering Class with HOC:
                <SomeClassWithContent/>
            </div>
        );
    }
}
export default StandardClass;`
                                }
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`import React,{Component} from 'react'
class SomeClass extends Component {
    render () {        
        return(
            <div>
                Content passed here: {this.props.content}
            </div>
        );
    }
}
export default SomeClass;`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
    };

export default HOCExample;