// Affiche les informations de la commande dans la page confirmation.html 
let informations = JSON.parse(localStorage.getItem("commande"));
let Prix = localStorage.getItem("prixTotalCommande");
let nom = document.getElementById("nom");
nom.innerHTML = informations.contact.lastName.toUpperCase();
let idCommande = document.getElementById("idCommande");
idCommande.innerHTML = informations.orderId;
let totalPrix = document.getElementById("totalPrix");
totalPrix.innerHTML = Prix;
localStorage.clear();