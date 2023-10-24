/*function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}*/

const addTwoNumbers = (number1, number2) => number1 + number2;

/*Quiero una función que tome un string, lo revierta, y despues extraiga un substring con los 3 primeros caracteres, y los conviera a mayúsculas*/
const stringTransform = (txt) =>
  txt.split("").reverse().join("").substring(0, 3).toUpperCase();

//console.log(addTwoNumbers(4, 8));

//console.log(stringTransform("Jorge"));

/*
console.log("Israel".split(""));
console.log("Israel".split("").reverse());
console.log("Israel".split("").reverse().join(""));
console.log("Israel".split("").reverse().join("").substring(0, 3));
console.log(
  "Israel".split("").reverse().join("").substring(0, 3).toUpperCase()
);*/
/*
function getTriangleArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

function checkIfIsEven(number) {
  let result = number % 2 === 0;
  return result;
}

function getRandomKoder(kodersArray) {
  let number = ;
  let koder = kodersArray[Math.floor(Math.random() * kodersArray.length)];
  return koder;
}

const getRandomKoder = (kodersArray) => {
    let randomNumber = Math.floor(Math.random() * kodersArray.length);
    let koder = kodersArray[randomNumber];
    return koder; 
}

const getRandomKoder = (kodersArray) =>  kodersArray[Math.random() * kodersArray.length]*/

setTimeout(
  () => {
    /*función anónima*/
    console.log("koders");
  } /*callback*/,
  5000
);
