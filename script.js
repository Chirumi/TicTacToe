// Pseudo-code
// Make it impossible to pick index that has a X or O already
// Each square should correspond to an index number in the above object (1 to 9)
// Make MULTIPLE win conditions (If 3 Xs or Os in a row on index 1,5,9/1,2,3/1,4,7 etc... = game over)
// Determine winner by checking if there are 3 Xs in a row (P1 win) or 3 Os in a row (P2 win)
// Make pop up message (Player 1 or Player 2 has won!)
// Make reset button similar to the one I did on Rock Paper Scissors

let gameBoard = {
    gamePlay: []
} 

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

let playerMaker = (name) => {
    return {name}
}

let player1 = playerMaker("Zul")
let player2 = playerMaker("Enemy")

for (let i = 0; i < boxes.length; i++) { // Alternates X and O, starting with X
    boxes[i].addEventListener("click", () => {
        if (boxes[i].textContent === "") {
            if (gameBoard.gamePlay[gameBoard.gamePlay.length - 1] === "X") {
                gameBoard.gamePlay.push("O")
                boxes[i].textContent = "O"
                console.log(gameBoard.gamePlay)
            } else {
                gameBoard.gamePlay.push("X")
                boxes[i].textContent = "X"
                console.log(gameBoard.gamePlay)
            }
        } 
    })
}

