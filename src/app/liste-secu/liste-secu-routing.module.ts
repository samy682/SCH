import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeSecuPage } from './liste-secu.page';

const routes: Routes = [
  {
    path: '',
    component: ListeSecuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeSecuPageRoutingModule {}
