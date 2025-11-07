// Exercici 6

/*
var num1 = 1234
var num2 = 5678

var suma = (num1 + num2)
console.log("Suma: " + suma)

var resta = (num1 - num2)
console.log("Resta: " + resta)

var div = (num1 / num2)
console.log("Divisió: " + div)

var multi = (num1 * num2)
console.log("Multiplicació: " + multi)
 */

// Exercici 7

/*
var catet_a = 4
var catet_b = 4
var hipotenusa = Math.sqrt(catet_a * catet_a + catet_b * catet_b)
console.log(hipotenusa)
 */

// Exercici 8

/*
var a = 'hola'
var b = 'adeu'
console.log(a/b) //RETORNA NaN
 */

// Exercici 9

/*
var nom = 'Ferran Garcia Pages';
let separat = nom.split(' ');
let cog1 = separat[1];
let longitud = cog1.length;

console.log(longitud)
 */

// Exercici 10

/*
var nom = 'Ferran Garcia Pages';
let editat = nom.slice(0,6) + nom.slice(7)
console.log(editat)
 */

// Exercici 11

/*
let a;
let b = null;
let suma = (a+b);
console.log(suma) // NaN + 0 = NaN
 */

// Exercici 12

/*
    //Explicita
let boolea1 = true;
let text1 = boolea1.toString();

console.log(text1);

    //Implicita
let boolea2 = false;
let text2 = boolea2 + "";

console.log(text2);
 */

// Exercici 13

/*
    //Explicita
let text = 'hola';
let boolea1 = Boolean(text);

console.log(boolea1);

    //Implicita
let text1 = "hola";

if (text1) {
    console.log("Es true");
} else {
    console.log("Es false");
}
 */

// Exercici 14

    //Explicita
let boolea = true
let num1 = Number(boolea);

console.log(num1)

    //Implicita
let booleaTrue = true;
let booleaFalse = false;

let resultat1 = booleaTrue * 10;
let resultat2 = booleaFalse + 5;

console.log(resultat1); // 10 - True = 1 * 10
console.log(resultat2); // 5 - False = 0 + 5