import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-details-plongee',
  templateUrl: './details-plongee.page.html',
  styleUrls: ['./details-plongee.page.scss'],
})
export class DetailsPlongeePage implements OnInit {
  selectedItem; any;
  public id: string;
  plongee: Observable<any>;
  membres: Observable<any>;
  membresList;
  ajout: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient,public connexion: ConnectionService,public navCtrl: NavController){
  }

   ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const body = {id: this.id};
    this.plongee = this.httpClient.get('http://api/get/plongee/details/' + this.id)
    this.plongee.subscribe(data => {
      this.plongee = data;
      console.log(this.plongee);
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
    this.membres = this.httpClient.get('http://api/get/plongee/participants/' + this.id)
    this.membres.subscribe(datas => {
      this.membresList = datas;
      console.log(this.membresList);
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });

}

  inscriptionPlongee()
  {
    //console.log("Id du connecté : ",ConnectionService._instance.id);
    //console.log("Test");
    this.ajout = this.httpClient.get('http://api/get/plongee/membre/'+this.plongee[0]+'-'+ConnectionService._instance.id);
    this.ajout.subscribe(data => {
      this.ajout = data;
      console.log(this.ajout);
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
    
    this.navCtrl.navigateForward('/liste-plongees');
    
  }

}
