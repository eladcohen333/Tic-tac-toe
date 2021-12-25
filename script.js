const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];
    
const state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    
var player = 1;
var gameEnd = false;
var loose_m = "You loose";
var counter = 0;
 
//function  reastart game : clear the board and restart the timmer 
function restart_game(){

        counter=0
        let boardempty = document.querySelectorAll(".l");
        gameEnd=false ;

        for (let i=0;i<boardempty.length;i++){
            boardempty[i].innerHTML = "";
            
        }
            for (let j=0;j<state.length;j++){
                    state[j]=0 ;
    
            }
            
}
    
    
// function to check timer    
function CheckSec() {

        console.log({state});
        let fullCellsCount=state.filter(cell=>cell!==0).length
        console.log({counter,fullCellsCount});
        
        if(counter===fullCellsCount){
            alert(loose_m) 
            restart_game()
        }
}
    
    
var timeout;

// function that inner x&o to board 
function myClick(_id) {

        clearTimeout(timeout)
        if(gameEnd){
        return;}
        let index = _id.charAt(1);
        if(state[index] > 0){
        return;} 
        let div = document.getElementById(_id);
        counter++

        if (player == 1) {
            div.innerHTML = "X";
            state[index] = 1;
            player = 2;
        } 
        else{
            div.innerHTML = "O";
            state[index] = 2;
            player = 1;
        }

        timeout = setTimeout(function() {CheckSec()},30000);//check your turn on time
        CheckState(); // check evry step if the game over
    
}

// function to check winner or Tie    
function CheckState() {
    
        let player1win = false;
        let player2win = false;
        let winner;
        winningCombination.forEach( (win) => {
        if(state[win[0]] === 1 && state[win[1]] === 1 && state[win[2]] === 1)
                player1win = true;
        if(state[win[0]] === 2 && state[win[1]] === 2 && state[win[2]] === 2)
                player2win = true;
        })
            
        if(player1win) {
            winner = 'Player X win';
        }
        else if(player2win) {
                winner = 'Player O win';
        }
        else if(state.every( x => x > 0)) {
                winner = 'Tie';
        }
        if(winner) {
                gameEnd = true;
                alert(winner);
                restart_game();	
        }
}
    
    
    