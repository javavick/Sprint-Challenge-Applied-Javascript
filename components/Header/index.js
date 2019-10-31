// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // New Elements
  const header = document.createElement("div");
  const date = document.createElement("span");
  const h1 = document.createElement("h1");
  const span = document.createElement("span");

  // Attributes and Text
  header.classList.add("header");

  date.classList.add("date");
  date.textContent = "SMARCH 28, 2019";

  h1.textContent = "Lambda Times";

  span.classList.add("temp");
  span.textContent = "98°";

  // Component Structure
  header.appendChild(date);
  header.appendChild(h1);
  header.appendChild(span);

  return header;
}

// Add the header to the .header-container div
document.querySelector(".header-container").appendChild(Header());
