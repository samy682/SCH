import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeGonfleursPageRoutingModule } from './liste-gonfleurs-routing.module';

import { ListeGonfleursPage } from './liste-gonfleurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeGonfleursPageRoutingModule
  ],
  declarations: [ListeGonfleursPage]
})
export class ListeGonfleursPageModule {}
