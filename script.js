// Design game!
// Add styles on bg, reset button and game winner/tie announce
// Add effect: eventListener on hover
// Add effect: if clicked, box magnifies
// Add effect: X and O appears smoothly when placed on boxes
// Add effect: reset button appears smooth

let ticTacToe = (function () {
    let gameBoard = {
        gamePlay: []
    } 

    let header = document.getElementById("header")
    let footer = document.getElementById("footer")

    let box1 = document.querySelector(".box1")
    box1.textContent = gameBoard.gamePlay[0]
    let box2 = document.querySelector(".box2")
    box2.textContent = gameBoard.gamePlay[1]
    let box3 = document.querySelector(".box3")
    box3.textContent = gameBoard.gamePlay[2]
    let box4 = document.querySelector(".box4")
    box4.textContent = gameBoard.gamePlay[3]
    let box5 = document.querySelector(".box5")
    box5.textContent = gameBoard.gamePlay[4]
    let box6 = document.querySelector(".box6")
    box6.textContent = gameBoard.gamePlay[5]
    let box7 = document.querySelector(".box7")
    box7.textContent = gameBoard.gamePlay[6]
    let box8 = document.querySelector(".box8")
    box8.textContent = gameBoard.gamePlay[7]
    let box9 = document.querySelector(".box9")
    box9.textContent = gameBoard.gamePlay[8]

    let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    let playerMaker = (name, game) => {
        return {name, game}
    }

    let player1 = playerMaker("Zul", [])
    let player2 = playerMaker("Enemy", [])
    let winner = []

    function resetGame () {

        if (winner[0] === "P1" || winner[0] === "P2") {
            let removeMsg = document.getElementById("winMsg")
            removeMsg.remove()
        }

        if (gameBoard.gamePlay.length > 8 && winner.length === 0) {
            let removeTieMsg = document.getElementById("tieMsg")
            removeTieMsg.remove()
        }

        winner = []
        gameBoard.gamePlay = []
        player1.game = []
        player2.game = []
        
        boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = ""
        }
    }

    function winMessage (num) {
        let winMsg = document.createElement("div")
        winMsg.id = "winMsg"
        winMsg.textContent = `Player ${num} wins!`
        header.appendChild(winMsg)
        winner.push(`P${num}`)
    }

    function tieMessage () {
        let tieMsg = document.createElement("div")
        tieMsg.id = "tieMsg"
        tieMsg.textContent = "Game Tied!"
        header.appendChild(tieMsg)

    }

    function gameOver() {
        boxes = []

        let reset = document.createElement("button")
        reset.textContent = "RESET"
        footer.appendChild(reset)

        reset.addEventListener("click", () => {
            footer.removeChild(reset)
            resetGame()
        })
    }

    // GAMEPLAY
    for (let i = 0; i < boxes.length; i++) { 
        boxes[i].addEventListener("click", () => {
            if (boxes[i].textContent === "") {
                if (gameBoard.gamePlay[gameBoard.gamePlay.length - 1] === "X") {
                    gameBoard.gamePlay.push("O")
                    boxes[i].textContent = "O"
                    player2.game.push(i + 1)

                    // Check wincon here 
                    winConditionP1()
                    winConditionP2()
                    tied()

                    // If game over
                    if (winner[0] === "P1" || winner[0] === "P2") {
                        gameOver()
                    }

                    if (gameBoard.gamePlay.length > 8 && winner.length === 0) {
                        gameOver()
                    }

                } else {
                    gameBoard.gamePlay.push("X")
                    boxes[i].textContent = "X"
                    player1.game.push(i + 1)

                    // Check wincon here
                    winConditionP1()
                    winConditionP2()
                    tied()
                    
                    // If game over
                    if (winner[0] === "P1" || winner[0] === "P2") {
                        gameOver()
                    }

                    if (gameBoard.gamePlay.length > 8 && winner.length === 0) {
                        gameOver()
                    }
                }
            } 
        })
    }

    // TIECON
    function tied() {
        if (gameBoard.gamePlay.length > 8 && winner.length === 0) {
            tieMessage()
        }
    }

    //WINCON Player 1
    function winConditionP1 () {
        if (player1.game.includes(1) && player1.game.includes(4) && player1.game.includes(7)) {
            winMessage(1)

        } else if (player1.game.includes(1) && player1.game.includes(5) && player1.game.includes(9)) {
            winMessage(1)

        } else if (player1.game.includes(1) && player1.game.includes(2) && player1.game.includes(3)) {
            winMessage(1)

        } else if (player1.game.includes(2) && player1.game.includes(5) && player1.game.includes(8)) {
            winMessage(1)

        } else if (player1.game.includes(3) && player1.game.includes(5) && player1.game.includes(7)) {
            winMessage(1)

        } else if (player1.game.includes(4) && player1.game.includes(5) && player1.game.includes(6)) {
            winMessage(1)

        } else if (player1.game.includes(3) && player1.game.includes(6) && player1.game.includes(9)) {
            winMessage(1)

        } else if (player1.game.includes(7) && player1.game.includes(8) && player1.game.includes(9)) {
            winMessage(1)
        } 
    }

    // WINCON Player 2
    function winConditionP2 () {
        if (player2.game.includes(1) && player2.game.includes(4) && player2.game.includes(7)) {
            winMessage(2)

        } else if (player2.game.includes(1) && player2.game.includes(5) && player2.game.includes(9)) {
            winMessage(2)

        } else if (player2.game.includes(1) && player2.game.includes(2) && player2.game.includes(3)) {
            winMessage(2)

        } else if (player2.game.includes(2) && player2.game.includes(5) && player2.game.includes(8)) {
            winMessage(2)

        } else if (player2.game.includes(3) && player2.game.includes(5) && player2.game.includes(7)) {
            winMessage(2)

        } else if (player2.game.includes(4) && player2.game.includes(5) && player2.game.includes(6)) {
            winMessage(2)

        } else if (player2.game.includes(3) && player2.game.includes(6) && player2.game.includes(9)) {
            winMessage(2)

        } else if (player2.game.includes(7) && player2.game.includes(8) && player2.game.includes(9)) {
            winMessage(2)
            
        } 
    }
})()

