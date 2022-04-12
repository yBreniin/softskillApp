import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotivacaoPage } from './motivacao.page';

const routes: Routes = [
  {
    path: '',
    component: MotivacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotivacaoPageRoutingModule {}
