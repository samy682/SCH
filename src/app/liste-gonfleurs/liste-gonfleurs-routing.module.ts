import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeGonfleursPage } from './liste-gonfleurs.page';

const routes: Routes = [
  {
    path: '',
    component: ListeGonfleursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeGonfleursPageRoutingModule {}
