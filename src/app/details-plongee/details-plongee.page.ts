import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-details-plongee',
  templateUrl: './details-plongee.page.html',
  styleUrls: ['./details-plongee.page.scss'],
})
export class DetailsPlongeePage implements OnInit {
  selectedItem; any;
  public id: string;
  plongee;


  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient){
  }

   ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const body = {id: this.id};
    this.httpClient.get('http://api/get/plongee/details/' + this.id)
    .subscribe(data => {
      this.plongee = data;
      console.log(this.plongee); 
    },
    err => {
      console.log('Error: ' + err.error);
      console.log('Name: ' + err.name);
      console.log('Message: ' + err.message);
      console.log('Status: ' + err.status);
    });
   }

}
