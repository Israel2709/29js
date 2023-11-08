let token = localStorage.getItem("token");
let isLogged = token;

let message = document.getElementById("message");
let loginButton = document.getElementById("login-button");

const setMessage = () => {
  message.textContent = isLogged
    ? "Sesión iniciada"
    : "Tienes que iniciar sesión";

  loginButton.textContent = isLogged ? "Log out" : "Log in";
};

setMessage();

/*const toggleLogin = () => {
  isLogged = !isLogged;
  console.log(isLogged);
  setMessage();
}*/

const login = () => {
  /*aquí simulamos que nos  llegó un token*/
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjM3LCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImF2YXRhciI6InNvbWUgdXJsIn0.8QCJeN7GXddZduC4b-cOfSRSOpualiTQwNk-VmhD_gU";

  localStorage.setItem("token", token);
};

const logout = () => {
  localStorage.removeItem("token");
};

loginButton.addEventListener("click", login);
