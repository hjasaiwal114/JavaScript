// Test you code by forking this repl: 
// 👉 COMMING SOON!

// Create a function that takes the month and year (as integers)
// and returns the number of DAYS in that month

// Hints:
// Don't forget about leap year!
// Keep in mind which month has 30 days, 31 days, and 28 days
// Use everything you learned to get to the answer

const daysInMonth = (month,year) => {
  if(month === 2) {
    // February has 28 or 29 days depending on whether the year is a leap year
    if ((year%4 === 0 && yeaar % 100 !== 0) || year % 400 == 0) {
      return 29;
    } else{
      return 28;
    }
  } else if (month === 4 || month === 6 || month ===9 || month ===11) {
    // April, June, September, and November have 30 days
    return 30;
  } else {
    // all otehr months have 31 days
    return 31;
  }
  
}
console.log(daysInMonth(prompt('month' , 'year')))
// Example:
// daysInMonth(2,2018) -> 28
// days(4,654) -> 30
// days(2,2020) -> 29