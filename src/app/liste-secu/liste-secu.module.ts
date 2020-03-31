import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeSecuPageRoutingModule } from './liste-secu-routing.module';

import { ListeSecuPage } from './liste-secu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeSecuPageRoutingModule
  ],
  declarations: [ListeSecuPage]
})
export class ListeSecuPageModule {}
