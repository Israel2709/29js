/*function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}*/

function testIf(number) {
  /*money, tenis, adult, gender*/

  /*if( money && !tenis && adult && (gender === "H" || gender === "M") ){
        "puedes entrar"
    } else if(money && tenis) {
        "vas a tener que pagar doble para entrar"
    }*/

  /*if (number === 10) {
    console.log("primer condición");
    console.log("ganaste 10 puntos");
  } else if (number === 5) {
    console.log("segunda condición");
    console.log("ganaste 5 puntos");
  } else if (number === 3) {
    console.log("tercer condición");
    console.log("ganaste 3 puntos");
  } else {
    console.log("default");
    console.log("no ganaste nada");
  }*/

  switch (number) {
    case number > 10:
      console.log("ganaste 10 puntos");
      break;
    case 5:
      console.log("ganaste 5 puntos");
      break;
    case 3:
      console.log("ganaste 3 puntos");
      break;
    default:
      console.log("no ganaste nada");
      break;
  }
}

testIf(19);

/* 
    Vamos a crear un consejero de nombre para mi mascota, este consejero necesita saber qué especie es tu mascota (perro, gato, ave) y ofrecer el siguiente nombre
        perro -> Milaneso
        gato -> Michiflais
        ave -> Piolín

    si la especie no es conocida por el consejero, nos debe decir que no conoce esa especie
*/

/*
    tenemos un calculador de dados. Este calculador requiere saber los puntos que obtuviste en cada dado ( considerando dos dados). Una vez que le digas los números te debe avisar si ganaste o perdiste considerando las siguientes combinaciones ganadoras:

    2,2
    4,6
    1,1

    cualquier otra combinación se considera perdedora
    los dados sólo tienen puntos del 1 al 6
*/

function suggestName(specie) {
  switch (specie) {
    case "Gato":
      return "Michiflais";
    case "Perro":
      return "Milaneso";
    case "Ave":
      return "Piolín";
    default:
      return "No conozco esa especie";
  }
}

let name1 = suggestName("Perro");
let name2 = suggestName("Gato");
let name3 = suggestName("Ave");
let name4 = suggestName("Pez");

console.log(name1, name2, name3, name4);

function evaluateDiceThrow(num1, num2) {
  if (
    (num1 === 2 && num2 === 2) ||
    (num1 === 4 && num2 === 6) ||
    (num1 === 6 && num2 === 4) ||
    (num1 === 1 && num2 === 1)
  ) {
    return "Sos un ganador";
  } else {
    return "Suerte para la próxima";
  }
}

evaluateDiceThrow(2, 2);

function x() {
  let evenWord;
  let oddWord;

  return `La palabra con nones es {oddWord} y la palabra con pares es {evenWord}`;
}

/*function isAdult(age){
  if( age >= 18){
    return "is Adult"
  } else {
    return "Is not adult"
  }
}*/

function isAdult(age) {
  return age >= 18 ? "is Adult" : "Is not adult";
}

function isEven(number) {
  return number % 2 === 0 ? "Is Even" : "Is odd";
}

function saludarConNombre(nombre) {
  return `Hola, soy ${nombre}`;
}

function saludarSinNombre() {
  return `Hola sin nombre`;
}

function saludarGeneral(nombre) {
  let textoDeSaludo = nombre ? saludarConNombre(nombre) : saludarSinNombre();
}

console.log(saludarGeneral("Isra"));
console.log(saludarGeneral());

let text = "onomatopeya";
console.log(text.length);

for (let i = 0; i <= 3; i++) {
  console.log(`Estamos en ${i}`);
}

function createWords(text) {
  let charCount = text.length;
  let oddWord = ""; //para los nones
  let evenWord = ""; //para los pares

  for (let i = 0; i <= charCount; i++) {
    //str.charAt(5)
    let currentChar = text.charAt(i);

    i % 2 !== 0 ? (oddWord += currentChar) : (evenWord += currentChar);
  }
  console.log("con nones", oddWord);
  console.log("con pares", evenWord);
}

createWords("gato");

/*
  - Crear una función que reciba un texto, y un número, si el número excede la cantidad de caracteres del texto, devolver un mensaje de error
  si el número no excede la cantidad de caracteres, devolver un string que contenga los caracteres desde 0 hasta el número indicado
  Israel, 3
  -> Isra

  - Teniendo el texto: "La mejor forma de predecir el futuro es creándolo"
    crear una función que me devuelva la cantidad de palabras cuya longitud sea par, y la cantidad de palabras cuya longitud sea non.
    
    -pares: 6
    -nones: 3

  .split
  */

function getSubstring(txt, finalIndex) {
  let result =
    txt.length > finalIndex
      ? txt.substring(0, finalIndex)
      : "El texto es más pequeño que el número indicado";
  return result;
}

let substringTest = getSubstring("cualquier otra cosa", 50);
console.log(substringTest);

function getSquareArea(base, height) {
  let area = base * height;
  return area;
}

function adultCounter(personsArray) {
  let adults = 0;
  for (let i = 0; i < personsArray.length; i++) {
    let age = personsArray[i].age;
    if (age > 18) {
      adults += 1;
    }
  }
  return adults;
}
