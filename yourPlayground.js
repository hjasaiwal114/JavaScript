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

 // console.log(calculateFoodTotal(300, 20))

// ES6
// Arrow Functions => 
// arrow function with explicit return
const sumArrow  = (a, b) => {
  return a + b
}
// arrow function with implicit return
// IMPORTANT : For implicit return, remove curly braces
const sumArrow2 = (a, b) => a + b

console.log(sumArroq(10, 50))

// Type casting

// Array methods

groceries.push('kela')
// Arrays Slice
// start from 0 INCLUSIVE and UP to 2 [0, 1]
// groceries = {'kela' , 'seb' , 'santra' , 'amrudh'}
// console.log(groceries.slice(0, 5))

// console.log(groceries.slice(3, 6))
// cosle.log(groceries.slice(1,4))
// // array methods (slice, push, indexof, length)
// console.log(groceies.indexOf)

// OBJECTS {}
// par of key and value
const person = {
  name: 'Lenardo',
  shirt: 'white'
}

// access object : dot notation vs. bracket notation
console.log(person.name)
console.log(person.shirt)

// backet notation
console.log(person['name'])
console.log(person['shirt'])

// assign object
person.phone = '9625631486'
console.log(person.phone)

console.log(person)

//person 2
const person2 = {
  name = 'Himanshu',
  shirt = 'Black'
}
person2.phone = '88555888858'
console.log(person2)
console.log(person2.name)
console.log(person2.shirt)

//  es6 arrow function {2 arguments}
//  object
// template literals
// methods Math.floor()
const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 10000,
    liability: 50000,
    netWorth: function () {
      return this.assets - this.liabilities
    }
  }
  const intro = 'Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my ney worth is ${person.newWorth()} USD')
  
  return intro
}
// console.log(introducer('Qazi', 'Black'))
// console.log(introducer('Leonardo', 'shirt'))

const fruits = ['kela', 'part' , 'party']

// cosole.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// for (let i=0; i<fruits.length; i++){
//   console.log(i, fruits[i])
// }

const double = (number) => {
  let result = []
  for (const number of numbers) {
    result.push(number * 2)
  }
  return result
}

// console.log(double([1, 2, 3, 4, 5, 6, 7]))

const howManyLetters = () => {
  return { result: phrase.length }
  // counter
  let result = 0;

  for (const index in phrase) {
    console.log(Number(index) + 1)
    result = Number(index) + 1
  }
  return { result }
}
// const phrase = prompt('write your phrase')

// console.log(howManyLetters(phrase))

const sumArray = (numbers) => {
  let result = 0:
  // for loop
  for (const number of numbers) {
    console.log(number)
    result = result + number
  }
  return { result }
}

const nums = [1, 2, 3, 4, 5]
console.log(sumArray(nums))
// sum up all numbers in array

const max = (numbers) => {
  const result = numbers[0]
  // loop
  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }
  return { result }
}
// console.log(max(1, 2, 3, 4,))

const letterfrequency = {phrase} => {
  // letter frequency ('haha') -->('h1': 2, 'a': 1)
  console.log(phrase)
  // make a 'frequency' object ()
  for (const letter of phrase) {
    // check if letter exist in frequency
    if (letter in fequency) {
      // increment the value +1
      frequency[letter] = frequency[letter] + 1
    // otherwise, set the value to 1
  } else{
      frequency[letter] = 1
    }
  return frequency
}
  console.log(letterfrequency('lol, what are youdoing later tonight, haha!'))



  // incremental operators
  //  ++, ==, +=,
  
}

// cosnole.log(letterFrequency('haha'))
// wordFrequency('lol what lol') {'lol': 2, 'what':1}
const wordFrequency = (phrase) => {
  words =phrase.split(' ')
  return letterFrefquency(words)
}
const userInput = prompt('Write your sentence')
console.log(wordFrequency('lol what lol'))

// higher order functions
// map -loops and return an array
// filter
// reduce

// Map
const doubleMap = (numbers) => {
  return numbers.map(number => number*2)
}

console.log(doubleMap([1, 2, 3]))
// console.log(doubleMap([1, 2, 3]))

// filter([1,2,3,4,5,6], 3) --> [4,, 5, 6]
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}
// console.log(filter([1, 2, 3, 4, 5, 6], 2))
const nums = [1,2,3,4,5,6]
console.log(nums.filter(nums => nums > 3 || num<2))

const actors = [
  {name: 'johnny', newtworth: 200000},
  {name: 'amber', networth: 10},
  {name: 'leonardo', networth: 100000},
]
console.log(actors.reduce((prev, curr) => prev + curr.networth, 0))

// console.log(actor.filter(actor => actor.networth > 10))
// console.log(nums.filter(nums => num>4 || num<2))
// if (userIsAunthenticated && userIsPayingMember) {
//     show youtube videos
// } else{

// } 
// let result = actor.filter(actor => actor.netwoth>10)
// console.log(result)
// let names = result.map(ator => actor.networth > 10)
// playground.innerHTML = '<h1>${JSON.stringify(result)}</h1>'

// reduce
// sum all of the net worths
//  SUM: think reduce
// reduce takes in a function as an argument
// reduce loops and gives you back the accumulator
function sum(a, b) {
  // return
  return a + b
}

function multiply(a, b) {
  // return
  return a * b
}

const nums = [1, 2, 3]
const result = nums.reduce((a, b) => a + b)
console.log(result)

