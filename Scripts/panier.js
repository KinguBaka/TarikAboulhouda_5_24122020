// ----------- AFFICHER LE PANIER -------------
function afficherLePanier () {
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
}
afficherLePanier();


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

function passerLaCommande() {
    let products = creerTableauCommande();
    let contact = creerObjetContact();
    return {contact, products};
};

function pageLinkCommande(commande) {
    let linkCommande = document.getElementById("confirmCommand");
    linkCommande.setAttribute("formaction", "confirmation.html?id"+commande.orderId)
}

async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(passerLaCommande())
    })
        .then((response) => response.json())
        .then((commande) => pageLinkCommande(commande)) 
};

