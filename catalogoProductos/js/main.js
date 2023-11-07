//https://javascript29g-default-rtdb.firebaseio.com/products
let allProducts = [];

document.querySelectorAll("#product-form input").forEach((input) => {
  input.addEventListener("focus", () => {
    document.getElementById("form-alert").classList.add("d-none");
  });
});

const createProductObject = () => {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let price = Number(document.getElementById("price").value);
  let image = document.getElementById("image").value;
  let tagsValue = document.getElementById("tags").value;
  let tags = tagsValue.split(",");
  let productObject = { name, description, price, image, tags };
  if (name && description && price && image) {
    return productObject;
  } else {
    document.getElementById("form-alert").classList.remove("d-none");
  }
};

const createProductInDb = async (productObject) => {
  let response = await fetch(
    "https://javascript29g-default-rtdb.firebaseio.com/products/.json",
    {
      method: "POST",
      body: JSON.stringify(productObject),
    }
  );
  let data = await response.json();
  return data;
};

const deleteProduct = async (productKey) => {
  let response = await fetch(
    `https://javascript29g-default-rtdb.firebaseio.com/products/${productKey}.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  getAllProducts();
  return data;
};

const getAllProducts = async () => {
  let productsWrapper = document.getElementById("products-wrapper");
  productsWrapper.innerHTML = "";
  let response = await fetch(
    "https://javascript29g-default-rtdb.firebaseio.com/products/.json"
  );
  let products = await response.json();
  if (products) {
    let productsArray = Object.entries(products);
    console.log(productsArray);
    let combinedProducts = productsArray.reduce((accum, current) => {
      return [...accum, { key: current[0], ...current[1] }];
    }, []);
    allProducts = combinedProducts;
    document.getElementById("products-alert").classList.add("d-none");
    printProductCards(allProducts);
  } else {
    document.getElementById("products-alert").classList.remove("d-none");
  }
};

getAllProducts();

const saveProduct = async () => {
  let productObject = createProductObject();
  console.log(productObject);
  if (productObject) {
    let response = await createProductInDb(productObject);
    console.log(response);
    getAllProducts();
  }
};

let saveProductBtn = document.getElementById("save-product");

saveProductBtn.addEventListener("click", saveProduct);

const createProductCard = (productData) => {
  let { name, description, price, image, key, tags } = productData;

  let productCol = document.createElement("div");
  productCol.classList.add("col");

  let productCard = document.createElement("div");
  productCard.classList.add("card", "product-card", "h-100", "shadow");

  let productImage = document.createElement("img");
  productImage.classList.add("card-img-top");
  productImage.src = image;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "d-flex", "flex-column");

  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = name;

  let cardDescription = document.createElement("p");
  cardDescription.classList.add("card-text");
  cardDescription.textContent = description;

  let cardPrice = document.createElement("p");
  cardPrice.classList.add("card-text");
  cardPrice.textContent = `$${price} MXN`;

  let productTags = document.createElement("div");
  productTags.classList.add("d-flex", "gap-3", "flex-wrap");
  tags.forEach((tag) => {
    productTags.innerHTML =
      productTags.innerHTML +
      `
    <span class="badge text-bg-info">${tag}</span>
    `;
  });

  //productTags.innerText = tags.join(" ");

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "mt-auto");
  deleteButton.textContent = "Borrar producto";
  deleteButton.addEventListener("click", async () => {
    console.log(key);
    let response = await deleteProduct(key);
    console.log(response);
    getAllProducts();
  });

  cardBody.append(
    cardTitle,
    cardDescription,
    cardPrice,
    productTags,
    deleteButton
  );

  productCard.append(productImage, cardBody);

  productCol.append(productCard);

  return productCol;
};

const printProductCards = async (productsArray) => {
  let productsWrapper = document.getElementById("products-wrapper");
  productsWrapper.innerHTML = "";
  productsArray.forEach((product) => {
    let productCard = createProductCard(product);
    productsWrapper.append(productCard);
  });
};

let filterField = document.getElementById("filter-by-name");

filterField.addEventListener("keyup", (event) => {
  let filterAlert = document.getElementById("filter-alert");
  filterAlert.classList.add("d-none");

  let value = event.target.value;
  let filterResult = allProducts.filter((product) =>
    product.name.toLowerCase().includes(value.toLowerCase())
  );
  if (!filterResult.length) {
    filterAlert.classList.remove("d-none");
  }
  console.log(filterResult);
  printProductCards(filterResult);
});
