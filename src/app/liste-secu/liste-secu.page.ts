import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { DetailsPlongeePage } from '../details-plongee/details-plongee.page';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-liste-secu',
  templateUrl: './liste-secu.page.html',
  styleUrls: ['./liste-secu.page.scss'],
})
export class ListeSecuPage implements OnInit {

  secu: Observable<any>;
  secuList;

  constructor(public httpClient: HttpClient, public navCtrl: NavController) { }

  ngOnInit() {
    this.secu = this.httpClient.get('http://api/get/secu');
    this.secu.subscribe(data => {
     this.secuList = data; 
     console.log(this.secuList);
    })
  }

  ouvrirDetailsPlongee(secu){
    this.navCtrl.navigateForward('/details-plongee/' + secu["id"]);
  }

}
