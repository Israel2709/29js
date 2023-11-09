const BLOG_ENDPOINT = "https://javascript29g-default-rtdb.firebaseio.com/blog";

console.log("entry detail");

let queryString = location.search;
console.log(queryString);

let params = new URLSearchParams(queryString);
console.log(params);

let entryKey = params.get("entryKey");
console.log(entryKey);

const getEntryById = async (entryId) => {
  let response = await fetch(`${BLOG_ENDPOINT}/${entryId}/.json`);
  let data = await response.json();
  console.log(data);
  if (data) {
    let { author, content, cover, title } = data;
    document.getElementById("entry-cover").src = cover;
    document.getElementById("entry-title").textContent = title;
    document.getElementById("entry-author").textContent = author;
    document.getElementById("entry-content").textContent = content;
  } else {
    document.getElementById("detail-wrapper").innerHTML = `
    <div class="alert alert-secondary" role="alert">
  No se encontró el contenido de esta entrada
</div>
<img class="w-100" src="https://thumbs.dreamstime.com/z/page-not-found-error-hand-drawn-vector-doodle-illustration-internet-connection-problem-concept-cat-holds-computer-mouse-119417440.jpg" alt="" />
    `;
  }
};

getEntryById(entryKey);
