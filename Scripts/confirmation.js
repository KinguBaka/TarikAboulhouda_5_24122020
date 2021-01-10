
function afficherInformation() {
    let informations = JSON.parse(localStorage.getItem("commande"));
    let Prix = localStorage.getItem("prixTotalCommande");
    console.log(informations.contact.firstName);
    let nom = document.getElementById("nom");
    nom.innerHTML = informations.contact.lastName.toUpperCase();
    let idCommande = document.getElementById("idCommande");
    idCommande.innerHTML = informations.orderId;
    let totalPrix = document.getElementById("totalPrix");
    totalPrix.innerHTML = Prix;
    localStorage.clear();
}
afficherInformation()