import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsReservationPage } from './details-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsReservationPageRoutingModule {}
