import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoconfiancaPageRoutingModule } from './autoconfianca-routing.module';

import { AutoconfiancaPage } from './autoconfianca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoconfiancaPageRoutingModule
  ],
  declarations: [AutoconfiancaPage]
})
export class AutoconfiancaPageModule {}
