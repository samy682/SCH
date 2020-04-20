
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ConnectionService } from '../connection.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.page.html',
  styleUrls: ['./liste-reservation.page.scss'],
})
export class ListeReservationPage implements OnInit {
  id_plongee;
  reservationPersoRequest: Observable<any>;
  listeReservationPersoList;

  reservationClubRequest: Observable<any>;
  listeReservationClubList;

  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient, public connexionService: ConnectionService, public navCtrl: NavController) { }

  ngOnInit() {
    this.connexionService = new ConnectionService();
    this.id_plongee = this.activatedRoute.snapshot.paramMap.get('id');

    this.reservationPersoRequest = this.httpClient.get('http://api/get/listeReservationPerso/' + this.id_plongee);
    this.reservationPersoRequest.subscribe(data => {
      this.listeReservationPersoList = data;
      console.log(this.listeReservationPersoList);
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });


  

    this.reservationClubRequest = this.httpClient.get('http://api/get/listeReservationClub/' + this.id_plongee);
    this.reservationClubRequest.subscribe(data => {
      this.reservationClubRequest = data;
      console.log(this.listeReservationClubList);
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });






  }




}
