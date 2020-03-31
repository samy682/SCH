import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { DetailsPlongeePage } from '../details-plongee/details-plongee.page';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-liste-gonfleurs',
  templateUrl: './liste-gonfleurs.page.html',
  styleUrls: ['./liste-gonfleurs.page.scss'],
})
export class ListeGonfleursPage implements OnInit {
  gonfleur: Observable<any>;
  gonfleurList;

  constructor(public httpClient: HttpClient, public navCtrl: NavController) {
   
   }

  ngOnInit() {
    this.gonfleur = this.httpClient.get('http://api/get/gonfleur');
    this.gonfleur.subscribe(data => {
     this.gonfleurList = data; 
     console.log(this.gonfleurList);
    }) 
    
  }
  ouvrirDetailsPlongee(gonfleur){
    this.navCtrl.navigateForward('/details-plongee/' + gonfleur[0]);
  }
}
