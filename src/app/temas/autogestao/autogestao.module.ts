import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutogestaoPageRoutingModule } from './autogestao-routing.module';

import { AutogestaoPage } from './autogestao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutogestaoPageRoutingModule
  ],
  declarations: [AutogestaoPage]
})
export class AutogestaoPageModule {}
