// Task 1
let scoreBoard = {"The Best Ever": 1000000, "Kobe": 7000}


// Task 2
let newPlayerName = "Lebron";
let newPlayerScore = 5000;

scoreBoard[newPlayerName] = newPlayerScore
console.log(scoreBoard);

//Task 3
let playerToRemove = "The Best Ever"
delete scoreBoard[playerToRemove];
console.log(scoreBoard);

//Task 4
let playerNameToUpdate = "Lebron"
let scoreToAdd = 1000

scoreBoard[playerNameToUpdate] += scoreToAdd
console.log(scoreBoard);

//Task 5 
let mondayBonus = 100
for (let player in scoreBoard) {
    scoreBoard[player] += mondayBonus
}

console.log(scoreBoard);





// //Task 1
// let scoreBoard = {
//     "The Best Ever": 1000000,
// };

// //Task 2
// let newPlayerName = "John"
// let newPlayerScore = .01

// let anothernewPlayerName = "The better John"
// let anothernewPlayerScore = .015

// scoreBoard[newPlayerName] = newPlayerScore
// scoreBoard[anothernewPlayerName] = anothernewPlayerScore
// console.log(scoreBoard)


// //Task 3
// let playerToRemove = "John"

// delete scoreBoard[playerToRemove]

// console.log(scoreBoard)

// //Task 4

// let playerNameToUpdate = "The better John"
// let scoreToAdd = .005

// scoreBoard[playerNameToUpdate] += scoreToAdd;
// console.log(scoreBoard)

// //Task 5

// mondayBonus = 100

// for (let x in scoreBoard) {
//     scoreBoard[x] += mondayBonus
//     console.log(scoreBoard)
// }

