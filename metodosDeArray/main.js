/*For Each*/
let koders = ["Angy", "Anahí", "Alejandro", "Dante"];

/*const printInitials = (arrayToIterate) => {
  for (let i = 0; i < arrayToIterate.length; i++) {
    let initial = arrayToIterate[i].charAt(0);
    console.log(initial);
  }
};*/
/*
const printKodersInitial = (kodersArray) => {
  kodersArray.forEach((koder, index, array) => {
    console.log(koder.charAt(0));
  });
};

printInitials(koders);
*/

/*
let kodersList = [
  {
    name: "Karla",
    name2: "Ameyali",
    lastName: "Hernandez",
    lastName2: "Lorenzo",
  },
  { name: "Angela", name2: "Donaji", lastName: "Garcia", lastName2: "Garcia" },
  { name: "Armando", name2: "", lastName: "Garcia", lastName2: "Miranda" },
  { name: "Anais", name2: "", lastName: "Laguna", lastName2: "Torres" },
  { name: "Raul", name2: "", lastName: "Gomez", lastName2: "Sotelo" },
  { name: "Rodolfo", name2: "", lastName: "Ramirez", lastName2: "Morales" },
  { name: "Jorge", name2: "Luis", lastName: "Juarez", lastName2: "Reyes" },
  { name: "Ulises", name2: "", lastName: "Flores", lastName2: "Grande" },
  { name: "Jose", name2: "Ricardo", lastName: "Gomez", lastName2: "Duran" },
  { name: "Jose", name2: "Alejandro", lastName: "Sanchez", lastName2: "Cruz" },
  { name: "Eduardo", name2: "", lastName: "Montiel", lastName2: "Luna" },
  { name: "Dante", name2: "Uriel", lastName: "Sotelo", lastName2: "Mejia" },
];

const createInitialsArray = (kodersArray) => {
  let initialsArray = [];
  kodersArray.forEach((koder) => {
    let { name, name2, lastName, lastName2 } = koder;
    let initials = `${name.charAt(0).toUpperCase()}. ${
      name2 && name2.charAt(0).toUpperCase() + ". "
    }${lastName.charAt(0).toUpperCase()}. ${lastName2
      .charAt(0)
      .toUpperCase()}.`;

    initialsArray.push(initials);
  });
  console.log(initialsArray);
};

createInitialsArray(kodersList);
*/
let otherArray = [
  {
    name: "Israel",
    lastname: "Salinas Martínez",
  },
  {
    name: "Jose Luis",
    lastname: "Antonio Diosdado Vega",
  },
];

const getInitials2 = (kodersArray) => {
  let koderInitials = [];
  kodersArray.forEach((koder) => {
    //console.log(koder);
    let { name, lastname } = koder;
    //console.log(name);
    let nameArray = name.split(" ");
    //console.log(nameArray);
    let nameInitials = "";
    let lastnameInitials = "";
    nameArray.forEach((word) => {
      console.log(word);
      let initial = word.charAt(0);
      console.log(initial);
      nameInitials += `${initial}. `;
    });

    let lastnameArray = lastname.split(" ");
    lastnameArray.forEach((word) => {
      let initial = word.charAt(0);
      console.log(initial);
      lastnameInitials += `${initial}. `;
    });
    console.log(nameInitials);
    console.log(lastnameInitials);
    koderInitials.push(`${nameInitials} ${lastnameInitials}`);
  });
  console.log(koderInitials);
};

getInitials2(otherArray);
