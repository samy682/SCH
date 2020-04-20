import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ConnectionService } from '../connection.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-reservation',
  templateUrl: './details-reservation.page.html',
  styleUrls: ['./details-reservation.page.scss'],
})
export class DetailsReservationPage implements OnInit {

  id_plongee;
  id_membre;
  reservationPersoRequest: Observable<any>;
  listeReservationPersoList;

  reservationClubRequest: Observable<any>;
  listeReservationClubList;
  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient, public connexionService: ConnectionService, public navCtrl: NavController) { }

  ngOnInit() {
    this.connexionService = new ConnectionService();
    this.id_plongee = this.activatedRoute.snapshot.paramMap.get('id_plongee');
    this.id_membre = this.activatedRoute.snapshot.paramMap.get('id_membre');

    this.reservationPersoRequest = this.httpClient.get('http://api/get/listeReservationPerso/' + this.id_plongee + "-" + this.id_membre);
    this.reservationPersoRequest.subscribe(data => {
      this.listeReservationPersoList = data;
      console.log("TEST",this.listeReservationPersoList);
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });

    this.reservationClubRequest = this.httpClient.get('http://api/get/listeReservationClub/' + this.id_plongee + "-" + this.id_membre);
    this.reservationClubRequest.subscribe(data => {
      this.listeReservationClubList = data;
      console.log("TEST",this.listeReservationClubList);
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });


  }

}
