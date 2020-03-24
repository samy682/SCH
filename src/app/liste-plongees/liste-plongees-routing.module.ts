import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListePlongeesPage } from './liste-plongees.page';

const routes: Routes = [
  {
    path: '',
    component: ListePlongeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListePlongeesPageRoutingModule {}
