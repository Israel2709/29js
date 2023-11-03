let todos = [
  {
    title: "Completar tarea 1",
    dueDate: "2023-11-10",
    completed: false,
    https://randomuser.me/api/portraits/women/42.jpg
    id_:"001"
  },
  {
    title: "Ir de compras",
    dueDate: "2023-11-15",
    completed: true,
    id_:"002"
  },
  {
    title: "Estudiar para el examen",
    dueDate: "2023-11-20",
    completed: false,
    id_:"003"
  },
  {
    title: "Hacer ejercicio",
    dueDate: "2023-11-25",
    completed: true,
  },
  {
    title: "Llamar a mamá",
    dueDate: "2023-11-30",
    completed: false,
  },
  {
    title: "Terminar proyecto",
    dueDate: "2023-12-05",
    completed: false,
  },
  {
    title: "Limpiar la casa",
    dueDate: "2023-12-10",
    completed: true,
  },
  {
    title: "Preparar la cena",
    dueDate: "2023-12-15",
    completed: false,
  },
  {
    title: "Leer un libro",
    dueDate: "2023-12-20",
    completed: false,
  },
  {
    title: "Hacer una caminata",
    dueDate: "2023-12-25",
    completed: true,
  },
];

const printAllTodos = () => {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    let todoItem = document.createElement("li");

    todoItem.classList.add(todo.completed ? "bg-success" : "bg-peru");
    todoItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between"
    );

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo.completed;

    checkbox.addEventListener("click", () => {
      console.log("checkbox clickeado");
      console.log(index);
      todos[index].completed = !todos[index].completed;
      console.log(todos);
      printAllTodos(todos);
    });

    let title = document.createElement("p");
    title.innerText = `${todo.title} Vence: ${todo.dueDate}`;

    todoItem.append(title, checkbox);
    todoList.append(todoItem);
  });
};

printAllTodos();


let name = document.getElementById("name")
let email = document.getElementById("email")
let name = document.getElementById("name")
let name = document.getElementById("name")

let userObject = {name, email, id, picture}