

//Task 1
let visitorName = "Kaden"
let visitorAge = 45
let visitorTicketId = "Tic48"

let visitor = {
    name : visitorName,
    age:visitorAge,
    ticketId: visitorTicketId
}

// console.log(visitor)

//Task 2

visitor.ticketId = null
// console.log(visitor)

//Task 3
let tickets = {
    "Ticket48": null,
    "Ticket49": "Keden"
}

let ticketIdToCheck = "Ticket49"

let ticketStatusResult;
if (!ticketIdToCheck in tickets){
    ticketStatusResult = "unknown ticket id"
}
 
else if (tickets[ticketIdToCheck] === null) {

    ticketStatusResult = "not sold"
}

else{
    ticketStatusResult = "sold to " + tickets[ticketIdToCheck]
}
// console.log(ticketStatusResult)

//Task 4

let simpleTicketStatusResult;
if(ticketIdToCheck in tickets && tickets[ticketIdToCheck]) {
    simpleTicketStatusResult = tickets[ticketIdToCheck]
}

else {
    simpleTicketStatusResult = "invalid ticket"
}

console.log(simpleTicketStatusResult)


//Task 5 

let visitorWithGtc = {
    name: "Kaden",
    gtc: {version: "v2.0"},
}

let gtcVersion;
if (visitorWithGtc.gtc && visitorWithGtc.gtc.version) {
    gtcVersion = visitorWithGtc.gtc.version
}


console.log(gtcVersion)















// //tack 1
// let visitorName = 'Updog'
// let visitorAge = 999
// let visitorTicketId = 'q_q'

// let visitor = {
//     name: visitorName,
//     age: visitorAge,
//     ticketId: visitorTicketId
// };

// console.log(visitor)

// //tack 2

// visitor.ticketId = null
// console.log(visitor)

// //tack 3 

// let tickets = {
//     ticket1: 'Tommy',
//     ticket2: null,
//     ticket3: null,
//     ticket4: 'Bob',
//     ticket5: 'Mr. Hands'
// };

// let ticketIdToCheck = "ticket1";

// let ticketStatusResult;

// if (ticketIdToCheck in tickets && (tickets[ticketIdToCheck]) != null) {
//     ticketStatusResult = `sold to ${tickets[ticketIdToCheck]}`
// }

// else if (tickets[ticketIdToCheck] == null && ticketIdToCheck in tickets) {
//     ticketStatusResult= `not sold`
// }

// else {
//     ticketStatusResult = 'unknown ticket id'
// }

// console.log(ticketStatusResult)


// //tack 4

// let simpleTicketStatusResult;

//  if(ticketIdToCheck in tickets && (tickets[ticketIdToCheck]) != null) {
//     (tickets[ticketIdToCheck]) = simpleTicketStatusResult
//     console.log(simpleTicketStatusResult)
//  }

//  else {
//     console.log('invalid ticket !!!')
//  }