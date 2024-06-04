import fetch from "node-fetch";


// const response = fetch ("https://wallhaven.cc/");
// //ccconsole.log(response);
// //we will get pending promise 

// response.then((result)=>{
//    // console.log(result);

//     return result.text();

// }).then((html) => {
//     console.log(html);
// })


fetch("https://www.craigslist.org/about/")
.then((response)=> {
    return response.text()
}).then((html)=> {
console.log(html);
})


