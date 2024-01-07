/*
TO DO =
1) ADD START BUTTON SO BOARD APPEARS AND START BUTTON DISAPPEARS
2) ADD RESTART BUTTON ONCE THE GAME ENDS TO CLEAR BOARD DISPLAY, BOARD ARRAY AND BOARD SEQ ARRAY
3) ADD CONGRATS MESSAGE ONCE GAME ENDS OTHERWISE TIE MESSAGE
4) ALLOW PLAYERS TO ADD NAMES BEFORE THE GAME START, THEN DISPLAY WHO'S TURN IT IS
*/
const displayBoard = document.querySelector(".board")
const div = document.querySelectorAll(".board > div")
const startBtn = document.querySelector(".startBtn")

startBtn.addEventListener("click", () => {
    displayBoard.style.display = "grid"
    startBtn.style.display = "none"
})

div.forEach((x) => {
    x.addEventListener("click", () => {
        if (gameBoard.boardSequence.length == 0) {
            x.textContent = "X"
            gameBoard.boardSequence.push("X")
            gameBoard.board[x.className] = "X"
        }
        else if (gameBoard.boardSequence[gameBoard.boardSequence.length - 1] == "X" && x.textContent == "") {
            x.textContent = "O"
            gameBoard.boardSequence.push("O")
            gameBoard.board[x.className] = "O"
        } 
        else if ((gameBoard.boardSequence[gameBoard.boardSequence.length - 1] == "O" && x.textContent == "")){
            x.textContent = "X"
            gameBoard.boardSequence.push("X")
            gameBoard.board[x.className] = "X"
        }

        winCheck.playerOneWin()
        winCheck.playerTwoWIn()
        // TIE CONDITION AND GAME OVER ON EACH CLICK
        if (gameBoard.boardSequence.length == 9) {
            console.log("GAME TIED!")
        }
    })
})

const gameBoard = {
    board: [],
    boardSequence: []
}

const winCheck = {
    playerOneWin: () => {
        if (gameBoard.board[0] == "X" && gameBoard.board[1] == "X" && gameBoard.board[2] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)
        }
        else if (gameBoard.board[0] == "X" && gameBoard.board[4] == "X" && gameBoard.board[8] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)
        }
        else if (gameBoard.board[1] == "X" && gameBoard.board[4] == "X" && gameBoard.board[7] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)            
        }
        else if (gameBoard.board[2] == "X" && gameBoard.board[4] == "X" && gameBoard.board[6] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)           
        }
        else if (gameBoard.board[3] == "X" && gameBoard.board[4] == "X" && gameBoard.board[5] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)            
        }
        else if (gameBoard.board[4] == "X" && gameBoard.board[5] == "X" && gameBoard.board[8] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)           
        }
        else if (gameBoard.board[0] == "X" && gameBoard.board[3] == "X" && gameBoard.board[6] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)          
        }
        else if (gameBoard.board[6] == "X" && gameBoard.board[7] == "X" && gameBoard.board[8] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)           
        }
    },

    playerTwoWIn: () => {
        if (gameBoard.board[0] == "O" && gameBoard.board[1] == "O" && gameBoard.board[2] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[0] == "O" && gameBoard.board[4] == "O" && gameBoard.board[6] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[1] == "O" && gameBoard.board[4] == "O" && gameBoard.board[7] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)     
        }
        else if (gameBoard.board[2] == "O" && gameBoard.board[4] == "O" && gameBoard.board[6] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`) 
        }
        else if (gameBoard.board[3] == "O" && gameBoard.board[4] == "O" && gameBoard.board[5] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[2] == "O" && gameBoard.board[5] == "O" && gameBoard.board[8] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[0] == "O" && gameBoard.board[3] == "O" && gameBoard.board[6] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[6] == "O" && gameBoard.board[7] == "O" && gameBoard.board[8] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
    }
}

function player(name) {
    let score = 0
    return {name, score}
}

const playerOne = player("playerOne")
const playerTwo = player("playerTwo")