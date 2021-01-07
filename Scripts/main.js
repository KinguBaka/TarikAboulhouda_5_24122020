// ---------- AFFICHER TOUS LES PRODUITS -----------
function afficherLeToutSousFormeDeDivision(nounours) {
    for (let elem of nounours) {
        let newNournours = document.createElement("div");       // Création d'une div pour chaque nounourse
        newNournours.id = elem.name;     // Id donné à chaque div
        newNournours.setAttribute("class", "text-center border border-secondary rounded");
        document.getElementById("listeProduits").appendChild(newNournours);   //Div placé avant la div avec l'id "produits"
        let newName = document.createElement("h2");     // Création d'un titre pour la Div
        newName.textContent = elem.name;    // Le titre est le nom du nounourse
        document.getElementById(elem.name).appendChild(newName);     // titre placé dans la div
        let newImg = document.createElement("img");     // création d'une image
        newImg.setAttribute("src", elem.imageUrl);  // implémentation de l'attribut "src"
        document.getElementById(elem.name).appendChild(newImg);  //image placé dans la div
        let newPrix = document.createElement("p");  // création d'un paragraphe avec le texte
        newPrix.textContent = elem.price/100 + "€";   // le prix est celui du nounours
        document.getElementById(elem.name).appendChild(newPrix); // prix placé dans la div
        let newLink = document.createElement("a");  // création du lien
        newLink.id = elem._id; // création de l'id du lien avec le nom du produit
        newLink.setAttribute("href", "produit.html?id="+elem._id);    //lien renseigné
        document.getElementById(elem.name).appendChild(newLink);     //lien placé dans la div
        let newButton = document.createElement("button");   // création d'un bouton
        newButton.setAttribute("class", "btn btn-outline-primary");     //personnalisation du lien avec bootstrap
        newButton.textContent = "voir produit";     // text renseigné dans le bouton
        document.getElementById(elem._id).appendChild(newButton);       // boutton placé dans la div
    }
};

async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies') // will return info, but in wrong format
      .then((response) => response.json()) // will return info, in json format
      .then((nounours) => afficherLeToutSousFormeDeDivision(nounours)) // main code here, using json info
}
  
fillProducts()