const nounourse = [{"colors":["Tan","Chocolate","Black","White"],"_id":"5be9c8541c9d440000665243","name":"Norbert","price":2900,"imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_1.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Pale brown","Dark brown","White"],"_id":"5beaa8bf1c9d440000a57d94","name":"Arnold","price":3900,"imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_2.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Brown"],"_id":"5beaaa8f1c9d440000a57d95","name":"Lenny and Carl","price":5900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_3.jpg"},{"colors":["Brown","Blue","Pink"],"_id":"5beaabe91c9d440000a57d96","name":"Gustav","price":4500,"imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_4.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Beige","Tan","Chocolate"],"_id":"5beaacd41c9d440000a57d97","name":"Garfunkel","price":5500,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://oc-p5-api.herokuapp.com/images/teddy_5.jpg"}]

function afficherLeToutSousFormeDeDivision(nounours) {
    for (let elem of nounours) {
        let newNournours = document.createElement("div");       // Création d'une div pour chaque nounourse
        newNournours.id = elem._id;     // Id donné à chaque div
        document.getElementById("produits").appendChild(newNournours);   //Div placé avant la div avec l'id "produits"
        let newName = document.createElement("h2");     // Création d'un titre pour la Div
        newName.textContent = elem.name;    // Le titre est le nom du nounourse
        document.getElementById(elem._id).appendChild(newName);     // titre placé dans la div
        let newImg = document.createElement("img");     // création d'une image
        newImg.setAttribute("src", elem.imageUrl);  // implémentation de l'attribut "src"
        document.getElementById(elem._id).appendChild(newImg);  //image placé dans la div
        let newPrix = document.createElement("p");  // création d'un paragraphe avec le texte
        newPrix.textContent = elem.price;   // le prix est celui du nounours
        document.getElementById(elem._id).appendChild(newPrix); // prix placé dans la div
        let newButton = document.createElement("button");   // création d'un bouton
        newButton.textContent = "voir produit";     // text renseigné dans le bouton
        document.getElementById(elem._id).appendChild(newButton);       // boutton placé dans la div
    }
};

afficherLeToutSousFormeDeDivision(nounourse);