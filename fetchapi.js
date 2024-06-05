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


// fetch("https://www.craigslist.org/about/")
// .then((response)=> {
//     return response.text()
// }).then((html)=> {
// console.log(html);
// })


// const jsonfetch = fetch ("https://jsonplaceholder.typicode.com/posts/1");

// jsonfetch.then((value)=> {
//     return value.json()
// }).then((jsonfetch)=>{
// console.log(jsonfetch)
// console.log(jsonfetch.id)
// })


const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

pokemon.then((response) => response.json())
  .then((pokemon) => {
    //console.log(pokemon);
    console.log(pokemon.sprites.other["official-artwork"].front_default);
  })
  .catch((error) => {
    console.error("Error fetching Pokemon data:", error);
  });



