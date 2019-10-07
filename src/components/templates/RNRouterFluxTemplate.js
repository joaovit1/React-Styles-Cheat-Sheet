import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap'

 function RNRFTemplate (props){
    const {Style} = props;
        return (
            <fieldset className={Style}>
                <legend>React Native Router Flux Template</legend>
                <Jumbotron>
                    <Container>
                        <pre style={{borderRadius:'10px',fontSize:'100%'}}>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`import HomePage from '../screens/homePage/Index'
import OtherPage from '../screens/otherPage/OtherPage'
import { Router, Scene, ActionConst } from 'react-native-router-flux'

class Routes extends Component {
    render() {
        return (
            <Router hideNavBar="true">
                <Scene hideNavBar key="root">
                    <Scene hideNavBar key="homepage" component={HomePage} title="Home Page" initial={true} />
                    <Scene hideNavBar key="otherpage" component={OtherPage} title="Other Page" />
                </Scene>
            </Router>
        )
    }
}
`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
}

export default RNRFTemplate