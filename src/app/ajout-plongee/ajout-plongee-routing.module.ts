import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutPlongeePage } from './ajout-plongee.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutPlongeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutPlongeePageRoutingModule {}
