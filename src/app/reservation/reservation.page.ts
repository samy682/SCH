import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ConnectionService } from '../connection.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  reservation: Observable<any>;

  constructor( public httpClient: HttpClient, public connexionService: ConnectionService, public navCtrl: NavController) { }

  ngOnInit() {
    this.connexionService = new ConnectionService();
    this.reservation = this.httpClient.get('http://api/get/materielclub');
      this.reservation.subscribe(data => {
      this.reservation = data;
      console.log(this.reservation);
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });

  }

}
