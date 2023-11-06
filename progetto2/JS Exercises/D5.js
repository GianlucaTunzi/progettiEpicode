/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets[3]);
console.log(pets[2]);
console.log(pets[1]);
console.log(pets[0]);
console.log("\n")

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets.shift())
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
cars[0].licensePlate = "12345"
cars[1].licensePlate = "67891"
cars[2].licensePlate = "34127"

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: 'Opel',
  model: 'Corsa',
  color: 'white',
  trims: ['life', 'style', 'r-line'],
  licensePlate: "27824"
});
cars[0].trims.pop();
cars[1].trims.pop();
cars[2].trims.pop();
cars[3].trims.pop();

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
justTrims.push(cars[0].trims[0]);
justTrims.push(cars[1].trims[0]);
justTrims.push(cars[2].trims[0]);
justTrims.push(cars[3].trims[0]);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let i = 0;i<cars.length; i++){
  if(cars[i].color[0]=="b"){
    console.log("Fizz")
  }else{
    console.log("Buzz")
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let num = 0;
let i = 0;
while(num!=32){
  num=numericArray[i];
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const newArray = []
let numericValue = 0;
for(let i = 0; i < charactersArray.length; i++){
  switch(charactersArray[i]){
    case "a":
      numericValue = 1;
      break;
    case "b":
      numericValue = 2;
      break;
    case "c":
      numericValue = 3;
      break;
    case "d":
      numericValue = 4;
      break;
    case "e":
      numericValue = 5;
      break;
    case "f":
      numericValue = 6;
      break;
    case "g":
      numericValue = 7;
      break;
    case "h":
      numericValue = 8;
      break;
    case "i":
      numericValue = 9;
      break;
    case "l":
      numericValue = 10;
      break;
    case "m":
      numericValue = 11;
      break;
    case "n":
      numericValue = 12;
      break;
    case "o":
      numericValue = 13;
      break;
    case "p":
      numericValue = 14;
      break;
    case "q":
      numericValue = 15;
      break;
    case "r":
      numericValue = 16;
      break;
    case "s":
      numericValue = 17;
      break;
    case "t":
      numericValue = 18;
      break;
    case "u":
      numericValue = 19;
      break;
    case "v":
      numericValue = 20;
      break;
    case "z":
      numericValue = 21;
      break;
    default:
      break;
  }
  newArray.push(numericValue);
  
}
