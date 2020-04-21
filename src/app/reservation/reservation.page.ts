import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ConnectionService } from '../connection.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  reservationClubRequest: Observable<any>;
  reservationPersoRequest: Observable<any>;
  reservationClubPutRequest: Observable<any>;
  reservationPersoPutRequest: Observable<any>;
  materielClubList;
  materielPersoList;
  id_plongee;

  materielClubData = {
    id: ""
  };

  materielPersoData= {
    id: ""
  };

  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient, public connexionService: ConnectionService, public navCtrl: NavController) { }

  ngOnInit() {
    this.connexionService = new ConnectionService();
    this.id_plongee = this.activatedRoute.snapshot.paramMap.get('id');
    this.reservationClubRequest = this.httpClient.get('http://api/get/materiel/club');
      this.reservationClubRequest.subscribe(data => {
      this.materielClubList = data;
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });

    this.reservationPersoRequest = this.httpClient.get('http://api/get/materiel/perso/' + this.connexionService.id);
      this.reservationPersoRequest.subscribe(data => {
      this.materielPersoList = data;
      console.log(this.materielPersoList);
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
  }

  reserver(){
    for(let materiel_id of this.materielClubData.id){
      this.reservationClubPutRequest = this.httpClient.get('http://api/put/materielclub/' + this.connexionService.id + '-' + this.id_plongee + '-' + materiel_id);
      this.reservationClubPutRequest.subscribe(data => {});
    }

    for(let materiel_id of this.materielPersoData.id){
      this.reservationPersoPutRequest = this.httpClient.get('http://api/put/materielperso/' + this.connexionService.id + '-' + this.id_plongee + '-' + materiel_id);
      this.reservationPersoPutRequest.subscribe(data => {});
    }

    this.navCtrl.navigateForward('/details-plongee/' + this.id_plongee);
  }

}
