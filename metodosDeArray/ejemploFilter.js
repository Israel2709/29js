let koders = ["Angy", "Anahí", "Alejandro", "Dante"];

const getEvenNames = (kodersArray) => {
  let result = kodersArray.filter((koder) => koder.length % 2 === 0);
  return result;
};

let evenNames = getEvenNames(koders);
console.log(evenNames);
console.log(getEvenNames);
