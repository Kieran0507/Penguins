"use strict";
let penguinName = document.querySelector("#penguinName");
let penguinAge = document.querySelector("#penguinAge");
let happyFeet = document.querySelector("#flexRadioDefault1");
let inputBtn = document.querySelector("#btn");
let parentDiv = document.querySelector("#parentDiv");

let postPenguin = () => {
  let penguinNameValue = penguinName.value;
  let penguinAgeValue = penguinAge.value;
  let happyFeetValue = happyFeet.checked;
  let newPenguin;
  if (penguinNameValue == "" || penguinAgeValue == "") {
    return;
  } else {
    if (happyFeetValue == true) {
      newPenguin = {
        name: penguinNameValue,
        age: penguinAgeValue,
        happyFeet: true,
      };
      console.log(newPenguin);
    } else {
      newPenguin = {
        name: penguinNameValue,
        age: penguinAgeValue,
        happyFeet: false,
      };

      console.log(newPenguin);
    }
  }
  postFetch(newPenguin);

  makeCard(newPenguin);
};

let postFetch = (object) => {
  fetch("http://localhost:8083/createPenguin", {
    method: "POST",
    headers: {
      "Content-type": "application/JSON",
    },
    body: JSON.stringify(object),
  }).then((response) => {
    if (response.status !== 201) {
      console.error(`Status: ${response.status}`);
      return;
    }
    console.log(response);
  });
};
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
  p.textContent = `Name : ${penguin.name} 
  Age : ${penguin.age}
  Happy Feet : ${penguin.happyFeet}`;

  card.appendChild(img);
  card.appendChild(div2);
  div2.appendChild(p);
  parentDiv.appendChild(card);
};
inputBtn.addEventListener("click", postPenguin);
