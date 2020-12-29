
function afficherLeProduit(nounours) {
    for (let elem of nounours) {
        
    }
}





async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies') // will return info, but in wrong format
      .then((response) => response.json()) // will return info, in json format
      .then((nounours) => afficherLeProduit(nounours)) // main code here, using json info
  }
  
fillProducts()