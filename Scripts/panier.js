// ----------- AFFICHER LE PANIER -------------
// Recupération - Affichage des produits dans le localstorage  
let storagePanier = JSON.parse(localStorage.getItem("listeProduit"));
let afficherPanier = document.getElementById("tableBody");
let prix = 0;
// Création du tableau avec les différents produits
for (let i = 0; i < storagePanier.length; i ++) {
    let newElem = document.createElement("tr")
    afficherPanier.appendChild(newElem);
    for (let elem of Object.values(storagePanier[i])) {
        let newArticle = document.createElement("td");
        newArticle.innerHTML = elem;
        newElem.appendChild(newArticle);
    }
    // Total des prix
    for (let elem of Object.keys(storagePanier[i])) {
        if (elem == "price") {
            prix += storagePanier[i].price;
        }
    }
}
    // Total des prix affiché sous le tableau
let totalPrix = document.getElementById("subTotal");
totalPrix.textContent = prix;

// Stock le total du prix dans le localstorage
localStorage.removeItem("prixTotalCommande");
let prixTotal = document.getElementById("subTotal").innerHTML;
let stockageprix = [];
stockageprix.push(prixTotal);
localStorage.setItem("prixTotalCommande", stockageprix);


// Verifie que chaque champ est bien rempli pour pouvoir passer la commande
function verifForm() {
    if(document.getElementById("prenom").value != "" && 
    document.getElementById("nom").value!= "" && 
    document.getElementById("adresse").value != "" && 
    document.getElementById("ville").value != "" &&
    document.getElementById("email").value != "") {
        document.getElementById("confirmCommand").disabled=false;
    } else {
        document.getElementById("confirmCommand").disabled=true;
    }
};

// Creer un tableau avec les ids des produits commandés
function creerTableauCommande() {
    let storagePanier = JSON.parse(localStorage.getItem("listeProduit"));
    let productsAvecDoublon = [];
    for (let elem of storagePanier) {
        productsAvecDoublon.push(elem.id);
    }
    let products = Array.from(new Set(productsAvecDoublon));
    return products;
};

// Creer un objet contact avec les informations de l'utilisateur
function creerObjetContact() {
    let contact = {
        "firstName" : document.getElementById("prenom").value,
        "lastName" : document.getElementById("nom").value,
        "address" : document.getElementById("adresse").value,
        "city" : document.getElementById("ville").value,
        "email" : document.getElementById("email").value
    };
    return contact;
};

// Assemble l'objet de contact et le tableau d'id de produit
function assembleProductEtContact() {
    let products = creerTableauCommande();
    let contact = creerObjetContact();
    return {contact, products};
};

// Requette Fetch Post qui envoi l'objet de contact et tableau d'id
function passerCommande() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let data = JSON.stringify(assembleProductEtContact());
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data
    };
    fetch(config.path + config.api + "/order", requestOptions)
        .then((response) => response.json())
        .then((commande) => {
            localStorage.setItem("commande", JSON.stringify(commande))
            window.location.href='./confirmation.html'
        })
};
document.getElementById("confirmCommand").addEventListener("click", passerCommande);