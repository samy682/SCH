import { Component, OnInit } from '@angular/core';
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
export class ListePlongeesPage implements OnInit {
  plonge: Observable<any>;
  plongeeList;

  navParams: NavParams;

  constructor(public httpClient: HttpClient, public navCtrl: NavController, public connexion: ConnectionService) { 
    this.connexion = new ConnectionService;
    this.plonge = this.httpClient.get('http://api/get/plongee');
    this.plonge
    .subscribe(data => {
     this.plongeeList = data;     
      for(let plongee of this.plongeeList)
      {
        if(this.connexion.nom ==  plongee[5] && this.connexion.prenom ==  plongee[4] )
        {
         
        
        
        
        }
      }

    }) 
  }

  ngOnInit(){
    /*NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];*/
    var list : HTMLCollection;
    list = document.getElementsByClassName("item-content");
    console.log(list);
    console.log(list.item(2));
    console.log(list[0]);

  }

  ouvrirDetailsPlongee(plongee){
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

  ouvrirAjoutPlongee()
  {
    this.navCtrl.navigateForward('ajout-plongee');
  }

}

