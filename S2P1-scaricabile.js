//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 20;
let y = 10; 
if (x > y){
  console.log("il numero più grande è " + x)
} else if (x < y) {
  console.log("il numero più grande è " + y)
} else {
  console.log("i numeri sono uguali")
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

  let num = 3
if (num < 5){
  console.log("Tiny")
} else if ((num > 4) && (nun < 10)){
  console.log("Small")
} else if ((num > 9) && (nun < 15)){
  console.log("Medium")
} else if ((num > 14) && (nun < 20)){
  console.log("Large")
} else if (num >= 20) {
  console.log("Huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
  if ((i === 3) || (i === 8)){
    continue
  }
  console.log(i)
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let j = 0; j <= 15; j++){
  if (j % 2 === 0){
    console.log(j + " è un numero pari")
  } else {
    console.log(j + " è un numero dispari")
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num1 = 11;
let num2 = 3;
if ((num1 === 8)||(num2 === 8)){
  console.log("uno dei numeri è uguale a 8")
} else if (num1 + num2 === 8){
  console.log("l'addizione dei numeri è uguale a 8")
} else if ((num1 - num2 === 8)||(num2 - num1 === 8)){
  console.log("la sottrazione dei numeri è uguale a 8")
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 51;
let totalCheckOut;
if (totalShoppingCart > 50){
  totalCheckOut = totalShoppingCart
  console.log(totalCheckOut)
} else {
  totalCheckOut = totalShoppingCart + 10
  console.log(totalCheckOut)
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart1 = 80
let totalCheckOut1
totalShoppingCart1 = totalShoppingCart1 * .8
if (totalShoppingCart1 > 50){
  totalCheckOut1 = totalShoppingCart1
  console.log("totale da pagare: " + totalCheckOut1 + " euro - Spedizione gratuita")
} else {
  totalCheckOut1 = totalShoppingCart1 + 10
  console.log("totale da pagare: " + totalCheckOut1 + " euro - Costo spedizione: 10 euro")
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true
let gender = isMale? "Male": "Female"
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), 
  stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (k = 1; k <= 100; k++){
  if ((k % 3 === 0) && (k % 5 === 0)){
    console.log(k + "FizzBuzz")
  } else if (k % 3 === 0) {
    console.log(k + "Fizz")
  } else if (k % 5 === 0) {
    console.log(k + "Buzz")
  }
}



// Extra esercizi

/*Esercizio 1: condizioni con ausilio di operatori logici
Maggiore e minore
Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 

Esempio:
Input: a = 3, b = -1, c = 4, d = -2
Output: maggiore = 4, minore = 2
*/

let a, b, c, d;
a = -1;
b = 0;
c = 3;
d = 4;
if ((a > b) && (a > c) && (a > d)){
  console.log("Maggiore = " + a)
} else if ((b > a) && (b > c) && (b > d)){
  console.log("Maggiore = " + b)
} else if ((c > a) && (c > b) && (c > d)){
  console.log("Maggiore = " + c)
} else{
  console.log("Maggiore = " + d)
}
if ((a < b) && (a < c) && (a < d)){
  console.log("Minore = " + a)
} else if ((b < a) && (b < c) && (b < d)){
  console.log("Minore = " + b)
} else if ((c < a) && (c < b) && (c < d)){
  console.log("Minore = " + c)
} else{
  console.log("Minore = " + d)
}

/* OR in other way */

console.log("Maggiore = " + Math.max(a,b,c,d))
console.log("Minore = " + Math.min(a,b,c,d))

/* Esercizio 2: stringhe e numeri
Quanti anni ha?
Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

l’età della persona
quanti anni sono necessari per raggiungere i 100
Esempio:
Input: anno corrente = 2021, anno di nascita = 1996
Output: età = 25, anni mancanti = 75
*/

let currentYear = 2023
let birthdayYear = 1922
let age = currentYear - birthdayYear
if (age > 100){
  console.log("Età = " + age +  ", superati 100 anni")
} else {
  console.log("età = " + age + ", anni mancanti = " + (100 - age))
}


/* Esercizio 3: Ciclo for
Progetta un algoritmo in Javascript che stampi tutte le coppie di numeri naturali la cui somma è un numero intero a scelta.

Esempio
Input: numero 7
Output: 
0-7
1-6
2-5
3-4
4-3
5-2
6-1
7-0
*/
let inputNumber = 10

for (let n1 = 0; n1 <= inputNumber; n1++ ){
  for (let n2 = 0;n2 <= inputNumber; n2++){
    if (n1 + n2 === inputNumber){
      console.log(n1 + " - " + n2)
    }
  }
}


/* Esercizio 4: metodo e proprietà
Il conta cifre
Scrivi un programma che dato un numero conti da quante cifre è formato.

Esempio
Input: numero: 245
Output: numero cifre: 3*/

let amount = 5215;
let numberOfCaracters = amount.toString().length;
console.log(numberOfCaracters)