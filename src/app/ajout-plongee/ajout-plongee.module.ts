import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutPlongeePageRoutingModule } from './ajout-plongee-routing.module';

import { AjoutPlongeePage } from './ajout-plongee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutPlongeePageRoutingModule
  ],
  declarations: [AjoutPlongeePage]
})
export class AjoutPlongeePageModule {}
