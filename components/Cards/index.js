// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/*========== CARD CREATOR ==========*/
function cardCreator(object) {
  // New Elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  // Set Attributes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  img.setAttribute("src", object.authorPhoto);

  // Set Text
  headline.textContent = object.headline;
  span.textContent = `By ${object.authorName}`;

  // Component Structure
  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(span);
  card.appendChild(headline);
  card.appendChild(author);

  return card;
}

/*========== AXIOS GET REQUEST ==========*/
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    response.data.articles.bootstrap.forEach((article) => {
      document
        .querySelector(".cards-container")
        .appendChild(cardCreator(article));
    });
    return response;
  })
  .then((response) => {
    response.data.articles.javascript.forEach((article) => {
      document
        .querySelector(".cards-container")
        .appendChild(cardCreator(article));
    });
    return response;
  })
  .then((response) => {
    response.data.articles.jquery.forEach((article) => {
      document
        .querySelector(".cards-container")
        .appendChild(cardCreator(article));
    });
    return response;
  })
  .then((response) => {
    response.data.articles.node.forEach((article) => {
      document
        .querySelector(".cards-container")
        .appendChild(cardCreator(article));
    });
    return response;
  })
  .then((response) => {
    response.data.articles.technology.forEach((article) => {
      document
        .querySelector(".cards-container")
        .appendChild(cardCreator(article));
    });
    return response;
  })
  .catch((error) => {
    console.log("Error:", error);
  });
