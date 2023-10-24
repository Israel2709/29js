/*For Each*/
let koders = ["Angy", "Anahí", "Alejandro", "Dante"];

/*const printInitials = (arrayToIterate) => {
  for (let i = 0; i < arrayToIterate.length; i++) {
    let initial = arrayToIterate[i].charAt(0);
    console.log(initial);
  }
};*/

const printKodersInitial = (kodersArray) => {
  kodersArray.forEach((koder, index, array) => {
    console.log(koder.charAt(0));
  });
};

printInitials(koders);
