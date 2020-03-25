import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPlongeePageRoutingModule } from './details-plongee-routing.module';

import { DetailsPlongeePage } from './details-plongee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPlongeePageRoutingModule
  ],
  declarations: [DetailsPlongeePage]
})
export class DetailsPlongeePageModule {}
