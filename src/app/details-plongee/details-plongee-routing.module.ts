import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPlongeePage } from './details-plongee.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPlongeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPlongeePageRoutingModule {}
