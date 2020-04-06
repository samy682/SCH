import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ConnectionService } from '../connection.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ajout-plongee',
  templateUrl: './ajout-plongee.page.html',
  styleUrls: ['./ajout-plongee.page.scss'],
})
export class AjoutPlongeePage implements OnInit {

  plongeeData = {
    type: "",
    lieu: "",
    directeur: "",
    secu: "",
    gonfleur: ""
  };

  from_date: any;

  lieu: Observable<any>;
  lieuList;

  membreDP: Observable<any>;
  membreDPList;

  secu: Observable<any>;
  secuList;

  gonfleur: Observable<any>;
  gonfleurList;

  put: Observable<any>;

  constructor(public httpClient: HttpClient, public navCtrl: NavController, public connexion: ConnectionService) {
      this.lieu = this.httpClient.get('http://api/get//lieu');
      this.lieu.subscribe(data => {
      this.lieuList = data; 
      }) 
      this.membreDP = this.httpClient.get('http://api/get/membre/niveau/dp');
      this.membreDP.subscribe(data => {
      this.membreDPList = data; 
    }) 
    this.secu = this.httpClient.get('http://api/get/membre/niveau/secu');
    this.secu.subscribe(data => {
    this.secuList = data; 
  }) 
  this.gonfleur = this.httpClient.get('http://api/get/membre/niveau/secu');
    this.gonfleur.subscribe(data => {
    this.gonfleurList = data; 
  });
}

  ngOnInit() {
  }

  ajout(){
    console.log('http://api/put/plongee/' + this.from_date.substring(0, 10) + '-' + this.plongeeData.lieu + '-' +
    this.plongeeData.directeur + '-' + this.plongeeData.secu + '-' + this.plongeeData.gonfleur + '-' + this.plongeeData.type);

    this.put = this.httpClient.get('http://api/put/plongee/' + this.from_date.substring(0, 10) + '-' + this.plongeeData.lieu + '-' +
     this.plongeeData.directeur + '-' + this.plongeeData.secu + '-' + this.plongeeData.gonfleur + '-' + this.plongeeData.type);

    this.put.subscribe(data => {
          this.navCtrl.navigateForward('/liste-plongees');
          console.log(data);
      }); 
  }

}
