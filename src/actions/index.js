import { INPUT_UPDATE_VALUE, GAME_STATUS, ERROR_STATUS, PLAYER_UPDATE_VALUE, RESET } from './actionTypes';

export const inputChange = (player1,player2) => ({
    type: INPUT_UPDATE_VALUE,
    player1: player1,
    player2: player2
});

export const gameChange = gameStatus => ({
    type: GAME_STATUS,
    gameStatus: gameStatus        
});

export const errorChange = errorStatus => ({
    type: ERROR_STATUS,
    error: errorStatus    
});

export const playerChange = (values,playerSymbol) => ({
    type: PLAYER_UPDATE_VALUE,
    values:values,
    playerSymbol:playerSymbol,
});

export const reset = () => ({
    type: RESET
});