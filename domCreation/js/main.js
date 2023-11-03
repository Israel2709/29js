console.log("script cargado");
/*
let slides = [
  {
    title: "Slide 1",
    image:
      "https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltb44c2478ddb8d9ce/6525f8fea4897aff23fe9499/ES_OW2_S07_RiseOfDarkness_Logo_DarkBG.png?format=webply&quality=80&auto=webp",
    buttonText: "Ver Horario",
  },
  {
    title: "Slide 2",
    image:
      "https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt31c9239b079d4e76/65258c9e5ce6787f31b2327b/_BNET_BannerDesktop_1600x720.png?format=webply&quality=80&auto=webp",
    buttonText: "Ver Horario",
  },
];
*/
/*
<div class="carousel-item">
    <img src="https://picsum.photos/id/237/600/200" class="d-block w-100" alt="...">
</div>
*/
/*
const createSlide = () => {
  let slideWrapper = document.createElement("div");
  slideWrapper.classList.add("carousel-item");
  console.log(slideWrapper);

  let slideImage = document.createElement("img");
  slideImage.setAttribute(
    "src",
    "https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt31c9239b079d4e76/65258c9e5ce6787f31b2327b/_BNET_BannerDesktop_1600x720.png?format=webply&quality=80&auto=webp"
  );
  slideImage.classList.add("d-block", "w-100");
  console.log(slideImage);
  console.log(slideImage.src);

  
  slideWrapper.append(slideImage);
  console.log(slideWrapper);
  return slideWrapper;
};

const insertSlide = () => {
  let carousel = document.getElementById("blizzard-carousel");
  let slide = createSlide();
  console.log(slide);
  carousel.appendChild(slide);
};*/

let users = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Peter",
      last: "Walters",
    },
    dob: {
      date: "1951-06-03T20:07:16.855Z",
      age: 72,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/92.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
    },
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Sophia",
      last: "Frazier",
    },
    dob: {
      date: "1991-11-08T09:44:36.743Z",
      age: 31,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
    },
  },
  {
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Javier",
      last: "Dumont",
    },
    dob: {
      date: "1975-12-17T20:33:06.653Z",
      age: 47,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/73.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
    },
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Meire",
      last: "Teixeira",
    },
    dob: {
      date: "1973-04-27T01:52:50.181Z",
      age: 50,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/86.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/86.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/86.jpg",
    },
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Arvid",
      last: "Gerhardsen",
    },
    dob: {
      date: "1961-01-02T18:43:06.833Z",
      age: 62,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/69.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
    },
  },
];

const createUserCard = (userData) => {
  /*
    {
    "gender": "female",
    "name": {
        "title": "Ms",
        "first": "Meire",
        "last": "Teixeira"
    },
    "dob": {
        "date": "1973-04-27T01:52:50.181Z",
        "age": 50
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/women/86.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
    }
}*/
  console.log(userData);
  console.log("en create user");
  let userCol = document.createElement("div");
  userCol.classList.add("col");

  let userCard = document.createElement("div");
  userCard.classList.add("card");

  let userImage = document.createElement("img");
  userImage.classList.add("card-img-top");
  userImage.setAttribute("src", userData.picture.large);
  userImage.setAttribute("alt", "Foto del usuario");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = `${userData.name.first} ${userData.name.last}`;

  let cardButton = document.createElement("a");
  cardButton.classList.add("btn", "btn-primary");
  cardButton.setAttribute("href", "#");
  cardButton.innerText = "Go somewhere";

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = true;
  console.log(checkbox);

  cardBody.append(cardTitle, cardButton);

  userCard.append(userImage, cardBody);

  userCol.append(userCard);
  return userCol;
};

const printUserCard = (userData) => {
  let usersWrapper = document.getElementById("users-wrapper");
  let userCard = createUserCard(userData);
  usersWrapper.append(userCard);
};

const printAllUsers = (usersList) => {
  //let usersWrapper = document.getElementById("users-wrapper");
  usersWrapper.innerHTML = "";
  usersList.forEach((user) => {
    printUserCard(user);
  });
};

printAllUsers(users);

users.push({
  gender: "male",
  name: {
    title: "Mr",
    first: "Jhon",
    last: "Travolta",
  },
  dob: {
    date: "1961-01-02T18:43:06.833Z",
    age: 62,
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/69.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
  },
});
