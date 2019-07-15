import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inputChange, gameChange, errorChange, playerChange, reset } from '../../actions';
import TictactoeBoard from './TictactoeBoard'
import TictactoeForm from './TictactoeForm'
import './tictactoe.css'

class TicTacToe extends Component {
    handleClick = (player1,player2) => {        
        const a = [1, 2, 3, 4, 5]
        const [first, second,third] = a
        console.log(first,second,third,'a');
        const {gameChange,inputChange,errorChange} = this.props;
        if(player1!=='' && player2!==''){
            gameChange("Started");
            inputChange(player1,player2);
        }
        else{
            errorChange(true);
        }
    }
    
    reset = () => {
        const {reset} = this.props;                
        reset();
    }
    
    render(){        
        const {player1,player2,gameStatus,error,playerChange,playerSymbol,values,gameChange,reset} = this.props;        
        return (
            <div>
            {
                gameStatus==='Waiting'?
                    <TictactoeForm
                        handleClick={this.handleClick}
                        handleKeyUp={this.handleKeyUp}
                        player1={player1}
                        player2={player2}
                        gameStatus={gameStatus}
                        error={error}
                    />                    
                :
                    <TictactoeBoard 
                        players={[player1,player2]} 
                        reset={reset}
                        playerChange={playerChange}
                        playerSymbol={playerSymbol}
                        values={values}
                        gameChange={gameChange}            
                        gameStatus={gameStatus}            
                    />
            }
            </div>      
        );}
}

const mapStateToProps = store => ({
    player1: store.inputvalue.player1,
    player2: store.inputvalue.player2,
    gameStatus: store.gameValue.gameStatus,
    error: store.errorValue.error,
    playerSymbol: store.playerValue.playerSymbol,
    values: store.playerValue.values,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ inputChange,gameChange,errorChange,playerChange,reset }, dispatch);  
export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);