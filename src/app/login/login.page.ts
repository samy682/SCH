import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { ConnectionService } from '../connection.service';
import { NavController, NavParams } from '@ionic/angular';
import { AppComponent } from '../app.component';



import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  template: `
      
      <form (ngSubmit)="logForm()">
      <ion-header [translucent]="true">
        <ion-toolbar >
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
            </ion-buttons>
          <ion-title>Connexion</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item lines="full">
        <ion-label position="floating">Email</ion-label>
        <ion-input type="text" [(ngModel)]="loginData.email" name="Email"></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label position="floating">Mot de passe</ion-label>
        <ion-input type="password" [(ngModel)]="loginData.password" name="Password"></ion-input>
      </ion-item>

      <ion-row>
        <ion-col>
          <ion-button type="submit" color="danger" expand="block" >Connexion</ion-button>
        </ion-col>
      </ion-row>
    </form>
    
  `,
})


export class LoginPage {

  connexion: Observable<any>;

  constructor(public httpClient: HttpClient, public navCtrl: NavController, public app: AppComponent,public connectionService: ConnectionService){
    this.connectionService = new ConnectionService();
  }

  loginData = {
    email: "",
    password: ""
  };

  logForm() {
    this.connexion = this.httpClient.get('http://api/get/auth/' + this.loginData.email + "-" + this.loginData.password)
    this.connexion.subscribe(data => {
      
        if(data.length === 0){
          const alert = document.createElement('ion-alert');
          alert.header = 'Attention';
          alert.subHeader = 'Connexion impossible';
          alert.message = 'Identifiant ou mot de passe eroné.';
          alert.buttons = ['OK'];
          document.body.appendChild(alert);
          return alert.present();
        } else {
         // this.connectionService
          this.connectionService.id = data[0][0];
          this.connectionService.prenom = data[0][1];
          this.connectionService.nom = data[0][2];
          this.connectionService.email = data[0][4];
          console.log(this.connectionService);
         
          this.navCtrl.navigateForward('/accueil');
          this.app.maj();
        }
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
  }



}
