let name = "Israel";
let lastname = "Salinas Martínez";

//let fullname = name + " " + lastname;

const evaluate = (a, b) => {
  return a > b ? "verdadero" : "falso";
};

let fullname = `${name} ${evaluate(30, 20)}`;

console.log(fullname);

console.log("d" - "asdf");

console.log(parseInt("asdfx"));

let someOtherVar = NaN;

let isra = {
    name:"Israel Salinas Martínez",
    address:{
        street:"San simón",
        number:45,
        neighborhood:"San Marcos"

    },
    hobbies:[
        "chess",
        "music",
        "games"
    ],
    playGuitar:()=>{...}
}


console.log(someOtherVar);
