
const urlName = window.location.search;
const pageName = new URLSearchParams(urlName);
const nameProduct = pageName.get('name');


function afficherLeProduit(nounours) {
  for (let elem of nounours) {
    if (elem.name == nameProduct){
      let newNournours = document.createElement("div");
      newNournours.id = elem._id;
      newNournours.setAttribute("class", "text-center border border-secondary rounded");
      document.getElementById("produits").appendChild(newNournours);
      let newName = document.getElementById("nameTitle");
      newName.textContent = elem.name;
      let newImg = document.createElement("img");
      newImg.setAttribute("src", elem.imageUrl);
      document.getElementById(elem._id).appendChild(newImg);
      let newDescription = document.createElement("p");
      newDescription.textContent = elem.description;
      document.getElementById(elem._id).appendChild(newDescription);
      let newPrix = document.createElement("p");
      newPrix.textContent = elem.price/100 + "€";
      document.getElementById(elem._id).appendChild(newPrix);
      let newButton = document.createElement("button");
      newButton.setAttribute("class", "btn btn-outline-primary");
      newButton.textContent = "Ajouter au panier";
      document.getElementById(elem._id).appendChild(newButton);
    }
  }
}

async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies') // will return info, but in wrong format
      .then((response) => response.json()) // will return info, in json format
      .then((nounours) => afficherLeProduit(nounours)) // main code here, using json info
  }
  
fillProducts()