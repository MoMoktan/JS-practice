
// try {
// console.log("I am first")
// // Uint16Arraydd; this error so after that no console will log
// console.log("i won't be execute")
// }catch(error){
// console.error(error)
// }



// function catchError (e){
//     if(!e){
//         throw new Error ("e is required")
//     }
//     return e;
// }
// try{
//     let result = catchError(happy);
//     console.log('Result:', result)
// }catch(error){
//     console.log('Error:', error.message)
// }

const array = [1,2,3,4,5,6,5]
let sum = 0;


try {
    array.forEach((elem)=>{
        sum += elem;
console.log(sum);
    });
}catch(error){
    console.error(error)
    }
    