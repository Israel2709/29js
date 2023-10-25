let koders = ["Angy", "Anahí", "Alejandro", "Dante"];

const capitalizeKoders = (kodersArray) => {
  let result = kodersArray.map((koder) => {
    console.log(koder);
    console.log(koder.toUpperCase());
    return "a";
  });
  console.log(result);
};

capitalizeKoders(koders);

let sizes = [
  {
    unit: "in",
    length: 2,
    width: 5,
  },
  {
    unit: "in",
    length: 6,
    width: 3,
  },
  {
    unit: "in",
    length: 7,
    width: 7,
  },
];

const fixArray = (wrongArray) => {
  let result = wrongArray.map((item) => {
    return { unit: "cm", length: item.length * 2.54, width: item.width * 2.54 };
  });

  console.log(result);
};

fixArray(sizes);
