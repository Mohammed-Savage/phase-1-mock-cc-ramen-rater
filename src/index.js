// write your code here 
const API = "http://localhost:3000/ramens";
document.getElementById("new-ramen").addEventListener("submit", createNewRamen)
document.getElementById("kitty-letter").addEventListener("mouseover", cycleRamen)
function cycleRamen(e) {
  document.getElementById("kitty-letter").textContent = "Cats R So cute!";
  // document.getElementById("kitty-letter").style.color = "white";
}
document.getElementById("kitty-letter").addEventListener("mouseout", catOut)
function catOut(e) {
  document.getElementById("kitty-letter").textContent = "Kitty Letter";
  // document.getElementById("kitty-letter").style.color = "white";
}

// First I need to load in the ramen from my local db.json.
fetch(API)
.then((resp) => resp.json())
//  .then(console.log)
.then(renderRamens)

function renderRamens(ramens) {
  // console.log(ramens);
  // Then I'm going to iterate through each of the objects (or, ramen) in the array.
  ramens.forEach(renderRamen)
}

function renderRamen(ramen) {
  const ramenMenuDiv = document.getElementById("ramen-menu");
//  console.log(ramen);
  const ramenImage = document.createElement("img");
// Then I'm going to need to display each one using an "img" tag in the div ided as "ramen-menu".
  ramenImage.src = ramen.image;
  ramenMenuDiv.append(ramenImage);
  ramenImage.addEventListener("click", e => renderDetails(ramen))
}

function renderDetails(ramen) {
  // console.log(ramen.image)
  const detailImage = document.getElementById("detail-image");
  const ramenName = document.getElementById("ramen-name");
  const restaurantName = document.getElementById("restaurant-name");
  const ratingDisplay = document.getElementById("rating-display");
  const commentDisplay = document.getElementById("comment-display");

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  ramenName.textContent = ramen.name;
  restaurantName.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
}

function createNewRamen(e) {
  e.preventDefault();
  // const ramenMenuDiv = document.getElementById("ramen-menu");
  
  const newRamen = {
    name: e.target["new-name"].value,
    rating: e.target["new-rating"].value,
    restaurant: e.target["new-restaurant"].value,
    image: e.target["new-image"].value,
    comment: e.target["new-comment"].value,
  };

  // const newRamenHTML = JSON.stringify(newRamen);
  //const newRamenElement = document.getElementById("ramen-menu");
  
  // console.log(newRamen);
  renderRamen(newRamen);
  // const readyToAdd = document.create
//  console.log(ramen);
  // ramenMenuDiv.append(newRamenHTML);
  
}




/*   <img id="detail-image" class="detail-image" src="./assets/image-placeholder.jpg" alt="Insert Name Here" />
    <h2 id="ramen-name" class="name">Insert Name Here</h2>
    <h3 id="restaurant-name" class="restaurant">Insert Restaurant Here</h3> */

//console.log("Hello, world!")
//console.log(ramenMenu)
// const ramenMenu = document.getElementById("ramen-menu");



// fetch("http://localhost:3000/ramens")
//   .then((resp) => resp.json())
//   .then((ramenArray) => {
//     ramenArray.forEach((ramen) => {
//         appendRamenToMenu(ramen);
//     });
//   });

// function appendRamenToMenu(ramenObj) {
//     const imageDomElement = document.createElement("img");

//     imageDomElement.src = ramenObj.image;
// }

//  const img = document.createElement("img");
//  img.src = "./assets/ramen/gyukotsu.jpg";
//  document.querySelector("ramen-menu").append(img)
