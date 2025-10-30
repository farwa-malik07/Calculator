
// const display = document.getElementById("display")

// function appendTodisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function DellLastCharacter(e){
//     if(e.target.innerHTML == 'DEL'){
//         display = display.substring(0, display.length-1);
//     }
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Syntex Error"
//     }

// }

let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
           try{
             string = eval(string);
            display.value = string;
           }
           catch(error){
            display.value = "syntex error";
           }
        }

        else if (e.target.innerHTML == 'C') {
            string = "";
            display.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }

        else {
            string += e.target.innerHTML;
            display.value = string;
        }
    })
})

