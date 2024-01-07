let div = document.querySelectorAll(".board > div")

div.forEach((x) => {
    x.addEventListener("click", () => {
        if (gameBoard.board[gameBoard.board.length - 1] == "X") {
            
        }
    })
})

const gameBoard = {
    board: ["X","O","X"]
}

function displayUpdate() {
    div.forEach((x) => {
        x.textContent = gameBoard.board[x.className]
    })
}

const winCheck = {
    playerOneWin: () => {
        if (gameBoard.board[0] == "X" && gameBoard.board[1] == "X" && gameBoard.board[2] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)
        }
        else if (gameBoard.board[1] == "X" && gameBoard.board[5] == "X" && gameBoard.board[9] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)
        }
        else if (gameBoard.board[2] == "X" && gameBoard.board[5] == "X" && gameBoard.board[8] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)            
        }
        else if (gameBoard.board[3] == "X" && gameBoard.board[5] == "X" && gameBoard.board[7] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)           
        }
        else if (gameBoard.board[4] == "X" && gameBoard.board[5] == "X" && gameBoard.board[6] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)            
        }
        else if (gameBoard.board[3] == "X" && gameBoard.board[6] == "X" && gameBoard.board[9] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)           
        }
        else if (gameBoard.board[1] == "X" && gameBoard.board[4] == "X" && gameBoard.board[7] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)          
        }
        else if (gameBoard.board[7] == "X" && gameBoard.board[8] == "X" && gameBoard.board[9] == "X") {
            playerOne.score++
            console.log(`Player One wins! Score: ${playerOne.score}`)           
        }
        else if (gameBoard.board.length == 9) {
            console.log("GAME TIED!")
        }
    },

    playerTwoWIn: () => {
        if (gameBoard.board[0] == "O" && gameBoard.board[1] == "O" && gameBoard.board[2] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[1] == "O" && gameBoard.board[5] == "O" && gameBoard.board[7] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[2] == "O" && gameBoard.board[5] == "O" && gameBoard.board[8] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)     
        }
        else if (gameBoard.board[3] == "O" && gameBoard.board[5] == "O" && gameBoard.board[7] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`) 
        }
        else if (gameBoard.board[4] == "O" && gameBoard.board[5] == "O" && gameBoard.board[6] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[3] == "O" && gameBoard.board[6] == "O" && gameBoard.board[9] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[1] == "O" && gameBoard.board[4] == "O" && gameBoard.board[7] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board[7] == "O" && gameBoard.board[8] == "O" && gameBoard.board[9] == "O") {
            playerTwo.score++
            console.log(`Player Two wins! Score: ${playerTwo.score}`)
        }
        else if (gameBoard.board.length == 9) {
            console.log("GAME TIED!")
        }
    },
}

function player(name) {
    let score = 0
    return {name, score}
}

const playerOne = player("playerOne")
const playerTwo = player("playerTwo")