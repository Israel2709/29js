let token = localStorage.getItem("token");
token
  ? window.open("views/todo-list.html", "_self")
  : window.open("views/login-form.html", "_self");

/*const login = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username && password) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ";

    localStorage.setItem("token", token);
    location.reload();
  }
};

const logOut = () => {
  localStorage.removeItem("token");
  location.reload();
};

const toggleViews = () => {
  let loginView = document.getElementById("login-view");
  let todoList = document.getElementById("todo-list");
  let token = localStorage.getItem("token");
  if (token) {
    loginView.classList.add("d-none");
    todoList.classList.remove("d-none");
  } else {
    loginView.classList.remove("d-none");
    todoList.classList.add("d-none");
  }
};

toggleViews();

let loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", login);

let logOutButton = document.getElementById("logout-button");
logOutButton.addEventListener("click", logOut);
*/
