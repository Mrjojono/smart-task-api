import Clients from './client.js';

class Compte{
    constructor(NumCompte, Libelle, DateOuverture, Solde, AutorisationDecouverte, MontantDecouvert,ClientId, Client )
    {
      this.NumCompte = NumCompte;
      this.Libelle = Libelle ;
      this.DateOuverture = DateOuverture;
      this.Solde = Solde; 
      this.AutorisationDecouverte = AutorisationDecouverte;
      this.MontantDecouvert = MontantDecouvert;
      this.ClientId = ClientId;
      this.Client = Clients;
    }

    Credit(montant){
       this.Solde += montant;
    }
    Debit(montant){
      if(this.Solde - montant >= (this.AutorisationDecouverte? - this.MontantDecouvert :0) ){
        this.Solde -= montant;
        return true;
      }else{
        console.log("Operation impossible");
        return false;
      }
    }

}