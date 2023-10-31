/*Métodos de selección de DOM*/
/*D.O.M. (Document Object Model) son todos los elementos que estan presentes en mi interfaz de usuario*/

/*
getElementById: Permite seleccionar un elemento con base en su id
Este método devuelve un elemento de DOM
*/
let firstButton = document.getElementById("first-button");
console.log(firstButton);

/*
getElementsByClassName Permite seleccionar todos los elementos que contengan una clase específica.
Este método devuelve un HTMLCollection, que contiene todos los elementos que tengan la clase especificada en el método
*/
let customButtons = document.getElementsByClassName("custom-button");
console.log(customButtons);

/*
getElementsByTagname Permite seleccionar todos los elementos que contengan un tagname específico.
Este método devuelve un HTMLCollection, que contiene todos los elementos que tengan el tagname especificado en el método
*/
let spans = document.getElementsByTagName("span");
console.log(spans);

/*
querySelector permite seleccionar el primer elemento de DOM que cumpla con el selector de css proporcionado

devuelve el primer elemento de DOM que cumpla con el selector proporcionado
*/

let secondaryCustom = document.querySelector(".btn-secondary.custom-button");
console.log(secondaryCustom);

/*
querySelector permite seleccionar todos los elementos de DOM 

devuelve el primer elemento de DOM que cumpla con el selector proporcionado
*/
let allSecondaryCustom = document.querySelectorAll(
  ".btn-secondary.custom-button"
);
console.log(allSecondaryCustom);

let oddItems = document.querySelectorAll(
  "#koders-list .list-group .list-group-item:nth-of-type(odd)"
);

oddItems.forEach((item) => item.classList.add("bg-peru"));

/*-------*/

/* Listeners */

firstButton.addEventListener("click", () => {
  alert("me diste click");
});

let linkToDisney = document.querySelector("#link-to-disney");

const redirectTo = (url) => {
  window.open(url, "_self");
};

linkToDisney.addEventListener("click", () => {
  redirectTo("https://www.disneyplus.com");
});

let headingLink = document.getElementById("heading-link");

headingLink.addEventListener("click", () => {
  redirectTo("https://www.disneyplus.com");
});

let linksToDisney = document.querySelectorAll(".link-to-disney");

linksToDisney.forEach((element) => {
  element.addEventListener("click", () => {
    redirectTo("https://www.disneyplus.com");
  });
});
