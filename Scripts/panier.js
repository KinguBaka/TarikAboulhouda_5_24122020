
function ajouteUnElementAuPanier() {
    //Récupére l'objet JSON deja renseigné dans le localstorage
    let oldItems = JSON.parse(localStorage.getItem("listeProduit")) || [];
    //création d'un nouvel objet
    let newItem = {
        "name" : document.getElementById("nameTitle").innerHTML,
        "color" : document.getElementById("select").options[document.getElementById("select").selectedIndex].text,
        "quantity" : 1,
        "price" : Number(document.getElementById("prix").innerHTML)
    };
    // Condition afin d'augmenter la quantité si l'element est deja présent
    // et l'ajouter si il le l'es pas.
    let i = 0;
    if (oldItems.length == 0) {
        oldItems.push(newItem);
    } else {
        for (let elem of oldItems) {
            if (elem.name === newItem.name && 
                elem.color === newItem.color) {
                elem.price +=  elem.price / elem.quantity;
                elem.quantity += 1;
                i = 1;
                break
            }
        }
        if (i == 0) {
            oldItems.push(newItem);
        }
    }
    //Ajoute l'array avec les nouveaus objet dans 
    localStorage.setItem("listeProduit", JSON.stringify(oldItems));
}

function afficherLePanier () {
    let storagePanier = JSON.parse(localStorage.getItem("listeProduit"));
    let afficherPanier = document.getElementById("tableBody");
    let prix = 0;
    for (let i = 0; i < storagePanier.length; i ++) {
        let newElem = document.createElement("tr")
        afficherPanier.appendChild(newElem);
        for (let elem of Object.values(storagePanier[i])) {
            let newArticle = document.createElement("td");
            newArticle.innerHTML = elem;
            newElem.appendChild(newArticle);
        }
        for (let elem of Object.keys(storagePanier[i])) {
            if (elem == "price") {
                prix += storagePanier[i].price;
            }
        }
    }
    let totalPrix = document.getElementById("subTotal");
    totalPrix.textContent = prix;
}

afficherLePanier();

