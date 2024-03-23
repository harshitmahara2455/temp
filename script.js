let myCel = document.getElementById("myCel");
let Celcius = document.getElementById("Celcius");
let ok = document.getElementById("lega");
let answer = document.getElementById("answer")

let Fahrenheit;


ok.onclick = function(){
    celciusValue=Number(Celcius.value);
    Fahrenheit =( celciusValue*(9/5))+32;
    answer.textContent =`Fahrenheit ${ Fahrenheit}`
    
    
   
}




