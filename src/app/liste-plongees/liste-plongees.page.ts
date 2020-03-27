import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { DetailsPlongeePage } from '../details-plongee/details-plongee.page';

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

  constructor(public httpClient: HttpClient, public navCtrl: NavController) { 
   
    this.plonge = this.httpClient.get('http://api/get/plongee');
    this.plonge
    .subscribe(data => {
     this.plongeeList = data; 
     console.log(data);
    }) 
  }

  ouvrirDetailsPlongee(plongee){
    this.navCtrl.navigateForward('/details-plongee/' + plongee[0]);
  }

}