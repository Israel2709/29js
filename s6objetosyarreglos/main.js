let perro = {
  nombre: "milaneso",
  color: "negro",
  edad: 10,
  raza: "Callerman",
  ladrar: function () {
    console.log("Guau");
  },
};

let text = new String("some text");

//decontstrucción
let { nombre, color, raza, fechaNacimiento, rascar } = perro;

let myName;

console.log(nombre, color, raza, fechaNacimiento, rascar);

/* notación de punto 
let nombreDelPerro = perro.nombre;
let colorDelPerro = perro.color;
let razaDelPerro = perro.raza;
*/

perro.color = "gris";
perro.rascar = function () {
  console.log("scratch scratch");
};
console.log(perro);

let someObject = {
  suma: function (a, b) {
    return a + b;
  },
};

console.log(someObject.suma(8, 9));

let myArray = [];

console.log(myArray[999999999]);

/*
   1.- Se requiere generar las iniciales de una persona usando su nombre completo.
        -> Israel Salinas Martínez
        ISM
        <- I. S. M. 
    2.- Teniendo en cuenta el siguiente texto: "Si esperas a estar listo, esperarás toda la vida"
        Queremos obtener una nueva frase que contenga sólo las palabras en posición non
        -> "Esperas estar esperarás la "
    3.- Se requiere solicitar el nombre, edad, y correo de una persona, y crear una lista de personas
*/

let people = [];

function createPerson(name, age, email) {
  let person = {};
  person.name = name;
  person.age = age;
  person.email = email;
  console.log(person);
  people.push(person);
  console.log(people);
}

createPerson("Anais Laguna", 20, "al@gmail.com");
createPerson("Oswaldo Herrera", 35, "oh@gmail.com");

function createNewPhrase(
  phrase /*"Si esperas a estar listo, te quedaras toda la vida esperando"*/
) {
  let wordsArray = phrase.split(" ");
  let newPhrase = "";
  let limit = wordsArray.length;
  for (let i = 0; i < limit; i++) {
    if (i % 2 !== 0) {
      newPhrase += wordsArray[i] + " ";
    }
  }
  return newPhrase;
}

function createNewPhrase2(phrase) {
  let result = phrase.split(" ").reduce(function (accum, current, index) {
    return index % 2 !== 0 ? accum + current + " " : accum;
  }, "");
  return result;
}

let result = createNewPhrase(
  "Si esperas a estar listo, te quedaras toda la vida esperando"
);
let result2 = createNewPhrase("Ojos que no ven corazón que no siente");

console.log(result);
console.log(result2);

let koders = [
  {
    name: "Said Barrera",
    generation: 12,
    score: 9.2,
  },
  {
    name: "Helena Fuentes",
    generation: 8,
    score: 8.7,
  },
  {
    name: "Gerardo Cabrera",
    generation: 12,
    score: 9.9,
  },
  {
    name: "Brenda Guerrero",
    generation: 8,
    score: 8.4,
  },
  {
    name: "Alejandro Fuentes",
    generation: 7,
    score: 8.6,
  },
  {
    name: "Sandra Tellez",
    generation: 9,
    score: 9.9,
  },
];

/*
1.- Entregar el promedio general del score de los koders
2.- Obtener una nueva lista que contenga únicamente aquellos koders cuyo score sea mayor que 9
3.- Saber cuantos koders hay de alguna generación específica:
      1 -> no hay koders de esta generación
      9 -> hay 1 koder de la generación 9
      12 -> hay 2 koders de la generación 12
*/

function countByGeneration(generation) {
  let quantity = 0;
  for (let i = 0; i < koders.length; i++) {
    let currentKoder = koders[i];
    let currentGeneration = currentKoder.generation;

    if (currentGeneration === generation) {
      quantity += 1;
    }
  }
  return quantity !== 0
    ? `Tenemos ${quantity} koders en la generación ${generation}`
    : `No tenemos koders en esta generación`;
}

console.log(countByGeneration(12));
