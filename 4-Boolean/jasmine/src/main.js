
let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;


let canExecuteFastAttack = !knightIsAwake;

console.log(canExecuteFastAttack)

let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;

console.log(canSpy)

let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;

console.log(canSignalPrisoner)

let canFreePrisoner = (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);

console.log(canFreePrisoner)
