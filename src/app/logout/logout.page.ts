import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public navCtrl: NavController, public connexionService: ConnectionService) { }

  ngOnInit() {
    this.connexionService = new ConnectionService;
    this.connexionService.disconnect();
    this.navCtrl.navigateForward('/accueil');
  }

}
