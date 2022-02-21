let header = document.getElementById("header");
let gameBoard = document.getElementById("app");
const playerO = "O";
const playerX = "X";
let currPlayer = "X";
let gameOver = false;
let board = new Array(10).fill(null);







function checkWinner(){
    // if there is a winning combination on the board, the game is over.
    // If the game is over, update the header on who won.

    let winner = currPlayer;

    // Check rows for winning combination. 
    // Check row 1 for winning combination.   
    if (board[1]== board[2] && board[2] == board[3] && board[3] != null){
        header.innerText = `${winner} won the game!`
        for(let i = 1; i < 4; i++){
            tile = document.getElementById("tile"+i);
            tile.classList.add("winner");
        }
        gameOver = true;
        return;
    }

    // Check row 2 for winning combination.
    if (board[4]== board[5] && board[5] == board[6] && board[6] != null){
        header.innerText = `${winner} won the game!`
        for(let i = 4; i <= 6; i++){
            tile = document.getElementById("tile"+i);
            tile.classList.add("winner");
        }
        gameOver = true;
        return;
    }

    // check row 3 for winning combination.
    if (board[7]== board[8] && board[8] == board[9] && board[9] != null){
        header.innerText = `${winner} won the game!`
        for(let i = 7; i <= 9; i++){
            tile = document.getElementById("tile"+i);
            tile.classList.add("winner");
        }
        gameOver = true;
        return;
    }

    // Check columns for winning combination.
    // Check column 1.
    if (board[1]== board[4] && board[4] == board[7] && board[7] != null){
        header.innerText = `${winner} won the game!`
        for(let i = 1; i < 8; i+=3){
            tile = document.getElementById("tile"+i);
            tile.classList.add("winner");
        }
        gameOver = true;
        return;
    }

    // Check column 2.
    if (board[2]== board[5] && board[5] == board[8] && board[8] != null){
        header.innerText = `${winner} won the game!`
        for(let i = 2; i < 9; i+=3){
            tile = document.getElementById("tile"+i);
            tile.classList.add("winner");
        }
        gameOver = true;
        return;
    }

    // Check column 3.
    if (board[3]== board[6] && board[6] == board[9] && board[9] != null){
        header.innerText = `${winner} won the game!`
        for(let i = 3; i < 10; i+=3){
            tile = document.getElementById("tile"+i);
            tile.classList.add("winner");
        }
        gameOver = true;
        return;
    }

    // Check for cat's game.  No winners in this situation.
    


    // If there is no winner yet, change current player to the opposite player.
    if (currPlayer == playerX){
        currPlayer = playerO;
    } else {
        currPlayer = playerX;
    }
    // And update the header text.
    header.innerText = `${currPlayer}'s turn!`
    
}

function setTile(e){

    // Don't allow changing tiles if the game has completed.
    if(gameOver){
        return;
    }

    // If the tile already has a value, then don't allow changes.
    if(this.innerText != ""){
        return;
    }

    // Capture the tile id to be updated.
    let tile = this.id;
    tileNum = tile[4];
        
    // For testing purposes.
    console.log("Tile is ", tile);
    console.log("TileNum is ", tileNum);
    
    // Mark the board on the screen and in the board tracker.
    this.innerText = currPlayer;
    board[tileNum] = currPlayer;

    // Check for a winner.
    checkWinner();

}


function setUpGame(){

    // reset current player
    currPlayer = "X";

    header.innerText = `${currPlayer}'s turn`


    // reset game over flag
    gameOver = false;
    
    // reset board tracker.
    for(let i = 1; i < 10; i++){
        board[i] = null;        
    }
    
    // reset game board on screen.
    while(gameBoard.firstChild){
        gameBoard.removeChild(gameBoard.firstChild);
    }
    
    // Add gameboard tiles to the screen with event listeners.
    for (let i = 1; i<10; i++){
        let tileNum = "tile" + i;
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.id = tileNum;
        tile.innerText = "";
        tile.addEventListener("click", setTile);
        gameBoard.appendChild(tile);
    }
}

function playGame(){

    setUpGame();



}

playGame();