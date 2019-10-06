import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Jumbotron,Container } from 'react-bootstrap'
function StoreTemplate (props) {
    const {Style} = props;
        return (
            <fieldset className={Style}>
                <legend>Modal Template</legend>
                <Jumbotron>
                    <Container>
                        <pre style={{borderRadius:'10px',fontSize:'100%'}}>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
                                {
`import React from 'react'
import { Modal, View, Text } from 'react-native';
export defalt Modal = (props) => {
    <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
    >
    <View style={{flex:1,backgroundColor = 'rgba(r, g, b, opacity)'}}>
        <View>
            <Text>Content</Text>
        <View>
    </View>
</Modal>
}
`
                                }
                            </SyntaxHighlighter>
                        </pre>
                    </Container>
                </Jumbotron>
            </fieldset>
        )
    };

export default StoreTemplate;