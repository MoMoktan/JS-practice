
// ternary operator

// condition ? valueIfTrue : valueIfFalse)




// const buttonElem = document.getElementById("button");
// const body = document.body;

// buttonElem.addEventListener('click', () => {
//   const newText = buttonElem.innerText === "ON" ? "OFF" : "ON";
//   buttonElem.innerText = newText;

//   if (newText === "ON") {
//     body. style. backgroundColor = "blue";
//   } else {
//     body. style. backgroundColor = "white";
//   }
// });




//  const buttonElem = document.getElementById("button");

// buttonElem.addEventListener('click', ()=>{
//     console.log("button was clicked");
// })


// const button = document.querySelector('button')

// const div = document.querySelector("div");

// div.addEventListener('click', (event) => {
//     const target = event.target;
//     if (target.tagName === 'BUTTON') {
//         console.log("button was clicked");
//     }
// });

// const buttons = document.querySelectorAll("button");

// buttons.forEach(button =>{
//     button.addEventListener('click',(event)=>{
//         console.log(event.target.innerText)
//     })
// })


// const div = document.querySelector('div');


// div.addEventListener('click', (event)=>{

//     const target = event.target

// //tagname chai yedi button ho vane print the output
//     if(target.tagName === "BUTTON"){
//         console.log(target.innerText)
//     }
// })


// const box = document.getElementById("box");

// function eventHandler(){
//     alert("box was clicked")
// }

// box.addEventListener('click',eventHandler);

// const span = document.getElementById("span");
// const div = document.getElementById("div");
// const button = document.getElementById("button");


// span.addEventListener('click', ()=>{
//     console.log("span was clicked")
// });


// div.addEventListener('click', ()=>{
//     console.log("div was clicked")
// });


// button.addEventListener('click', ()=>{
//     console.log("button was clicked")
// });



// button.addEventListener('click',(event)=>{
//         event.stopPropagation()
       
//     });
//    span.addEventListener('click',(event)=>{
//         event.stopPropagation()
       
//     });



// Closer


// function myFunction(){
//     let a = 4;
//     return a * a;
// }

// console.log(myFunction)



// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   })
//   .catch(error){
//     console.error(error.message)
//    }




// function checkNumber(num){

//     return new Promise ((resolve,reject) =>{
    
//         setTimeout(()=>{
//        if (num >10 ){
//              resolve (`${num} is greater than 10`)
//         } else{
//              resolve (`${num} is less than 10`)
//         }
//          },200)
//     });
    
//     }

//     checkNumber(5).then((message)=>{
//         console.log(message);
//     }).catch((error)=>{
//         console.error(error.message);
//     })




// closure in js
