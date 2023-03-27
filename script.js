console.log('hello')

let titleDiv = document.getElementById('title')

console.log('before: ', titleDiv.innerText)

let message = 'Square color Counter '

titleDiv.innerText = message;

console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.backgroundColor = 'blue'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

redDiv.oneclick = () => {
  console.log('user chose: Rock')
  // getComputerChoice 'paper'
  // userChoice vs computerChoice --> result
  // -1, 0, 1
  //  show everything on the screen (DOM)
}

squares.forEach(square => {
  square.oneclick = () => console.log(square.value)
})