import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotivacaoPageRoutingModule } from './motivacao-routing.module';

import { MotivacaoPage } from './motivacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotivacaoPageRoutingModule
  ],
  declarations: [MotivacaoPage]
})
export class MotivacaoPageModule {}
