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
