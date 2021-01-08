// --------AFFICHER LE PRODUIT--------
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

// ---------- AJOUTER LE PRODUIT AU PANIER ------------

function ajouteUnProduitAuPanier() {
  //Récupére l'objet JSON deja renseigné dans le localstorage
  let oldItems = JSON.parse(localStorage.getItem("listeProduit")) || [];
  //création d'un nouvel objet
  let newItem = {
    "id" : idProduct,
    "name" : document.getElementById("nameTitle").innerHTML,
    "color" : document.getElementById("select").options[document.getElementById("select").selectedIndex].text,
    "quantity" : 1,
    "price" : Number(document.getElementById("prix").innerHTML)
  };
  // Condition afin d'ajouter l'element si oldItems est vide
  // Sinon regarde si le nouvel element est deja present dedans
  if (oldItems.length == 0) {
      oldItems.push(newItem);
  } else {
      ajouterQuantite(oldItems, newItem);
  }
  //Ajoute l'array avec les nouveaus objet dans le localstorage
  localStorage.setItem("listeProduit", JSON.stringify(oldItems));
}

function ajouterQuantite(oldItems, newItem) {
  let ajoutQuantite = false;
  //ajoute une quantite si l'element est deja present dedans
  for (let elem of oldItems) {
    if (elem.name === newItem.name && elem.color === newItem.color) {
      elem.price +=  elem.price / elem.quantity;
      elem.quantity += 1;
      ajoutQuantite = true;
      break
    }
  }
  //si l'element n'est pas deja dedans, on l'ajoute
  if (ajoutQuantite == false) {
    oldItems.push(newItem);
  }
};