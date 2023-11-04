const getAllUsers = async () => {
  let response = await fetch(
    "https://javascript29g-default-rtdb.firebaseio.com/users/.json"
  );
  let data = await response.json();
  console.log(response);
  console.log(data);
  return data;
};

const createUser = async (userObject) => {
  let response = await fetch(
    "https://javascript29g-default-rtdb.firebaseio.com/users/.json",
    {
      method: "POST",
      body: JSON.stringify(userObject),
    }
  );
  let data = await response.json();
  console.log(response);
  console.log(data);
  return data;
};
/*("-NiNFiF90-y7S7zwsnmc");*/
const replaceUser = async (newUserObject, userId) => {
  let response = await fetch(
    `https://javascript29g-default-rtdb.firebaseio.com/users/${userId}.json`,
    {
      method: "PUT",
      body: JSON.stringify(newUserObject),
    }
  );
  let data = await response.json();
  console.log(data);
  return data;
};

const patchUser = async (newUserObject, userId) => {
  let response = await fetch(
    `https://javascript29g-default-rtdb.firebaseio.com/users/${userId}.json`,
    {
      method: "PATCH",
      body: JSON.stringify(newUserObject),
    }
  );
  let data = await response.json();
  console.log(data);
  return data;
};

const deleteUser = async (userId) => {
  let response = await fetch(
    `https://javascript29g-default-rtdb.firebaseio.com/users/${userId}/.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  console.log(data);
  return data;
};

const deletePropertyFromUser = async (userId, property) => {
  let response = await fetch(
    `https://javascript29g-default-rtdb.firebaseio.com/users/${userId}/${property}.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  console.log(data);
  return data;
};

let saveUser = document.getElementById("save-user");

saveUser.addEventListener("click", async () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let userObject = { name, email };
  console.log(userObject);
  let response = await createUser(userObject);
  console.log(response);
});

const createUserCard = (userData) => {
  let { name, email } = userData;
  let cardHtml = `<div class="col">
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">${name}}</h5>
    <p class="card-text">${email}</p>
  </div>
</div>
</div>`;

  return cardHtml;
};

const printAllUsers = async () => {
  let users = await getAllUsers();
  console.log(users);
  let usersWrapper = document.getElementById("users-wrapper");

  Object.values(users).forEach((user) => {
    let userHtml = createUserCard(user);
    let currentContent = usersWrapper.innerHTML;
    usersWrapper.innerHTML = currentContent + userHtml;
  });
};

printAllUsers();
