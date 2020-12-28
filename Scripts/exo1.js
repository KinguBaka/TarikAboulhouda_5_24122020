const nounourse = [{"colors":["Tan","Chocolate","Black","White"],"_id":"5be9c8541c9d440000665243","name":"Norbert","price":2900,"imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_1.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Pale brown","Dark brown","White"],"_id":"5beaa8bf1c9d440000a57d94","name":"Arnold","price":3900,"imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_2.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Brown"],"_id":"5beaaa8f1c9d440000a57d95","name":"Lenny and Carl","price":5900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_3.jpg"},{"colors":["Brown","Blue","Pink"],"_id":"5beaabe91c9d440000a57d96","name":"Gustav","price":4500,"imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_4.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Beige","Tan","Chocolate"],"_id":"5beaacd41c9d440000a57d97","name":"Garfunkel","price":5500,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_5.jpg"}]

function afficherNomDesNounours(array){
    for (let elem of array) {
        console.log(elem.name);
    }
};

function afficherPrixTotal(array){
    let sum = 0;
    for (let elem of array) {
        sum += elem.price;
    }
    console.log(sum);
};

function afficherMoitiePrix(array){
    let solde = 0.5;
    for (let elem of array) {
        prix = elem.price * solde ;
        console.log(elem.name +  " à -50% est à " + prix + "€ !");
    }
};

function afficherColorisDisponible(array) {
    for (let elem of array) {
        console.log(elem.name + " est disponible en " + elem.colors.length + " couleurs !");
    }
};

function afficherSuperieurTrente(array) {
    for (let elem of array) {
        if (elem.price >= 3000) {
            console.log(elem.name + " coûte + de 30€ (il coûte " + elem.price + " €)");
        } else {
            console.log(elem.name + " est abordable! ( il coûte " + elem.price + " €)");
        }
    }
};

function afficherSommeDescription(array) {
    let somme = "";
    for (let elem of array) {
        somme += elem.description;
    }
    console.log(somme);
};

function afficherTroisiemeCouleurDispo(array) {
    for (let elem of array) {
        if (elem.colors.length >= 3){
            console.log("La troisieme couleur est " + elem.colors[2]);
        } else {
            console.log("Ce nounours ne posséde que " + elem.colors.length + " couleur(s)!");
        }
    }
};

function addTenToAge(age) {
    ageAdd = 10;
    age += ageAdd ;
    console.log(age);
}

addTenToAge(23);