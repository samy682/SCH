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
  lieu: Observable<any>;
  lieuList;

  membreDP: Observable<any>;
  membreDPList;

  secu: Observable<any>;
  secuList;

  gonfleur: Observable<any>;
  gonfleurList;
  constructor(public httpClient: HttpClient, public navCtrl: NavController,public connexion: ConnectionService) {
      this.lieu = this.httpClient.get('http://api/get//lieu');
      this.lieu.subscribe(data => {
      this.lieuList = data; 
        console.log(this.lieuList) 

      }) 
      this.membreDP = this.httpClient.get('http://api/get/membre/niveau/dp');
      this.membreDP.subscribe(data => {
      this.membreDPList = data; 
      console.log(this.membreDPList) 

    }) 
    this.secu = this.httpClient.get('http://api/get/membre/niveau/secu');
    this.secu.subscribe(data => {
    this.secuList = data; 
    console.log("secu",this.secuList) 

  }) 
  this.gonfleur = this.httpClient.get('http://api/get/membre/niveau/secu');
    this.gonfleur.subscribe(data => {
    this.gonfleurList = data; 
    console.log("gonfleur",this.gonfleurList) 

  }) 






    
   }

  ngOnInit() {
  }

}
