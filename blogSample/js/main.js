let blogEntries = [];
const BLOG_ENDPOINT = "https://javascript29g-default-rtdb.firebaseio.com/blog";

let entriesWrapper = document.getElementById("entries-wrapper");

const getAllEntries = async () => {
  let response = await fetch(`${BLOG_ENDPOINT}/.json`);
  let data = await response.json();
  let transformedData = Object.entries(data).reduce((accum, current) => {
    return [...accum, { key: current[0], ...current[1] }];
  }, []);
  blogEntries = transformedData;
  if (blogEntries) {
    printAllEntries(blogEntries);
  }
};

const createEntryCard = (entryData) => {
  let { author, cover, title, key } = entryData;
  let cardCol = document.createElement("div");
  cardCol.classList.add("col");

  cardCol.addEventListener("click", () => {
    window.open(`views/entry-detail.html?entryKey=${key}`, "_blank");
  });

  let card = document.createElement("div");
  card.classList.add("card");

  let cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.src = cover;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;

  let cardAuthor = document.createElement("p");
  cardAuthor.classList.add("card-text");
  cardAuthor.textContent = author;

  cardBody.append(cardTitle, cardAuthor);

  card.append(cardImage, cardBody);
  cardCol.append(card);

  return cardCol;
};

const printAllEntries = (entriesArray) => {
  entriesWrapper.innerHTML = "";
  entriesArray.forEach((entry) => {
    let entryCard = createEntryCard(entry);
    entriesWrapper.append(entryCard);
  });
};

getAllEntries();
