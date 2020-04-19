import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsReservationPageRoutingModule } from './details-reservation-routing.module';

import { DetailsReservationPage } from './details-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsReservationPageRoutingModule
  ],
  declarations: [DetailsReservationPage]
})
export class DetailsReservationPageModule {}
