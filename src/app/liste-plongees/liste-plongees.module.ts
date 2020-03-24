import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListePlongeesPageRoutingModule } from './liste-plongees-routing.module';

import { ListePlongeesPage } from './liste-plongees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListePlongeesPageRoutingModule
  ],
  declarations: [ListePlongeesPage]
})
export class ListePlongeesPageModule {}
