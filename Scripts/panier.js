// ----------- AFFICHER LE PANIER -------------
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

