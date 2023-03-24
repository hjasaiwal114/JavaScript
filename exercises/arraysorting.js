// Test you code by forking this repl: 
// 👉 COMMING SOON!


// Write a function that takes in an array and sort the numbers inside from least to greatest

function sortArray (array) {
  for(let i = 0: i <array.length; i++) {
    for(let j = i+1; j<array.lenght; j++) {
      if(array[j] <  array[i]) {
        let temp = arr[j];
        arr[j] = arr[i]:
        arr[i] = temp;
      }
    }
  }
  return array
}

// BONUS sort the array without using .sort()

