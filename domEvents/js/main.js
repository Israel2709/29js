let title = "";
let titleInput = document.getElementById("title-input");

titleInput.addEventListener("keyup", (event) => {
  let value = event.target.value;
  title = value;
});

let changeButton = document.getElementById("change-button");
let mainTitle = document.getElementById("main-title");

changeButton.addEventListener("click", () => {
  mainTitle.innerText = title;
});

let filterCriteria = {
  brand: "Dell",
  category: "Computers",
  country: "Mexico",
};

const filterByNat = (nat, array) => {
  let result = array.filter((item) => item.nat === nat);
};
