let numbers = [2, 7, 3, 6];

const getTotalSum = (numbersArray) => {
  let result = numbersArray.reduce(
    (accum, current) => {
      return { ...accum, total: accum.total + current };
    },
    { total: 0, x: "foo" }
  );
  return result;
};

let total = getTotalSum(numbers);
console.log(total);
/*
console.log(/^[aeiouAEIOU]$/.test("B"));
*/

let text =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, repellat?";

const transformWithFilter = (textToTransform) => {
  let textArray = textToTransform.split("");
  let filteredArray = textArray.filter((character) =>
    /^[aeiouAEIOU]$/.test(character)
  );
  let result = filteredArray.join("");
  console.log(textArray);
  console.log(filteredArray);
  console.log(result);
  return result;
};

/*const transformWithReduce = (textToTransform) => {
  let textArray = textToTransform.split("");
  let result = textArray.reduce((accum, current) => {
    return /^[aeiouAEIOU]$/.test(current) ? accum + current : accum;
  }, "");
  return result;
};*/

const transformWithReduce = (textToTransform) =>
  textToTransform
    .split("")
    .reduce(
      (accum, current) =>
        /^[aeiouAEIOU]$/.test(current) ? accum + current : accum,
      ""
    );

console.log(transformWithFilter(text));
console.log(transformWithReduce(text));
