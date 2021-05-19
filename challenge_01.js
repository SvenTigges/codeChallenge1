
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
// Holger Code
let a,b,summe;

a = prompt("Bitte erste Zahl eingeben: ", "");
b = prompt("Bitte zweite Zahl eingeben: ", "");

if(isNaN(parseFloat(a))) a = 0;
if(isNaN(parseFloat(b))) b = 0;

summe = parseFloat(a) + parseFloat(b);

console.log("Die Summe der Zahlen ist: "+summe+".");
*/


/***** Dozenten Beispiel *****/
/*
//Deklaration
let ziffer1, ziffer2;
let zahl1, zahl2; summe;

// Eingabe Ziffern 
ziffer1 = promt(ziffer1);
ziffer2 = promt(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);

// Typenkonvertierung (string--> number)
zhal1 = parseInt(ziffer1);
zahl2 = parseInt(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);

// Berechung :: Summe
summe = zahl1 + zahl2;
console.log("Die Summe ist: " + summe);
*/

/***** Kompaktlösung ******/
/*
let zahl1, zahl2, summe;
zahl1 = parseInt(prompt("Bitte Zahl 1 eingeben: "));
zahl2 = parseInt(prompt("Bitte Zahl 2 eingeben: "));
summe = zahl1 + zahkl2;
console.log("Die Summe ist: ");
*/

/***** Kompakt aber schlecht lesbar *****/
/*
consol.log
(
    "die Summe ist: " + 
    (
       parseInt(prompt("Bitte Zahl 1 eingeben: ")) + 
       parseInt(prompt("Bitte Zahl 2 eingeben: ")) 
    )
);
*/