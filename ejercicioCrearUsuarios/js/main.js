/*let btnSave = document.getElementById("btn-save-user");

btnSave.addEventListener("click", (event) => {
  console.log("guardando usuario");
});

let text =
  "Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.";

console.log(text.indexOf("modal"));*/

let usersList = [
  {
    name: "Israel Salinas Martínez",
    email: "israel@kodemia.mx",
    picture: "https://randomuser.me/api/portraits/men/77.jpg",
    id: 123456,
  },
  {
    name: "Charles Silva",
    email: "charles@kodemia.mx",
    picture: "https://randomuser.me/api/portraits/men/58.jpg",
    id: 234567,
  },
]; /*Aquí estan TODOS los usuarios que yo vaya creando*/

const printAllUsers = (usersList) => {
  /*Necesito crear las cards de los usuarios*/
  usersList.forEach((user) => {
    console.log(user);
    /*vamos a extraer las propiedades del usuario*/
    let name = user.name;
    let email = user.email;
    let picture = user.picture;
    let id = user.id;

    console.log("propiedades", name, email, picture, user);
    /*Aqui empezaremos a crear la card*/
    let cardCol =
      document.createElement("div"); /*Esto crea un elemento con el tag "div"*/
    cardCol.classList.add(
      "col"
    ); /*Esto permite agreagar una clase a un elemento */

    let card = document.createElement("div");
    card.classList.add("card");

    let cardImg = document.createElement("img");
    cardImg.src =
      picture; /*Así se agrega el atributo src y un valor a una imagen*/

    cardImg.classList.add("card-img-top");
    cardImg.alt = "Foto del usuario";

    console.log(cardImg);

    let cardBody =
      document.createElement("div"); /*este es el cuerpo de la card*/
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = name; /*Así se pone texto dentro de un elemento*/

    let cardText =
      document.createElement("p"); /*Aquí va a ir el email del usuario*/
    cardText.textContent = email;

    /*Ya que tengo todas las piezas, vamos a juntarlas para armar el html*/

    cardBody.append(
      cardTitle,
      cardText
    ); /*con append puedo agregar muchos elementos a la vez dentro de otro elemento */

    console.log(cardBody);

    card.append(cardImg, cardBody);

    console.log(card);

    cardCol.append(card); /*esta es la card completa*/
    console.log(cardCol);

    /*Para poder agregar estas cards al html necesito saber en qué parte del html las voy a insertar*/
    /*para saber esto , voy a poner un id en el elemento del html, y después voy a seleccionar ese id con javascript*/

    let cardContainer =
      document.getElementById("card-container"); /*Aquí voy a meter las cards*/

    cardContainer.append(card);
  });
};

function generateUniqueId() {
  return "user" + Date.now();
}

const saveUser = () => {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var picture = document.getElementById("picture").value;

  if (name && email && picture) {
    var id = generateUniqueId();
    var user = {
      id: id,
      name: name,
      email: email,
      picture: picture,
    };

    usersList.push(user);
    printAllUsers(usersList);

    // Limpiar los campos del formulario después de guardar
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("picture").value = "";
  } else {
    alert("Por favor, complete todos los campos.");
  }
};

document.getElementById("btn-save-user").addEventListener("click", saveUser);
