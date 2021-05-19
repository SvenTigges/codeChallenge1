
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/


let firstDigit = prompt("Bitte Zahl 1 eingeben: ");
let secondDigit = prompt("Bitte Zahl 2 eingeben: ");
 
//let summery =(Number(firstDigit) + Number(secondDigit));

let summery = parseFloat(firstDigit) + parseFloat(secondDigit);

//let summery = parseInt(firstDigit) + parseInt(secondDigit);

console.log("die Summe beider Zahlen ist: " + summery);


/*
let a,b,summe;

a = prompt("Bitte erste Zahl eingeben: ", "");
b = prompt("Bitte zweite Zahl eingeben: ", "");

if(isNaN(parseFloat(a))) a = 0;
if(isNaN(parseFloat(b))) b = 0;

summe = parseFloat(a) + parseFloat(b);

console.log("Die Summe der Zahlen ist: "+summe+".");
*/