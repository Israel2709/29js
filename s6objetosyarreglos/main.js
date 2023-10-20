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
        <- I. S. M. 
    2.- Teniendo en cuenta el siguiente texto: "Si esperas a estar listo, esperarás toda la vida"
        Queremos obtener una nueva frase que contenga sólo las palabras en posición non
        -> "Esperas estar esperarás la "
    3.- Se requiere solicitar el nombre, edad, y correo de una persona, y crear una lista de personas
*/
