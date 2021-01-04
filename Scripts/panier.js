

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
    // Condition afin d'augmenter la quantité si l'element est deja présent
    // et l'ajouter si il le l'es pas.
    let i = 0;
    if (oldItems.length < 1) {
        oldItems.push(newItem);
    } else {
        for (let elem of oldItems) {
            if (elem.name === newItem.name && 
                elem.color === newItem.color) {
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

