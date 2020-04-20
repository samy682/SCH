import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeReservationPageRoutingModule } from './liste-reservation-routing.module';

import { ListeReservationPage } from './liste-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeReservationPageRoutingModule
  ],
  declarations: [ListeReservationPage]
})
export class ListeReservationPageModule {}
