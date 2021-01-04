/*function ajouteUnElementAuPanier() {
    let idName = document.getElementById("nameTitle").innerHTML;
    let color = document.getElementById("select").options[document.getElementById("select").selectedIndex].text;
    let price = document.getElementById("prix").innerHTML
    let quantity = 1;
    let panier = new Object;
    Object.defineProperty(panier, idName, {
        value: {"color":color, "price":price, "quantity": quantity}
    });
    localStorage.setItem("listeProduit", JSON.stringify(panier));
    console.log(panier);
}*/


/*function ajouteUnElementAuPanier() {
    let idName = document.getElementById("nameTitle").innerHTML;
    let color = document.getElementById("select").options[document.getElementById("select").selectedIndex].text;
    let price = document.getElementById("prix").innerHTML
    let panier = {}
    panier[idName] = [{"color":color, "price":price, "quantity":1}];
    localStorage.setItem("listeProduit", JSON.stringify(panier));
    console.log(panier);
}*/

function ajouteUnElementAuPanier() {
    //Récupére l'objet JSON deja renseigné dans le localstorage
    let oldItems = JSON.parse(localStorage.getItem("listeProduit")) || [];
    //création d'un nouvel objet
    let newItem = {
        "name" : document.getElementById("nameTitle").innerHTML,
        "color" : document.getElementById("select").options[document.getElementById("select").selectedIndex].text,
        "price" : document.getElementById("prix").innerHTML,
        "quantity" : 1
    };
    // Condiftion afin d'augmenter la quantité si l'element est deja présent NOK
    if (oldItems.length >= 1) {
        for (let elem of oldItems) {
            if (elem.name === newItem.name && 
                elem.color === newItem.color) {
                elem.quantity +=1;
            } else {
                oldItems.push(newItem);
            }
        }
    } else {
        oldItems.push(newItem);
    }
    //Ajoute l'array avec les nouveaus objet dans 
    localStorage.setItem("listeProduit", JSON.stringify(oldItems));
    console.log(typeof(oldItems));
}

/*function afficherLePanier () {
    let storagePanier = JSON.parse(localStorage.getItem("listeProduit"));
    let afficherPanier = document.getElementById("tableBody");
    console.log(storagePanier);
    for (let elem in storagePanier) {
        i = 1;
        let newElem = document.createElement("tr")
        newElem.id = i;
        afficherPanier.appendChild(newElem);
        let newArticle = document.createElement("td");
        let test = elem;
        newArticle.innerHTML = elem;
        document.getElementById(i).appendChild(newArticle);
        console.log(elem);
        /*for (let elem in storagePanier) {
            let newElement = document.createElement("td");
            newElement.innerHTML = storagePanier.Norbert[elem];
            document.getElementById(i).appendChild(newElement);
            console.log(storagePanier[0].elem);
        }
        for (let elem of storagePanier[test]) {
            /*let newElement = document.createElement("td");
            newElement.innerHTML = ;
            document.getElementById(i).appendChild(newElement);
            console.log(storagePanier[0].elem);
            console.log(elem["color"]);
        }
        i++
    }
}

afficherLePanier();*/

