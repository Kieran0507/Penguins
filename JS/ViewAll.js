"use strict";
let parentDiv = document.querySelector("#parentDiv");

fetch("http://localhost:8083/getAll").then((response) => {
  if (response.status !== 200) {
    console.error(`Error status was: ${response.status}`);
    return;
  }
  response
    .json()
    .then((data) => {
      for (let obj of data) {
        console.log(obj);
        makeCard(obj);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

let makeCard = (penguin) => {
  let card = document.createElement("div");
  card.className = "card col-3";
  card.style = "width: 18rem";

  let img = document.createElement("img");
  img.src = "https://live.staticflickr.com/65535/31327605330_bf02da2577_b.jpg";
  img.className = "card-img-top";
  img.alt = "waving penguin";

  let div2 = document.createElement("div");
  div2.className = "card-body";

  let p = document.createElement("p");
  p.className = "card-text";
  p.textContent = `ID: ${penguin.id} Name : ${penguin.name} 
    Age : ${penguin.age}
    Happy Feet : ${penguin.happyFeet}`;

  card.appendChild(img);
  card.appendChild(div2);
  div2.appendChild(p);
  parentDiv.appendChild(card);
};
