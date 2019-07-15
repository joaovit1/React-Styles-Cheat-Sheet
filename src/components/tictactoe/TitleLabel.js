import React from 'react';
import {Button,Col,Row} from 'react-bootstrap/';
const TitleLabel = (props) => {
    const {players,playerSymbol,gameStatus,reset} = props;    
    return (    
        gameStatus==="Win"?
            <div className="board title" style={{backgroundColor:'limegreen'}}>
               <Row>
                   <Col></Col>
                    <Col sm>
                        {players[(playerSymbol === 'X'? 0 : 1)]} venceu!  
                    </Col>
                    <Col sm>
                        <Button onClick={reset} className="resetButton">Jogar novamente</Button>                                
                    </Col>    
               </Row>
                                                 
            </div>
        :
        gameStatus==="Tie"?
            <div className="board title" style={{backgroundColor:'grey'}}>
            Empate!<br/>
            <Button onClick={reset} className="resetButton">Jogar novamente</Button>
            </div>
        :                        
            <div className="board title">
            Vez do(a) {players[(playerSymbol === 'X'? 0 : 1)]}
            </div>
    );
};
export default TitleLabel;