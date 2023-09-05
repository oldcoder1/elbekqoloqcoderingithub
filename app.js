let form = document.querySelector('.form')
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let screen = document.querySelector('.screen')
let natija = 1

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let num1 = input1.value
    

    let num2 = input2.value
   
    
    for(let i = 0; i < num2; i++){
        natija *= num1
    }

    screen.textContent = natija
})

    
