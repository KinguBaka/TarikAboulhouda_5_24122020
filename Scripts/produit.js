
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
      let newSelect = document.createElement("select");
      newSelect.id = "select";
      newSelect.setAttribute("class", "form-select");
      newSelect.setAttribute("aria-label", "Default select example")
      document.getElementById(elem._id).appendChild(newSelect);
      let selectDefault = document.createElement("option");
      selectDefault.setAttribute("selected", "")
      selectDefault.textContent= " Choisir une couleur "
      document.getElementById("select").appendChild(selectDefault);
      let colors = elem.colors;
      let i = 0;
      colors.forEach(element => {
        let newColors = document.createElement("option");
        newColors.textContent = element;
        i++;
        newColors.setAttribute("value", i);
        document.getElementById("select").appendChild(newColors);
      });
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