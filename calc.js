

const firstvalue = document.getElementById('firstvalue');

const secondvalue = document.getElementById('secondvalue');

const display = document.getElementById('display');

 let value1 = 0;
 let value2 = 0

 function updateValue(){
    value1 = Number(firstvalue.value);
  
    value2 = Number(secondvalue.value);
}

////FOR ADDITION

const add = document.getElementById('add') ;

add.addEventListener('click', function(){
    updateValue();
        display.value = value1 + value2;
})
 

///////FOR SUBTRACTION

const subbtn = document.getElementById('sub');

subbtn.addEventListener('click', function(){
    updateValue(); 
    display.value = value1 - value2;
});

