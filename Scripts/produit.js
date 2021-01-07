
const urlId = window.location.search;
const pageId = new URLSearchParams(urlId);
const idProduct = pageId.get('id');

function afficherLeProduit(nounours) { 
  let newName = document.getElementById("nameTitle");
  newName.textContent = nounours.name;
  let newImg = document.getElementById("imageNounours");
  newImg.setAttribute("src", nounours.imageUrl);
  let newDescription = document.getElementById("descriptionNounours");
  newDescription.textContent = nounours.description;
  let colors = nounours.colors;
  let i = 0;
  colors.forEach(element => {
    let newColors = document.createElement("option");
    newColors.textContent = element;
    i++;
    newColors.setAttribute("value", i);
    document.getElementById("select").appendChild(newColors);
  });
  let newPrix = document.getElementById("prix");
  newPrix.textContent = nounours.price/100;
}

async function fillProducts() {
  await fetch('http://localhost:3000/api/teddies/'+idProduct) // will return info, but in wrong format
    .then((response) => response.json()) // will return info, in json format
    .then((nounours) => afficherLeProduit(nounours)) // main code here, using json info
}
  
fillProducts()