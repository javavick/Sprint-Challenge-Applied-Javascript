/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

/*========== CAROUSEL CREATOR ==========*/
function carouselCreator() {
  // Variables
  let index = 0;

  // New Elements
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const mountains = document.createElement("img");
  const computer = document.createElement("img");
  const trees = document.createElement("img");
  const turntable = document.createElement("img");
  const rightButton = document.createElement("div");

  // Set Attributes
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");

  mountains.setAttribute("src", "./assets/carousel/mountains.jpeg");
  mountains.style.display = "block";

  computer.setAttribute("src", "./assets/carousel/computer.jpeg");
  computer.style.opacity = "0";

  trees.setAttribute("src", "./assets/carousel/trees.jpeg");
  trees.style.opacity = "0";

  turntable.setAttribute("src", "./assets/carousel/turntable.jpeg");
  turntable.style.opacity = "0";

  rightButton.classList.add("right-button");

  // Set Text
  leftButton.textContent = "<";
  rightButton.textContent = ">";

  // Event Listeners
  rightButton.addEventListener("click", (event) => {
    if (index === 3) {
      index = 0;
      TweenMax.to(turntable, 0.5, { opacity: 0, display: "none", delay: 0 });
      TweenMax.to(mountains, 0.5, { opacity: 1, display: "block", delay: 0.5 });
    } else if (index === 2) {
      index++;
      TweenMax.to(trees, 0.5, { opacity: 0, display: "none", delay: 0 });
      TweenMax.to(turntable, 0.5, { opacity: 1, display: "block", delay: 0.5 });
    } else if (index === 1) {
      index++;
      TweenMax.to(computer, 0.5, { opacity: 0, display: "none", delay: 0 });
      TweenMax.to(trees, 0.5, { opacity: 1, display: "block", delay: 0.5 });
    } else if (index === 0) {
      index++;
      TweenMax.to(mountains, 0.5, { opacity: 0, display: "none", delay: 0 });
      TweenMax.to(computer, 0.5, { opacity: 1, display: "block", delay: 0.5 });
    }
  });

  leftButton.addEventListener("click", (event) => {
    if (index === 0) {
      index = 3;
      TweenMax.to(mountains, 0.5, { opacity: 0, display: "none", delay: 0 });
      TweenMax.to(turntable, 0.5, { opacity: 1, display: "block", delay: 0.5 });
    } else if (index === 1) {
      index--;
      TweenMax.to(computer, 0.5, { opacity: 0, display: "none", delay: 0 });
      TweenMax.to(mountains, 0.5, { opacity: 1, display: "block", delay: 0.5 });
    } else if (index === 2) {
      index--;
      TweenMax.to(trees, 0.5, { opacity: 0, display: "none", delay: 0 });
      TweenMax.to(computer, 0.5, { opacity: 1, display: "block", delay: 0.5 });
    } else if (index === 3) {
      index--;
      TweenMax.to(turntable, 0.5, { opacity: 0, display: "none", delay: 0 });
      TweenMax.to(trees, 0.5, { opacity: 1, display: "block", delay: 0.5 });
    }
  });

  // Component Structure
  carousel.appendChild(leftButton);
  carousel.appendChild(mountains);
  carousel.appendChild(computer);
  carousel.appendChild(trees);
  carousel.appendChild(turntable);
  carousel.appendChild(rightButton);

  return carousel;
}

/*========== GLOBAL VARIABLES ==========*/

let gsap = document.createElement("script");
gsap.setAttribute(
  "src",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
);

/*========== DOM MANIPULATION ==========*/
document.querySelector("head").appendChild(gsap);
document.querySelector(".carousel-container").appendChild(carouselCreator());
