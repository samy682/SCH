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
      this.appPages[2].title = "connexion";
      this.appPages[2].url = "/login";
      this.appPages[2].icon = "log-in";
    } else {


      
      this.appPages[2].title = "Liste des gonfleurs";
      this.appPages[2].url = "/liste-gonfleurs";
      this.appPages[2].icon = "list";
      

      this.appPages[2].title = "déconnexion";
      this.appPages[2].url = "/logout";
      this.appPages[2].icon = "/log-out";
    }
  }
}
