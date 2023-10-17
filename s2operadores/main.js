/*Operadores aritméticos*/
/*
adicion -> + 
sustracción -> -
multiplicación -> *
división -> /
módulo -> %

a + b
a - b
a * b
a / b 
a % b

*/

/*Operadores de asignación*/

/*

Asignación aditiva -> +=
Asignación sustractiva -> -=
Asignación multiplicativa -> *=
Asignación divisiva -> /=
Asignación modulativa -> %=
Asignación -> =

*/

/*Operadores de comparación*/

/*
    Igual a (igualdad) ->  A == B ->  
        (Compara que el valor de A sea igual al valor de B))
    Idéntico a (extrema comparación) -> A === B -> 
        (Compara que tanto el valor como el tipo de dato de A sean iguales al de B)
    Mayor que ->   A > B -> Evalua que el valor de A sea mayor que el de B
    Menor que ->   A < B -> Evalua que el valor de A sea menor que el de B
    Mayor o igual que ->   A >= B -> Evalua que el valor de A sea mayor o igual que el de B
    Menor o igual que ->   A <= B -> Evalua que el valor de A sea menor o igual que el de B
    Diferente de -> A != B -> Evalua si el valor de A es diferente que el de B
    Diferente de -> A !== B -> Evalua si el valor y el tipo de dato de A es diferente que el de B
*/

/*Operadores lógicos*/

/*
    And -> expression1 && expression2 
    Or -> expression1 || expression2
    not -> !expression
*/

function addTwoNumbers(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;
}

let suma1 = addTwoNumbers(6, 9);
let suma2 = addTwoNumbers(10, 20);

let superSuma = addTwoNumbers(suma1, suma2);

console.log(superSuma);

function whoIsBigger(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    backtick;
    return `${firstNumber} es el mayor`;
  } else if (firstNumber < secondNumber) {
    return `${secondNumber} es el mayor`;
  } else {
    return `los números son iguales`;
  }
}

whoIsBigger(2, 10);

/*console.log(suma1);
console.log(suma2);
*/

/* crear una función que me diga cual es el mayor de 2 números*/
/* crear una función que me diga si un número es par o non*/
