import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConnectionService } from './connection.service';
import { NavController, NavParams } from '@ionic/angular';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  
  public appPages = [
    {
      title: 'Acceuil',
      url: '/accueil',
      icon: 'home'
    },
    {
      title: 'Liste des plongées',
      url: '/liste-plongees',
      icon: 'list'
    },
    {
      title: 'Connexion',
      url: '/login',
      icon: 'log-in'
    }
  ];
 
  private connexionService: ConnectionService
  public obj = {}

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  maj(){
    this.connexionService = new ConnectionService();
    if(this.connexionService.id == null){
      this.addUri("Connexion", "/login", "log-in");
      this.removeUri("Déconnexion");
      this.removeUri("Gonfleurs");
    } else {
      this.removeUri("Connexion");
      this.addUri("Gonfleurs", "/liste-gonfleurs", "list");
      this.addUri("Déconnexion", "/logout", "log-out");
    }
  }

  addUri(title: string, url: string, icon: string){
    let exist: boolean = false;
    for (let entry of this.appPages) {
      if(entry.title === title){
        exist = true;
      }
    }
    if(!exist){
      this.appPages.push({
        title: title,
        url: url,
        icon: icon
      });
    }
  }

  removeUri(title: string){
    let id = 0;
      for (let entry of this.appPages) {
        if(entry.title === title){
          this.appPages.splice(id, 1);
        }
        id++;
      }
  }
}
