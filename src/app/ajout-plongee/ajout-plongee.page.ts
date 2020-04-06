import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-plongee',
  templateUrl: './ajout-plongee.page.html',
  styleUrls: ['./ajout-plongee.page.scss'],
})
export class AjoutPlongeePage implements OnInit {
  selectOptions = {
    title: 'Pizza Toppings',
    subTitle: 'Select your toppings',
    mode: 'md'
  };
  constructor() { }

  ngOnInit() {
  }

}
