//Task 1
let scoreBoard = {
    "The Best Ever": 1000000,
};

//Task 2
let newPlayerName = "John"
let newPlayerScore = .01

let anothernewPlayerName = "The better John"
let anothernewPlayerScore = .015

scoreBoard[newPlayerName] = newPlayerScore
scoreBoard[anothernewPlayerName] = anothernewPlayerScore
console.log(scoreBoard)


//Task 3
let playerToRemove = "John"

delete scoreBoard[playerToRemove]

console.log(scoreBoard)

//Task 4

let playerNameToUpdate = "The better John"
let scoreToAdd = .005

scoreBoard[playerNameToUpdate] += scoreToAdd;
console.log(scoreBoard)

//Task 5

mondayBonus = 100

for (let x in scoreBoard) {
    scoreBoard[x] += mondayBonus
    console.log(scoreBoard)
}

