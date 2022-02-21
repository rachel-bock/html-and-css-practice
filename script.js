let header = document.getElementById("header");
let gameBoard = document.getElementById("app");
const playerO = "O";
const playerX = "X";
let currPlayer = "X";
let gameOver = false;
let board = new Array(10).fill(null);

function setTile(e){

    // Don't allow changing tiles if the game has completed.
    if(gameOver){
        return;
    }


    let tile = e.id;
    console.log("Tile is ", tile);
    
    // Mark the board on the screen and in the board tracker.
    this.innerText = currPlayer;
    board[tile] = currPlayer;
    
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
        tile.addEventListener("click", (e) => setTile(e));
        gameBoard.appendChild(tile);
    }
}

function playGame(){

    setUpGame();



}

playGame();