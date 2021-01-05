
const urlName = window.location.search;
const pageName = new URLSearchParams(urlName);
const nameProduct = pageName.get('name');


function afficherLeProduit(nounours) {
  for (let elem of nounours) {
    if (elem.name == nameProduct){
      let newName = document.getElementById("nameTitle");
      newName.textContent = elem.name;
      let newImg = document.getElementById("imageNounours");
      newImg.setAttribute("src", elem.imageUrl);
      let newDescription = document.getElementById("descriptionNounours");
      newDescription.textContent = elem.description;
      let colors = elem.colors;
      let i = 0;
      colors.forEach(element => {
        let newColors = document.createElement("option");
        newColors.textContent = element;
        i++;
        newColors.setAttribute("value", i);
        document.getElementById("select").appendChild(newColors);
      });
      let newPrix = document.getElementById("prix");
      newPrix.textContent = elem.price/100;
    }
  }
}

async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies') // will return info, but in wrong format
      .then((response) => response.json()) // will return info, in json format
      .then((nounours) => afficherLeProduit(nounours)) // main code here, using json info
  }
  
fillProducts()