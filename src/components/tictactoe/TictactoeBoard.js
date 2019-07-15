import React,{Component} from 'react';
//import { connect } from 'react-redux';
import Cell from '../cell/Cell.js'
import TitleLabel from './TitleLabel'

class TictactoeBoard extends Component {    
    
     handleClick = (keys) =>{
        const {playerSymbol,playerChange,values,gameChange,gameStatus} = this.props;
         
        if(gameStatus!=="Win" && gameStatus!=="Tie"){
            var newValues = [...values];
            
            if(newValues[keys]===''){
                newValues[keys] = playerSymbol;
                
                if(this.verifyWin(newValues)){
                    gameChange('Win');
                    playerChange(newValues,playerSymbol);
                }
                else if(this.verifyTie(newValues)){
                    gameChange('Tie');
                    playerChange(newValues,playerSymbol);
                }
                else{
                    if(playerSymbol==='X'){
                        playerChange(newValues,'O');
                    }
                    else{
                        playerChange(newValues,'X');                                        
                    }   
                }
            }
        }                         
    }

    verifyWin(values){
        if(this.compare(values.slice(0,3)))
            return true;
        else if (this.compare(values.slice(3,6)))
            return true;
        else if (this.compare(values.slice(6,9)))
            return true;
        else if (this.compare([values[0],values[3],values[6]]))
            return true;
        else if (this.compare([values[1],values[4],values[7]]))
            return true;
        else if (this.compare([values[2],values[5],values[8]]))
            return true;
        else if (this.compare([values[0],values[4],values[8]]))
            return true;
        else if (this.compare([values[2],values[4],values[6]]))
            return true;
        return false;
    }

    verifyTie(values){
        for(var i=0;i<9;i++){
            if(values[i]==='')
                return false
        }
        return true;
    }

    compare(a){
        if(a[0]===a[1] && a[1]===a[2])
            if(a[0]!=='')
            return true;
        return false;
    }

    render(){
        const {players,playerSymbol,values,reset,gameStatus} = this.props;        
        return (            
            <div className="tictactoe">
                <TitleLabel 
                    players={players} 
                    playerSymbol={playerSymbol} 
                    gameStatus={gameStatus} 
                    reset={reset}
                />
                <div className="line" style={{width:"100%",height:"25%"}}>
                    <Cell keys="0" value={values[0]} onClick={this.handleClick}/>
                    <Cell keys="1" value={values[1]} onClick={this.handleClick}/>
                    <Cell keys="2" value={values[2]} onClick={this.handleClick}/>            
                </div>
                <div className="line" style={{width:"100%",height:"25%"}}>
                    <Cell keys="3" value={values[3]} onClick={this.handleClick}/>
                    <Cell keys="4" value={values[4]} onClick={this.handleClick}/>
                    <Cell keys="5" value={values[5]} onClick={this.handleClick}/>
                </div>
                <div className="line" style={{width:"100%",height:"25%"}}>
                    <Cell keys="6" value={values[6]} onClick={this.handleClick}/>
                    <Cell keys="7" value={values[7]} onClick={this.handleClick}/>
                    <Cell keys="8" value={values[8]} onClick={this.handleClick}/>
                </div>
            </div>
        );}
}

//const mapStateToProps = store => ({
//    playerSymbol: store.playerValue.playerSymbol,
//    values: store.playerValue.values,
//});
//const mapDispatchToProps = dispatch =>
//    bindActionCreators({ playerChange/*,reset*/ }, dispatch);  
export default /*connect(mapStateToProps, mapDispatchToProps)*/ (TictactoeBoard);
