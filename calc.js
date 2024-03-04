const add = document.getElementById('add') ;

const firstvalue = document.getElementById('firstvalue');

const secondvalue = document.getElementById('firstvalue');

const display = document.getElementById('display');

// add.addEventListener('click',Add);

// function Add(){
    
//     let value1 = Number(firstvalue.value);

    
//     let value2 = Number(secondvalue.value);


//     display.value = value1 + value2;
// }

add.addEventListener('click', function(){
    let value1 = Number(firstvalue.value);

    
    let value2 = Number(secondvalue.value);


    display.value = value1 + value2;
})