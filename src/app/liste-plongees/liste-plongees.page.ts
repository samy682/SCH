import { Component } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-liste-plongees',
  templateUrl: './liste-plongees.page.html',
  styleUrls: ['./liste-plongees.page.scss'],
})
export class ListePlongeesPage  {
  plonge: Observable<any>;
  plongeeList;

  constructor(public httpClient: HttpClient) { 
   
    this.plonge = this.httpClient.get('http://api/get/plongee');
    console.log(this.plonge);
    this.plonge
    .subscribe(data => {
      for(let i in data)
      {
        console.log('Numero de la data : ', i);
        

      }
     this.plongeeList = data;
     console.log(this.plongeeList)
     
      
        
      
    })
    
   
    
    
  }

  ouvrirDetailsPlongee(){
    console.log("looool");
  }

}