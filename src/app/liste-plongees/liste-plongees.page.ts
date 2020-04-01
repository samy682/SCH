import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { DetailsPlongeePage } from '../details-plongee/details-plongee.page';
import { ConnectionService } from '../connection.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-plongees',
  templateUrl: './liste-plongees.page.html',
  styleUrls: ['./liste-plongees.page.scss'],
})
export class ListePlongeesPage  {
  plonge: Observable<any>;
  plongeeList;

  navParams: NavParams;

  constructor(public httpClient: HttpClient, public navCtrl: NavController,public connexion: ConnectionService) { 
    console.log("Id de connexion : ",this.connexion.id)
    console.log("Nom de connexion : ",this.connexion.nom)
    console.log("Prenom de connexion : ",this.connexion.prenom)
    this.plonge = this.httpClient.get('http://api/get/plongee');
    this.plonge
    .subscribe(data => {
     this.plongeeList = data; 
    // console.log("nom connexion : ", this.connexion.nom);
    
     for(let plongee of this.plongeeList)
    {
      if(this.connexion.nom ==  plongee[5] && this.connexion.prenom ==  plongee[4] )
      {
        console.log("Directeur = ", this.connexion.nom);
       //HTML elem =  document.getElementsByClassName("item-content");   
      
       
       
      }
    }
    //let games : HTMLCollectionOf<Element> = document.getElementsByClassName("item-content")
    //console.log("Test",games.item);
    let elements = document.getElementsByClassName("item-content");
    for (let key of Object.keys(elements)) {
      if(elements.hasOwnProperty(key)) {
        console.log(elements[key]);
      }
    }





    }) 

   

  }

  ouvrirDetailsPlongee(plongee){
    //console.log("Id de connexion : ",this.connexion.id)
    if(this.connexion.id == null && this.connexion.nom == null)
    {
      const alert = document.createElement('ion-alert');
      alert.header = 'Attention';
      alert.subHeader = 'Connexion impossible';
      alert.message = 'Vous devez vous connecter.';
      alert.buttons = ['OK'];
    
      document.body.appendChild(alert);
      return alert.present();
    }
    else
    {
      this.navCtrl.navigateForward('/details-plongee/' + plongee[0]);
    }
    
  }

}