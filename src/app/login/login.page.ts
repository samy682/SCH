import {Validators, FormBuilder, FormGroup } from '@angular/forms';



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

  
  loginData = {};
  logForm() {
    console.log(this.loginData);
  }



}
