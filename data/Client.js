class Client {
    constructor(numClient, nom, prenom, adresse, codePostal, ville, telephone){
        this.numClient = numClient;
        this.nom =  nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.ville = ville;
        this.telephone = telephone
    }

  afficherInfos() {
    console.log(`Client: ${this.prenom} ${this.nom}, ${this.adresse}, ${this.ville} ${this.codePostal}`);
  }
}

module.exports = Client;