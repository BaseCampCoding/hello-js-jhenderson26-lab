let line = "Stands so high Huge hooves too Impatiently waits for Reins and harness Eager to leave";

let frontDoorLetter = line[0];

let frontDoorWord = "SHIRE";
let firstLetter = frontDoorWord[0];
let remaininingLetters = frontDoorWord.slice(1);
let frontDoorPassword = firstLetter + remaininingLetters.toLowerCase();

let lineWithWhitespace = "Reins and harness";
let removeWhiteSpace = lineWithWhitespace.trim();
let backDoorLetter = removeWhiteSpace[removeWhiteSpace.length - 1]

let backDoorWord = 'Horse';
let backDoorPassword = backDoorWord + ", please";
