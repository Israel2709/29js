const createProduct = async (name, price) => {
  let response = await fetch(
    "https://javascript29g-default-rtdb.firebaseio.com/products/.json",
    {
      method: "POST",
      body: JSON.stringify({ name, price }),
    }
  );
  console.log(response);
};

let dataArray = [
  ["producto a", 100],
  ["producto b", 800],
  ["producto c", 900],
  ["producto d", 50],
];
/*
dataArray.forEach((product) => {
  createProduct(product[0], product[1]);
});
*/
const getProductById = async (productId) => {
  let response = await fetch(
    `https://javascript29g-default-rtdb.firebaseio.com/products/${productId}.json`
  );
  let data = await response.json();
  console.log(data);
};

getProductById("-NiIMx_LvOyLKCi8N2MB");
