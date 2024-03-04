
// function outerFunction(){
// let outerFunction = "I am from the outer function"

// function innerFunction(){
//   console.log(outerFunction)
// }
// return innerFunction
// }


// let closure = outerFunction();

// closure();


function createCounter(){
  let count = 0;

function increment (){
  count++;
  console.log(`Count is now ${count}`);
}
return increment;
}

let counter = createCounter();

counter();