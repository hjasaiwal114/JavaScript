console.log("Himanshu")
console.log('Jasaiwal')
// variables
let name = ' himanshu jasaiwal'
console.log(name)

// operators
// fruit = prompt('what is your favorite fruit')

// console.log(fruit)

// food = Number(prompt('How much was the food?'))
// tipPercentage = Number(prompt('tip %?')/100)
// tipAmount = food * tipPercentage
// total = food + tipAmount
// console.log('tip amount', tipAmount)
// console.log(' total', total)

// console.log(tipAmount)

// alert(tipAMount)

// user input 

/* data tyoes (strings, numbers)
numbers 1, 5. 10, 100, 2.5
strings 'hello', "whats is up"
arrays []
objects {}
boolean true/ false(banks)
*/
/* Math Operations
Multipy * 
Divide /
Exponents **
Modulo/Remainder % 5%2 = 1
Add +
Subtract -
*/

/* Math Methods 
Floor - Rounds down
ceil - Rounds up
Random - gives you numbet betwwn 0 and 1
*/

// Baby weather app(conditionals)
// if rain 'Grab your umbrella'
// // else ' Wear your sunglasses'
// let weather = prompt('How is the weather?')
// if (weather == 'rain') {
//   console.log('Grab your umbrella')
// } else {
//   console.log('Wear your sunglasses')
// }


// 
// data types (strings,  numbers)

// Functions
function sayMyName(name){
  console.log('name')
}
// sayMyName('')

// this is a function called "sayMyName2"
// it has 1 argument called 'name'
// does: it logs out your name to console
// function greeting(name) {
//   // 'hi' + name + ', Nice to meet you!'
//   // template literals
//   great = 'hi $[name], Nice to meet you!'
//   console.log(great)
}
// greeting('Johnny Depp')

// function sum(a, b) {
//   // return
//   return a + b  
// }

// sum(1, 2)
function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100
  const tipAmount = food * tipPercentage
  const total = sum(food, tipAmount)
  return total
}

 console.log(calculateFoodTotal(300, 20))

// ES6
// Arrow Functions => 
const sumArrow  = (a, b) => {
  return a + b
}
// Type casting