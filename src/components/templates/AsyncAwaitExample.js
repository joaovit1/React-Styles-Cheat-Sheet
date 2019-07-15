import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap'

function AsyncAwaitExample () {
        return (
            <fieldset>
                <legend>Async/Await Functions Example</legend>
                <Jumbotron>
                    <Container>
                        <pre style={{borderRadius:'10px',fontSize:'95%'}}>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`changeBackground = (color,time) => {
  return new Promise(resolve=>{
    setTimeout(() => 
        resolve(this.setState({backgroundColor:color})),time
    );
  })
}

callChange = async () =>{
  await this.changeBackground('darkviolet',1000);
}`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
    };

export default AsyncAwaitExample;