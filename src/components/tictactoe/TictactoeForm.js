import React,{Component} from 'react';
import {Col,Row,Button} from 'react-bootstrap/';

class TictactoeForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            player1:'',
            player2:''
        }
    }
    
    handleChange = (e) => {        
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    render(){ 
        const {error,handleClick} = this.props;
        const {player1,player2} = this.state;
        return (
            <div className="tictactoe form container">
               <Row className="form title">Digite o nome dos jogadores</Row>
               <Row>
                   {
                        error && 
                        <div className="errormessage">Você precisa escrever o nome dos jogadores antes de começar o jogo!</div>
                   }
               </Row>             
                <Row className="players">
                    <Col>
                        Player 1<br/>
                        <input id="player1" type="text" value={player1} onChange={this.handleChange}/>
                    </Col>
                    <Col>
                        Player 2<br/>
                        <input id="player2" type="text" value={player2} onChange={this.handleChange}/>
                    </Col>                    
                </Row>
                <Row><Button onClick={() => handleClick(player1,player2)} style={{marginTop:"20px"}}>Jogar TicTacToe!</Button></Row>
            </div>
        );}

};
export default TictactoeForm;