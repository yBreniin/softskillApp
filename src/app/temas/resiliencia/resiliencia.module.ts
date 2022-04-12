import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResilienciaPageRoutingModule } from './resiliencia-routing.module';

import { ResilienciaPage } from './resiliencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResilienciaPageRoutingModule
  ],
  declarations: [ResilienciaPage]
})
export class ResilienciaPageModule {}
