let ratePerHour = 60;
let dayRate = 60 * 8;


const budget = 1000;

let workdays = Math.floor(budget/dayRate);


let billable = 22;

let monthlyDiscount = .2;


let fullMonths = Math.floor(35/billable);


let remainingDays = 35 - billable;


let full_cost = billable * dayRate;


let discountedMonthlyRate = full_cost - (full_cost * monthlyDiscount);

let totalProjectCost = Math.ceil((fullMonths * discountedMonthlyRate) + (remainingDays * dayRate))




  