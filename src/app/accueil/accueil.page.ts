import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(public connexion: ConnectionService) { }

  ngOnInit() {
    console.log("Id de connexion : ",this.connexion.id)
    console.log("Nom de connexion : ",this.connexion.nom)
    console.log("Prenom de connexion : ",this.connexion.prenom)
  }

}
