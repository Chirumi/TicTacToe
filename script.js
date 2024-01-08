/*
TO DO =
2) ADD RESTART BUTTON ONCE THE GAME ENDS TO CLEAR BOARD DISPLAY, BOARD ARRAY AND BOARD SEQ ARRAY
3) ADD CONGRATS MESSAGE ONCE GAME ENDS OTHERWISE TIE MESSAGE
4) ALLOW PLAYERS TO ADD NAMES BEFORE THE GAME START, THEN DISPLAY WHO'S TURN IT IS
*/
const displayBoard = document.querySelector(".board")
const gameOverMsg = document.querySelector(".gameOverMsg")
const p = displayBoard.parentNode
const blockClicks = document.createElement("div")
const div = document.querySelectorAll(".board > div")
const startBtn = document.querySelector(".startBtn")
const title = document.querySelector(".start > div:first-of-type")
const restartBtn = document.querySelector(".restartBtn")

startBtn.addEventListener("click", startBtnEventListener)

function startBtnEventListener() {
    displayBoard.style.display = "grid"
    startBtn.style.display = "none"
    title.style.display = "none"
}

function disableGame() {
    blockClicks.style.pointerEvents = "none"
    p.replaceChild(blockClicks, displayBoard)
    blockClicks.appendChild(displayBoard)
    blockClicks.classList.add("wrapper")

    restartBtn.style.display = "block"
    restartBtn.addEventListener("click", () => {
        gameBoard.board = []
        gameBoard.boardSequence = []
        gameBoard.gameFinish = false
        gameBoard.roundWinner = ""
        gameOverMsg.textContent = ""
        restartBtn.style.display = "none"

        // REMOVE WRAPPER THAT PREVENTS CLICKS ON BOARD
        const wrapperNode = document.querySelector(".wrapper")
        wrapperNode.replaceWith(...wrapperNode.childNodes)

        div.forEach((x) => {
            x.textContent = ""
        })
    })
}

const gameBoard = {
    board: [], 
    boardSequence: [], // SETS X FIRST THEN O THEN X ETC
    gameFinish: false,
    roundWinner: ""
}

div.forEach((x) => {
    function clickEvent() {
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
        winCheck.tie()
        if (gameBoard.gameFinish == true) {
            disableGame()
            if (gameBoard.roundWinner == "Player One") {
                gameOverMsg.textContent = "Player One wins!"
            }
            else if (gameBoard.roundWinner == "Player Two") {
                gameOverMsg.textContent = "Player Two wins!"
            }
            else if (gameBoard.roundWinner == "Tie") {
                gameOverMsg.textContent = "Tied!"
            }
        }
    }
    x.addEventListener("click", clickEvent)
})

const winCheck = {
    playerOneWin: () => {
        if (gameBoard.board[0] == "X" && gameBoard.board[1] == "X" && gameBoard.board[2] == "X") {
            playerOneResult()
        }
        else if (gameBoard.board[0] == "X" && gameBoard.board[4] == "X" && gameBoard.board[8] == "X") {
            playerOneResult()
        }
        else if (gameBoard.board[1] == "X" && gameBoard.board[4] == "X" && gameBoard.board[7] == "X") {
            playerOneResult()          
        }
        else if (gameBoard.board[2] == "X" && gameBoard.board[4] == "X" && gameBoard.board[6] == "X") {
            playerOneResult()      
        }
        else if (gameBoard.board[3] == "X" && gameBoard.board[4] == "X" && gameBoard.board[5] == "X") {
            playerOneResult()        
        }
        else if (gameBoard.board[4] == "X" && gameBoard.board[5] == "X" && gameBoard.board[8] == "X") {
            playerOneResult()         
        }
        else if (gameBoard.board[0] == "X" && gameBoard.board[3] == "X" && gameBoard.board[6] == "X") {
            playerOneResult()      
        }
        else if (gameBoard.board[6] == "X" && gameBoard.board[7] == "X" && gameBoard.board[8] == "X") {
            playerOneResult()          
        }
    },

    playerTwoWIn: () => {
        if (gameBoard.board[0] == "O" && gameBoard.board[1] == "O" && gameBoard.board[2] == "O") {
            playerTwoResult()
        }
        else if (gameBoard.board[0] == "O" && gameBoard.board[4] == "O" && gameBoard.board[6] == "O") {
            playerTwoResult()
        }
        else if (gameBoard.board[1] == "O" && gameBoard.board[4] == "O" && gameBoard.board[7] == "O") {
            playerTwoResult()  
        }
        else if (gameBoard.board[2] == "O" && gameBoard.board[4] == "O" && gameBoard.board[6] == "O") {
            playerTwoResult()
        }
        else if (gameBoard.board[3] == "O" && gameBoard.board[4] == "O" && gameBoard.board[5] == "O") {
            playerTwoResult()
        }
        else if (gameBoard.board[2] == "O" && gameBoard.board[5] == "O" && gameBoard.board[8] == "O") {
            playerTwoResult()
        }
        else if (gameBoard.board[0] == "O" && gameBoard.board[3] == "O" && gameBoard.board[6] == "O") {
            playerTwoResult()
        }
        else if (gameBoard.board[6] == "O" && gameBoard.board[7] == "O" && gameBoard.board[8] == "O") {
            playerTwoResult()
        }
    },

    tie: () => {
        if (gameBoard.boardSequence.length == 9) {
            gameBoard.gameFinish = true
            gameBoard.roundWinner = "Tie"
        }
    }
}

function playerOneResult() {
    playerOne.score++
    gameBoard.roundWinner = "Player One"
    gameBoard.gameFinish = true
}

function playerTwoResult() {
    playerTwo.score++
    gameBoard.roundWinner = "Player Two"
    gameBoard.gameFinish = true
}

function player(name) {
    let score = 0
    return {name, score}
}

const playerOne = player("playerOne")
const playerTwo = player("playerTwo")