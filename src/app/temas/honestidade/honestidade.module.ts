import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HonestidadePageRoutingModule } from './honestidade-routing.module';

import { HonestidadePage } from './honestidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HonestidadePageRoutingModule
  ],
  declarations: [HonestidadePage]
})
export class HonestidadePageModule {}
