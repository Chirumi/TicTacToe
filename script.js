// Pseudo-code
// Make reset button similar to the one I did on Rock Paper Scissors

let gameBoard = {
    gamePlay: []
} 

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

for (let i = 0; i < boxes.length; i++) { // Alternates X and O, starting with X
    boxes[i].addEventListener("click", () => {
        if (boxes[i].textContent === "") {
            if (gameBoard.gamePlay[gameBoard.gamePlay.length - 1] === "X") {
                gameBoard.gamePlay.push("O")
                boxes[i].textContent = "O"
                player2.game.push(i + 1)

                console.log(player1)
                console.log(player2)

                // Check wincon here 
                winConditionP1()
                winConditionP2()

                if (winner[0] === "P1" || winner[0] === "P2") {
                    boxes = []

                    let reset = document.createElement("button")
                    reset.textContent = "RESET"
                    footer.appendChild(reset)
                    
                }

            } else {
                gameBoard.gamePlay.push("X")
                boxes[i].textContent = "X"
                player1.game.push(i + 1)

                console.log(player1)
                console.log(player2)

                // Check wincon here
                winConditionP1()
                winConditionP2()
                
                if (winner[0] === "P1" || winner[0] === "P2") {
                    boxes = []

                    let reset = document.createElement("button")
                    reset.textContent = "RESET"
                    footer.appendChild(reset)

                    reset.addEventListener("click", )
                }
            }
        } 
    })
}




//WINCON
function winConditionP1 () {
    if (player1.game.includes(1) && player1.game.includes(4) && player1.game.includes(7)) {
        console.log("Player 1 wins!")
        winner.push("P1")


    } else if (player1.game.includes(1) && player1.game.includes(5) && player1.game.includes(9)) {
        console.log("Player 1 wins!")
        winner.push("P1")

    } else if (player1.game.includes(1) && player1.game.includes(2) && player1.game.includes(3)) {
        console.log("Player 1 wins!")
        winner.push("P1")

    } else if (player1.game.includes(2) && player1.game.includes(5) && player1.game.includes(8)) {
        console.log("Player 1 wins!")
        winner.push("P1")

    } else if (player1.game.includes(3) && player1.game.includes(5) && player1.game.includes(7)) {
        console.log("Player 1 wins!")
        winner.push("P1")

    } else if (player1.game.includes(4) && player1.game.includes(5) && player1.game.includes(6)) {
        console.log("Player 1 wins!")
        winner.push("P1")

    } else if (player1.game.includes(3) && player1.game.includes(6) && player1.game.includes(9)) {
        console.log("Player 1 wins!")
        winner.push("P1")

    } else if (player1.game.includes(7) && player1.game.includes(8) && player1.game.includes(9)) {
        console.log("Player 1 wins!")
        winner.push("P1")
        
    } 
}

function winConditionP2 () {
    if (player2.game.includes(1) && player2.game.includes(4) && player2.game.includes(7)) {
        console.log("Player 2 wins!")
        winner.push("P2")
    } else if (player2.game.includes(1) && player2.game.includes(5) && player2.game.includes(9)) {
        console.log("Player 2 wins!")
        winner.push("P2")

    } else if (player2.game.includes(1) && player2.game.includes(2) && player2.game.includes(3)) {
        console.log("Player 2 wins!")
        winner.push("P2")

    } else if (player2.game.includes(2) && player2.game.includes(5) && player2.game.includes(8)) {
        console.log("Player 2 wins!")
        winner.push("P2")

    } else if (player2.game.includes(3) && player2.game.includes(5) && player2.game.includes(7)) {
        console.log("Player 2 wins!")
        winner.push("P2")

    } else if (player2.game.includes(4) && player2.game.includes(5) && player2.game.includes(6)) {
        console.log("Player 2 wins!")
        winner.push("P2")

    } else if (player2.game.includes(3) && player2.game.includes(6) && player2.game.includes(9)) {
        console.log("Player 2 wins!")
        winner.push("P2")

    } else if (player2.game.includes(7) && player2.game.includes(8) && player2.game.includes(9)) {
        console.log("Player 2 wins!")
        winner.push("P2")
        
    } 
}
// DOWNSIDE = SOME CODE ARE ACCESSIBLE GLOBALLY (WHICH IS OPPOSITE OF WHAT THE EXERCISE IS ABOUT)
// THEREFORE TRY TO OPTIMIZE CODE FOR SECURITY (USING MODULUS, FACTORIES ETC ETC)


